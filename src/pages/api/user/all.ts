/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { userRepository } from '~/lib/handlers/user/User';

const router = createRouter<NextApiRequest, NextApiResponse>();

// Register route handlers to route
router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await userRepository.getAllSlugs();
  res.send(users);
});

// Intialise router
export default router.handler({
  onError(err, req, res) {
    res.status(500).json({
      error: (err as Error).message,
    });
  },
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
    externalResolver: true, // False positive warnings https://github.com/vercel/next.js/discussions/40270
  },
};
