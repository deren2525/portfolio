import dayjs from 'dayjs';

export function formattedDay (date: string): string {
  return dayjs(date).format('YYYY/MM/DD');
}
