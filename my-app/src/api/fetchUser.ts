import prisma from '../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      const users = await prisma.user.findMany()
      res.status(200).json({ users: users });
}