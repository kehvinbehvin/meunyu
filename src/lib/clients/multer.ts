/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
const multer = require('multer');
const multerS3 = require('multer-s3');
import * as Sentry from '@sentry/nextjs';
import { cloudStorageProvider } from "./s3"

const fileSize = () => {
    const defaultValue = 3000000

    if (process.env.S3_FILE_UPLOAD_SIZE === undefined || process.env.S3_FILE_UPLOAD_SIZE === null) {
        return defaultValue
    }

    if (isNaN(+process.env.S3_FILE_UPLOAD_SIZE)) {
        return defaultValue
    }

    if (+process.env.S3_FILE_UPLOAD_SIZE <= 0) {
        return defaultValue
    }

    return +process.env.S3_FILE_UPLOAD_SIZE
}

const upload = multer({
    storage: multerS3({
        s3: cloudStorageProvider(),
        bucket: process.env.S3_BUCKET_NAME,
        key: function (req: any, file: any, cb: any) {
            const fileName = file.originalname.toLowerCase()
            const fileExt = fileName.substring(fileName.lastIndexOf('.')+1, fileName.length) || fileName;
            cb(null, Date.now().toString() + '.' + fileExt);
        },
        contentType: multerS3.AUTO_CONTENT_TYPE
    }),
    fileFilter: function(req: any, file: any, cb: any){
        checkFileType(file, cb);
    },
    limits: {
        fields: 1,
        fieldSize: 20000, // TODO: Check if this size is enough
        fileSize: fileSize() , // Default 3 MB limit
    },
}).array("file", parseInt(process.env.S3_FILE_UPLOAD_LIMIT ?? "0"));

const checkFileType = (file: any, cb: Function) => {
    const extTypes = ['png','jpg','jpeg','heic','webp','bmp','tiff']
    const mimeTypes = ['image/png','image/jpg','image/jpeg', 'image/heic', 'image/webp', 'image/bmp','image/tiff']

    const fileName = file.originalname.toLowerCase()
    const fileExt = fileName.substring(fileName.lastIndexOf('.')+1, fileName.length) || fileName;

    if (!extTypes.includes(fileExt)) {
        Sentry.captureException("File " + fileExt + " upload extension type not valid");
        return cb(null, false);
    }

    if (!mimeTypes.includes(file.mimetype)) {
        Sentry.captureException("File " + file.mimetype + " upload mimetype not valid");
        return cb(null, false);
    }

    return cb(null, true);
}

export const multerMiddleware = upload