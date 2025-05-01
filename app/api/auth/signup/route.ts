// app/api/signup/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@/generated/prisma/client'; // Adjust if your prisma client path differs

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, stack, image } = body;

    // Basic validation
    if (!email || !password || !name || !stack) {
      return NextResponse.json(
        { error: 'All fields are required: name, email, stack, password' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in MongoDB
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        stack,
        image,
      },
    });

    // Create a session token (for demonstration only; use secure token generation in production)
    const sessionToken = 'signup-session-token-' + Date.now();

    const response = NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          stack: newUser.stack,
        },
      },
      { status: 201 }
    );

    // Set cookie
    response.cookies.set('session_token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Sign up error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
