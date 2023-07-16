import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import html2canvas from 'html2canvas';

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
