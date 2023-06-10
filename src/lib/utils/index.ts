import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getRelativeTime = (time: string) => {
  return dayjs().to(time);
};
