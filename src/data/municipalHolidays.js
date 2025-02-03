
const { isValidDate } = require('../utils/validations');

let municipalHolidays = {
  SP: {
    'Sao Paulo': [
      { date: '25-01', name: 'Aniversário de São Paulo' }
    ]
  },
  RJ: {
    'Rio de Janeiro': [
      { date: '23-04', name: 'Dia de São Jorge' }
    ]
  }
};

function getMunicipalHolidays(year, state, city) {
  if (!municipalHolidays[state] || !municipalHolidays[state][city]) return [];

  return municipalHolidays[state][city].map(holiday => ({
    ...holiday,
    date: `${year}-${holiday.date}`
  }));
}

function addMunicipalHoliday(holiday) {
  if (!isValidDate(holiday.date)) {
    throw new Error('Invalid date format. Please use YYYY-MM-DD.');
  }

  if (!municipalHolidays[holiday.state]) {
    municipalHolidays[holiday.state] = {};
  }

  const cityHolidays = municipalHolidays[holiday.state][holiday.city] || [];
  const existingIndex = cityHolidays.findIndex(h => h.date === holiday.date);

  if (existingIndex !== -1) {
    cityHolidays[existingIndex] = holiday;
  } else {
    cityHolidays.push(holiday);
  }

  municipalHolidays[holiday.state][holiday.city] = cityHolidays;
}

module.exports = { getMunicipalHolidays, addMunicipalHoliday };