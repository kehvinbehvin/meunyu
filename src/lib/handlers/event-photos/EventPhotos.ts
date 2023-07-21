/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { saveImages, loadImages, likeImage } from './EventPhotosManager';
import { multerMiddleware } from '../../clients/multer';
import { checkUser } from '../middleware/auth';
import * as Sentry from '@sentry/nextjs';
const multer = require('multer');

const registerEventPhotoRoutes = (router: any) => {
  postEventPhotos(router);
  getEventPhotos(router);
};

const postEventPhotos = (router: any) => {
  router.post(
    checkUser,
    (req: NextApiRequest, res: NextApiResponse, next: any) => {
      multerMiddleware(req, res, (error: any) => {
        if (error instanceof multer.MulterError) {
            Sentry.captureException(error);
            return res.status(500).send(error + "\n" + "Error due to multer upload to S3");
        } else if (error) {
            Sentry.captureException(error);
            return res.status(500).send(error+ "\n" + "Unknown error uploading to S3");
        }
        // Everything went fine.
        next();
    })
    },
    async (req: any, res: NextApiResponse) => {
      if (req.files.length === 0) {
        Sentry.captureException("[postEventPhotos]: No file detected");
        return res.status(500).json({ error: 'No file uploaded to S3, check Sentry logs' });
      } else {
        const images = await saveImages(
          req.user.id,
          req.files,
          req.body.captions
        );

        if (images === null) {
          return res.status(500).json({ error: 'Error uploading image' });
        }

        if (images && images.length > 0) {
          await likeImage(req.user.id, images[0].fid);
        }
        res.json(images);
      }
    }
  );
};

const getEventPhotos = (router: any) => {
  router.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { limit = '20', offset = '0', sort = '' } = req.query;

    if (Array.isArray(sort)) {
      return res.status(401).json({ errorMessage: 'Invalid query' });
    }

    const files = await loadImages({ limit: +limit, offset: +offset, sort });

    res.json({ data: files });
  });
};

export default registerEventPhotoRoutes;
