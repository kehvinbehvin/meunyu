/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from "next";
import { saveImages, loadImages } from "./EventPhotosManager"
import { multerMiddleware } from "../../clients/multer"
import { checkUser } from "../middleware/auth"

const registerEventPhotoRoutes = (router: any) => {
    postEventPhotos(router)
    getEventPhotos(router)
}

const postEventPhotos = (router: any) => {
    router.post(checkUser, multerMiddleware, async (req: any, res: NextApiResponse) => {
        if (req.files.length === 0) {
            res.json({ data: []})
        } else {
            const savedFiles = await saveImages(req.files)
            res.json({ data: savedFiles });
        }
    })
}

const getEventPhotos = (router: any) => {
    router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        const files = await loadImages({range: 1})
        res.json({ data: files})
    })
}


export default registerEventPhotoRoutes