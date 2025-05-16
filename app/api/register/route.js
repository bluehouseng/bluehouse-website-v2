// app/api/auth/register/route.js
import { dbConnect } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import User from '../../../model/user';

export async function POST(request) {
  try {
    const { email, password, name, stack } = await request.json();

    if (!email || !password || !name || !stack) {
      return NextResponse.json(
        { error: 'Email, password, name, and stack are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await dbConnect();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);
    
    // Create new user
    await User.create({
      email,
      password: hashedPassword,
      name,
      stack,
      createdAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      message: 'User registered successfully',
      redirectUrl: '/auth/login'
    });
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}