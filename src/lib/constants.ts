export const constants = {
  allowedFileTypes: ['png', 'jpg', 'jpeg', 'heic', 'webp', 'bmp', 'tiff'],
  imageUploadLimit: process.env.NEXT_PUBLIC_FILE_UPLOAD_LIMIT || 10000000, // 10 MB
};
