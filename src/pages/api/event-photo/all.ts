/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { getPendingImages } from '~/lib/handlers/event-photos/EventPhotosManager';
import { checkUser } from '~/lib/handlers/middleware/auth';

const router = createRouter<NextApiRequest, NextApiResponse>();

// Register route handlers to route
// @ts-ignore
router.get(checkUser, async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  if (!req.user.isAdmin) {
    throw new Error('User is not admin');
  }
  const response = await getPendingImages();
  res.send(response);
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
