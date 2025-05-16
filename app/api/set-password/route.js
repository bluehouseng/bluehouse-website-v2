import { dbConnect } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import User from '../../../model/user';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await dbConnect();
    
    // Find the user
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user already has a password set
    if (user.password) {
      return NextResponse.json(
        { error: 'User already has a password set. Please use the login page or password reset feature.' },
        { status: 400 }
      );
    }

    // Hash the password (10 is the salt rounds)
    const hashedPassword = await hash(password, 10);
    
    // Update the user's password
    user.password = hashedPassword;
    await user.save();
    
    return NextResponse.json({
      success: true,
      message: 'Password set successfully',
      redirectUrl: '/auth/login'
    });
  } catch (error) {
    console.error('Error setting password:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}