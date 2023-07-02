/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { likeImage } from '~/lib/handlers/event-photos/EventPhotosManager';
import { checkUser } from '~/lib/handlers/middleware/auth';
import { userRepository } from '~/lib/handlers/user/User';

const router = createRouter<NextApiRequest, NextApiResponse>();

// Register route handlers to route
// @ts-ignore
router.post(checkUser, async (req: NextApiRequest, res: NextApiResponse) => {
  const imageId = req.query.id as string;
  // @ts-ignore
  const authorId = req.user.id;
  const response = await likeImage(authorId, +imageId);
  res.send({ success: true, ...response });
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
