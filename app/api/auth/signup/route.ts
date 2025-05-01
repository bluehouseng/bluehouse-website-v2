// app/api/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const stack = formData.get("stack") as string;
    const password = formData.get("password") as string;
    const image = formData.get("image") as File | null;

    // Basic validation
    if (!name || !email || !stack || !password) {
      return NextResponse.json(
        { error: "All fields are required: name, email, stack, password" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle image (use Cloudinary/S3 in production)
    let imageData: string | null = null;
    if (image) {
      const arrayBuffer = await image.arrayBuffer();
      imageData = Buffer.from(arrayBuffer).toString("base64");
      imageData = `data:${image.type};base64,${imageData}`;
    }

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        stack,
        password: hashedPassword,
        image: imageData,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          stack: newUser.stack,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Sign up error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}