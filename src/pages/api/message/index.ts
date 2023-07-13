/* eslint-disable */
import { retrieveUserMessage } from "~/lib/handlers/messages/MessageManager"
import { configService } from '~/lib/handlers/config/Config';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { checkUser } from '~/lib/handlers/middleware/auth';

const router = createRouter<NextApiRequest, NextApiResponse>();

// Register route handlers to route
// @ts-ignore
router.get(checkUser, async (req: NextApiRequest, res: NextApiResponse) => {
    // @ts-ignore
    const user = req.user

    if (!user) {
        throw new Error('User is not logged in');
    }

    const showMessages = await configService.getShowMessages();
    if (!showMessages) {
        res.status(403).json({
            error: "Message not yet visible"
        })
    }

    const message = await retrieveUserMessage(user);
    if (message === "") {
        const defaultMessage = "This is the default"
        res.send({ message:  "<p>" + defaultMessage + "<p>" });
    }
    
    res.send({ message: "<p>" + message + "<p>" });
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