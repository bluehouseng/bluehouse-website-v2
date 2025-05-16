import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { dbConnect } from "./lib/mongoose"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authOptions = {
  // Configure MongoDB Adapter
  adapter: MongoDBAdapter({
    db: (async () => {
      const { db } = await dbConnect();
      return db;
    })()
  }),
  
  // Configure session strategy
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  // Configure providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { db } = await dbConnect();
        const user = await db.collection("users").findOne({ 
          email: credentials.email 
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
        };
      }
    })
  ],
  
  // Callbacks
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
};

export default NextAuth(authOptions);
