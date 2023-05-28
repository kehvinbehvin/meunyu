/* eslint-disable */
const multer = require('multer');
const multerS3 = require('multer-s3');
import { cloudStorageProvider } from "./s3"

const upload = multer({
    storage: multerS3({
        s3: cloudStorageProvider(),
        bucket: process.env.S3_BUCKET_NAME,
        key: function (req: any, file: any, cb: any) {
            console.log(file)
            cb(null, Date.now().toString());
        }
    }),
    fileFilter: function(req: any, file: any, cb: any){
        checkFileType(file, cb);
    },
    limits: {
        fields: 1,
        fieldSize: 20000, //TODO: Check if this size is enough
        fileSize: 150000, // 150 KB for a 1080x1080 JPG 90
    },
});

const checkFileType = (file: any, cb: Function) => {
    const extTypes = ['png','jpg','jpeg']
    const mimeTypes = ['image/png','image/jpg','image/jpeg'] 

    const fileName = file.originalname.toLowerCase()
    const fileExt = fileName.substring(fileName.lastIndexOf('.')+1, fileName.length) || fileName;

    if (!extTypes.includes(fileExt)) {
        return cb(null, false);
    }

    if (!mimeTypes.includes(file.mimetype)) {
        return cb(null, false);
    }

    return cb(null, true);
}

export const multerMiddleware = upload.array("file", parseInt(process.env.S3_FILE_UPLOAD_LIMIT ?? "0"))