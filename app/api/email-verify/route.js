// app/api/auth/email-verify/route.js
import { dbConnect } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';
import User from '../../../model/user';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB using mongoose
    await dbConnect();
    
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    
    if (user) {
      // Check if user already has a password set
      if (user.password) {
        // User exists with password, send them to login
        return NextResponse.json({
          exists: true,
          hasPassword: true,
          redirectUrl: `/auth/login?email=${encodeURIComponent(email)}`,
          message: 'User found. Please login with your credentials.'
        });
      } else {
        // User exists but no password, send them to password set flow
        return NextResponse.json({
          exists: true,
          hasPassword: false,
          redirectUrl: `/auth/set-password?email=${encodeURIComponent(email)}`,
          message: 'User found. Please set your password.'
        });
      }
    } else {
      // User doesn't exist, send them to registration flow
      return NextResponse.json({
        exists: false,
        redirectUrl: `/auth/register?email=${encodeURIComponent(email)}`,
        message: 'User not found. Please create an account.'
      });
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}