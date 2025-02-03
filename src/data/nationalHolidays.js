const fixedNationalHolidays = [
    { date: '01-01', name: 'Confraternização Universal' },
    { date: '21-04', name: 'Tiradentes' },
    { date: '01-05', name: 'Dia do Trabalhador' },
    { date: '07-09', name: 'Independência do Brasil' },
    { date: '12-10', name: 'Nossa Senhora Aparecida' },
    { date: '02-11', name: 'Finados' },
    { date: '15-11', name: 'Proclamação da República' },
    { date: '25-12', name: 'Natal' }
  ];
  
  function calculateEaster(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
  
    return new Date(year, month - 1, day);
  }
  
  function calculateMovableHolidays(year) {
    const easter = calculateEaster(year);
    
    const carnival = new Date(easter);
    carnival.setDate(easter.getDate() - 47);
    
    const goodFriday = new Date(easter);
    goodFriday.setDate(easter.getDate() - 2);
    
    const corpusChristi = new Date(easter);
    corpusChristi.setDate(easter.getDate() + 60);
  
    return [
      { date: formatDate(carnival), name: 'Carnaval' },
      { date: formatDate(goodFriday), name: 'Sexta-feira Santa' },
      { date: formatDate(easter), name: 'Páscoa' },
      { date: formatDate(corpusChristi), name: 'Corpus Christi' }
    ];
  }
  
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  
  function getNationalHolidays(year = new Date().getFullYear()) {
    const fixedHolidays = fixedNationalHolidays.map(holiday => ({
      ...holiday,
      date: `${year}-${holiday.date}`
    }));
  
    const movableHolidays = calculateMovableHolidays(year);
  
    return [...fixedHolidays, ...movableHolidays];
  }
  
  module.exports = { getNationalHolidays };
  