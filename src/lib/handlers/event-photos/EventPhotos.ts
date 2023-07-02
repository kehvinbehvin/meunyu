/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { saveImages, loadImages, likeImage } from './EventPhotosManager';
import { multerMiddleware } from '../../clients/multer';
import { checkUser } from '../middleware/auth';

const registerEventPhotoRoutes = (router: any) => {
  postEventPhotos(router);
  getEventPhotos(router);
};

const postEventPhotos = (router: any) => {
  router.post(
    checkUser,
    multerMiddleware,
    async (req: any, res: NextApiResponse) => {
      if (req.files.length === 0) {
        res.status(400).json({ error: 'No file detected' });
      } else {
        const images = await saveImages(req.files);
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
    const { limit = '20', offset = '0' } = req.query;
    const files = await loadImages({ limit: +limit, offset: +offset });
    res.json({ data: files });
  });
};

export default registerEventPhotoRoutes;
