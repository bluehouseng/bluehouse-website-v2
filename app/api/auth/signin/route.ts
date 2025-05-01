import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@/generated/prisma/client'; // adjust the path if needed

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, phone } = body;

    // Basic validation
    if (!email || !password || !name || !phone) {
      return NextResponse.json(
        { error: 'All fields are required: name, email, phone, password' },
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

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to MongoDB via Prisma
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        stack: phone, // You can change this if `stack` and `phone` are different
      },
    });

    // Generate a mock session token (in real apps, use JWT or a secure session system)
    const sessionToken = 'signup-session-token-' + Date.now();

    // Create response with cookie
    const response = NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
        },
      },
      { status: 201 }
    );

    // Set session token as cookie
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
