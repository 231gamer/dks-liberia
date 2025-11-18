import type { NextApiRequest, NextApiResponse } from 'next';
import postsData from '../../data/posts.json';

// TODO: Replace this local JSON import with a backend API call
// Example: const response = await fetch('https://api.dksliberia.org/posts');
// This endpoint should connect to your database or CMS to fetch blog posts dynamically

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Return all posts
      res.status(200).json(postsData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

