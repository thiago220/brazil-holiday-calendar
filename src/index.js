const { getNationalHolidays } = require('./data/nationalHolidays');
const { getStateHolidays, addStateHoliday } = require('./data/stateHolidays');
const { getMunicipalHolidays, addMunicipalHoliday } = require('./data/municipalHolidays');
const { isWeekend } = require('./utils/dateUtils');

function getHolidays(year = new Date().getFullYear(), state = null, city = null) {
  let holidays = [...getNationalHolidays(year)];

  if (state) {
    holidays = [...holidays, ...getStateHolidays(year, state)];
  }

  if (city) {
    holidays = [...holidays, ...getMunicipalHolidays(year, state, city)];
  }

  return holidays;
}

function isBusinessDay(date, state = null, city = null) {
  const formattedDate = date.split('T')[0];
  const holidays = getHolidays(new Date(date).getFullYear(), state, city);
  return !holidays.some(holiday => holiday.date === formattedDate) && !isWeekend(date);
}

function getNextHoliday(date = new Date(), state = null, city = null) {
  const year = new Date(date).getFullYear();
  const holidays = getHolidays(year, state, city).filter(holiday => new Date(holiday.date) > new Date(date));
  return holidays.sort((a, b) => new Date(a.date) - new Date(b.date))[0] || null;
}

function countBusinessDays(startDate, endDate, state = null, city = null) {
  let count = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    if (isBusinessDay(currentDate, state, city)) {
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;
}

function addCustomHoliday(holiday) {
  if (holiday.state && holiday.city) {
    addMunicipalHoliday(holiday);
  } else if (holiday.state) {
    addStateHoliday(holiday);
  }
}

module.exports = {
  getHolidays,
  isBusinessDay,
  getNextHoliday,
  countBusinessDays,
  addCustomHoliday
};