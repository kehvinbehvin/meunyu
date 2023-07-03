/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { configService } from '~/lib/handlers/config/Config';
import { approveImage } from '~/lib/handlers/event-photos/EventPhotosManager';
import { checkUser } from '~/lib/handlers/middleware/auth';

const router = createRouter<NextApiRequest, NextApiResponse>();
// @ts-ignore
router.get(checkUser, async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  if (!req.user.isAdmin) {
    throw new Error('User is not admin');
  }

  const showMessages = await configService.getShowMessages();
  res.send({ showMessages });
});

// Register route handlers to route
// @ts-ignore
router.post(checkUser, async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  if (!req.user.isAdmin) {
    throw new Error('User is not admin');
  }

  await configService.setShowMessages(req.body.showMessages as boolean);
  res.send({ success: true });
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
    bodyParser: true, // Disallow body parsing, consume as stream
    externalResolver: true, // False positive warnings https://github.com/vercel/next.js/discussions/40270
  },
};
