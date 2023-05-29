/* eslint-disable */
import { S3Client } from '@aws-sdk/client-s3';

export const cloudStorageProvider = () => {
    return new S3Client({
        region: process.env.S3_REGION,
        credentials: {
            accessKeyId: process.env.S3_ACCESSKEY ?? '',
            secretAccessKey: process.env.S3_SECRETKEY ?? '',
        },
    }); 
}