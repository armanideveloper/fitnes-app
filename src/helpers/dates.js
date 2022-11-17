export const diffInDays = (from, to) => Math.abs(Math.floor((new Date(from) - new Date(to)) / 864e5));

export const getDateXDaysAgo = (numOfDays, date = new Date()) => {
  const daysAgo = new Date(date.getTime());
  daysAgo.setDate(date.getDate() - numOfDays);

  return daysAgo;
};

export const getLastSunday = () => {
  const date = new Date();
  const today = date.getDate();
  const currentDay = date.getDay();
  const newDate = date.setDate(today - (currentDay || 7));
  return new Date(newDate);
};

export const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    return 'less';
  }

  if (date1 > date2) {
    return 'greater';
  }

  return 'equal';
};
