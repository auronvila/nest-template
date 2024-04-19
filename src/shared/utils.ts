import * as dayjs from 'dayjs';

export default function getCurrentDateFormated(): string {
  const newDate = new Date();
  const formattedDate = dayjs(newDate).format('DD-MM-YYYY:HH:mm');
  return formattedDate;
}
