import dayjs from 'dayjs';
import groupByWeek from './groupByWeek';

export default function groupByMonth(data: any) {
  const sortedData = new Map();
  data.forEach((emotion: any) => {
    const monthAndYear = dayjs(emotion.date).format('MMMM YYYY');
    if (sortedData.has(monthAndYear)) {
      sortedData.set(monthAndYear, [...sortedData.get(monthAndYear), emotion]);
    } else {
      sortedData.set(monthAndYear, [emotion]);
    }
  });

  for (const [key, value] of sortedData.entries()) {
    const [dataMonth, dataYear] = key.split(' ');
    console.log(dataMonth + ',' + dataYear);
    const sortedByWeek = groupByWeek(value, dataMonth, dataYear);
    sortedData.set(key, sortedByWeek);
  }
  return sortedData;
}
