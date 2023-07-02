/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import registerEventPhotoRoutes from "../../../lib/handlers/event-photos/EventPhotos"

const router = createRouter<NextApiRequest, NextApiResponse>();

// Register route handlers to route
registerEventPhotoRoutes(router);

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