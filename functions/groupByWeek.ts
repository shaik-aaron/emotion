import dayjs from 'dayjs';

export default function groupByWeek(data: any, month: string, year: any) {
  const FINAL_DAYS_IN_MONTHS = {
    January: 31,
    February: Number(year) % 4 === 0 ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  const sortedData = new Map();
  data.forEach((emotion: any) => {
    if (month === 'February') {
      const day = dayjs(emotion.date).format('D');
      if (1 <= Number(day) && Number(day) <= 7) {
        if (sortedData.has('1-7')) {
          sortedData.set('1-7', [...sortedData.get('1-7'), emotion]);
        } else {
          sortedData.set('1-7', [emotion]);
        }
      } else if (8 <= Number(day) && Number(day) <= 14) {
        if (sortedData.has('8-14')) {
          sortedData.set('8-14', [...sortedData.get('8-14'), emotion]);
        } else {
          sortedData.set('8-14', [emotion]);
        }
      } else if (15 <= Number(day) && Number(day) <= 21) {
        if (sortedData.has('15-21')) {
          sortedData.set('15-21', [...sortedData.get('15-21'), emotion]);
        } else {
          sortedData.set('15-21', [emotion]);
        }
      } else if (
        22 <= Number(day) &&
        Number(day) <= FINAL_DAYS_IN_MONTHS[month]
      ) {
        if (sortedData.has(`22-${FINAL_DAYS_IN_MONTHS[month]}`)) {
          sortedData.set(`22-${FINAL_DAYS_IN_MONTHS[month]}`, [
            ...sortedData.get(`22-${FINAL_DAYS_IN_MONTHS[month]}`),
            emotion,
          ]);
        } else {
          sortedData.set(`22-${FINAL_DAYS_IN_MONTHS[month]}`, [emotion]);
        }
      }
    } else {
      const day = dayjs(emotion.date).format('D');
      if (1 <= Number(day) && Number(day) <= 7) {
        if (sortedData.has('1-7')) {
          sortedData.set('1-7', [...sortedData.get('1-7'), emotion]);
        } else {
          sortedData.set('1-7', [emotion]);
        }
      } else if (8 <= Number(day) && Number(day) <= 14) {
        if (sortedData.has('8-14')) {
          sortedData.set('8-14', [...sortedData.get('8-14'), emotion]);
        } else {
          sortedData.set('8-14', [emotion]);
        }
      } else if (15 <= Number(day) && Number(day) <= 21) {
        if (sortedData.has('15-21')) {
          sortedData.set('15-21', [...sortedData.get('15-21'), emotion]);
        } else {
          sortedData.set('15-21', [emotion]);
        }
      } else if (22 <= Number(day) && Number(day) <= 28) {
        if (sortedData.has('22-28')) {
          sortedData.set('22-28', [...sortedData.get('22-28'), emotion]);
        } else {
          sortedData.set('22-28', [emotion]);
        }
      } else if (
        29 <= Number(day) &&
        Number(day) <= FINAL_DAYS_IN_MONTHS[month]
      ) {
        if (sortedData.has(`29-${FINAL_DAYS_IN_MONTHS[month]}`)) {
          sortedData.set(`29-${FINAL_DAYS_IN_MONTHS[month]}`, [
            ...sortedData.get(`29-${FINAL_DAYS_IN_MONTHS[month]}`),
            emotion,
          ]);
        } else {
          sortedData.set(`29-${FINAL_DAYS_IN_MONTHS[month]}`, [emotion]);
        }
      }
    }
  });

  return sortedData;
}
