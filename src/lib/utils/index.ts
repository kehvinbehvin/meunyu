import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import html2canvas from 'html2canvas';

import { constants } from '../constants';

dayjs.extend(relativeTime);

export const getRelativeTime = (time: string) => {
  return dayjs().to(time);
};

const downloadImage = (blob: string, fileName: string) => {
  const dummyLink = window.document.createElement('a');
  dummyLink.download = fileName;

  dummyLink.href = blob;

  document.body.appendChild(dummyLink);
  dummyLink.click();
  document.body.removeChild(dummyLink);

  dummyLink.remove();
};

export const exportAsImage = async (el: HTMLElement, imageFileName: string) => {
  const canvas = await html2canvas(el);
  const image = canvas.toDataURL('image/png', 1.0);
  downloadImage(image, imageFileName);
};

export const fileUploadGuard = (image: File | null): File => {
  if (!image) throw new Error('No file uploaded');
  const isExtensionValid = constants.allowedFileTypes.some((ext) =>
    image.name.toLowerCase().endsWith(ext)
  );
  if (!isExtensionValid) throw new Error('Invalid file type');
  if (image.size > constants.imageUploadLimit)
    throw new Error('File size exceed 10MB');
  return image;
};
