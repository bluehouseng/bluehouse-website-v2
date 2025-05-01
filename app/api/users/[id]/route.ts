import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma';
import { UserProfile } from '@/types';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          stack: true,
          image: true,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userProfile: UserProfile = {
        id: user.id,
        name: user.name,
        email: user.email,
        stack: user.stack,
        image: user.image || undefined,
      };

      return res.status(200).json(userProfile);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
  }

  if (req.method === 'PUT') {
    const { name, email, stack, image } = req.body;

    if (!name || !email || !stack) {
      return res.status(400).json({ error: 'Name, email, and stack are required' });
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          name,
          email,
          stack,
          image: image || null,
        },
        select: {
          id: true,
          name: true,
          email: true,
          stack: true,
          image: true,
        },
      });

      const userProfile: UserProfile = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        stack: updatedUser.stack,
        image: updatedUser.image || undefined,
      };

      return res.status(200).json(userProfile);
    } catch (error: any) {
      if (error.code === 'P2002' && error.meta?.target.includes('email')) {
        return res.status(400).json({ error: 'Email already in use' });
      }
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'Failed to update user' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}