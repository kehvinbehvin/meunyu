/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { userRepository } from '~/lib/handlers/user/User';
import { jwtAuthentication } from '~/lib/handlers/auth/Authentication';

const router = createRouter<NextApiRequest, NextApiResponse>();

// Register route handlers to route
router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const user = userRepository.getUser(id as string);
  if (!user) {
    throw new Error('Invalid user ID');
  }
  const token = jwtAuthentication.generateToken(user);
  res.send({ ...user, token });
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
