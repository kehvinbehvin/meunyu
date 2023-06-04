/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from "next";
import { saveImages, loadImages } from "./EventPhotosManager"
import { multerMiddleware } from "../../clients/multer"

const registerEventPhotoRoutes = (router: any) => {
    postEventPhotos(router)
    getEventPhotos(router)
}

const postEventPhotos = (router: any) => {
    router.post(multerMiddleware, async (req: any, res: NextApiResponse) => {
        try {
            const files = req.files

            if (files === undefined) {
                return res.status(400).json({
                    "error": "Bad Request"
                })
            }
    
            if (files.length === 0) {
                return res.json({ data: []})
            }
    
            const savedFiles = await saveImages(req.files)
    
            return res.json({ data: savedFiles });   

        } catch (error: any) {
            return res.status(500).json({
                error: "Internal server error"
            })
        }
        
    })
}

const getEventPhotos = (router: any) => {
    router.get(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const { page } = req.query
        
            if (page === undefined) {    
                return res.status(400).json({
                    error: "Bad Request"
                })
            }
    
            const files = await loadImages({
                page: page,
                pageLimit: 2,
            })
            
            return res.json({ data: files})

        } catch (error: any) {
            return res.status(500).json({
                error: "Internal server error"
            })
        }
        
    })
}


export default registerEventPhotoRoutes