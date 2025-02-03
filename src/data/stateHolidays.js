
const { isValidDate } = require('../utils/validations');

let stateHolidays = {
  SP: [
    { date: '09-07', name: 'Revolução Constitucionalista' }
  ],
  RJ: [
    { date: '20-01', name: 'Dia de São Sebastião' }
  ]
};

function getStateHolidays(year, state) {
  if (!stateHolidays[state]) return [];
  return stateHolidays[state].map(holiday => ({
    ...holiday,
    date: `${year}-${holiday.date}`
  }));
}

function addStateHoliday(holiday) {
  if (!isValidDate(holiday.date)) {
    throw new Error('Invalid date format. Please use YYYY-MM-DD.');
  }

  const holidays = stateHolidays[holiday.state] || [];
  const existingIndex = holidays.findIndex(h => h.date === holiday.date);

  if (existingIndex !== -1) {
    holidays[existingIndex] = holiday;
  } else {
    holidays.push(holiday);
  }

  stateHolidays[holiday.state] = holidays;
}

module.exports = { getStateHolidays, addStateHoliday };