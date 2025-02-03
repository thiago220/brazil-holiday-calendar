# 🎉 Brazilian Holidays / Feriados Brasileiros 📅

> 🚀 A powerful and flexible Node.js package to handle **Brazilian holidays** with ease.
> 🚀 Um pacote Node.js poderoso e flexível para lidar com **feriados brasileiros** de forma simples.

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg) ![npm](https://img.shields.io/npm/v/brazilian-holidays) ![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)

## 📦 Installation / Instalação

```bash
npm install brazil-holiday-calendar
```

## 🚀 Features / Funcionalidades

- ✅ **National Holidays** (fixed and movable) / **Feriados Nacionais** (fixos e móveis)
- 🌍 **State Holidays** (organized by states) / **Feriados Estaduais** (organizados por estados)
- 🏙️ **Municipal Holidays** (nested within states) / **Feriados Municipais** (aninhados aos estados)
- 🔍 **Check Business Days** / **Verificar Dias Úteis**
- 📊 **Count Working Days** between two dates / **Contar Dias Úteis** entre duas datas
- ✏️ **Add or Update Custom Holidays** dynamically / **Adicionar ou Atualizar Feriados Personalizados** dinamicamente
- ⏭️ **Find the Next Holiday** / **Encontrar o Próximo Feriado**

## 🗓️ Usage / Uso

```javascript
const { 
  getHolidays, 
  isBusinessDay, 
  getNextHoliday, 
  countBusinessDays, 
  addCustomHoliday 
} = require('brazil-holiday-calendar');

// 📅 Get all holidays for a specific year / Obter todos os feriados para um ano específico
console.log(getHolidays(2024));

// 🚫 Check if a date is a business day / Verificar se uma data é um dia útil
console.log(isBusinessDay('2024-12-25')); // false (Natal)

// ⏭️ Get the next upcoming holiday / Obter o próximo feriado
console.log(getNextHoliday('2024-04-15'));

// 📊 Count business days between two dates / Contar dias úteis entre duas datas
console.log(countBusinessDays('2024-01-01', '2024-12-31'));

// ✏️ Add or update a custom holiday / Adicionar ou atualizar um feriado personalizado
addCustomHoliday({ date: '2024-11-20', name: 'Consciência Negra', state: 'SP', city: 'São Paulo' });
console.log(getHolidays(2024, 'SP', 'São Paulo'));
```

## ⚡ API Reference / Referência da API

### `getHolidays(year, state, city)`
Returns an array of holidays for the specified year, state, and city.
Retorna um array de feriados para o ano, estado e cidade especificados.

### `isBusinessDay(date, state, city)`
Checks if the provided date is a business day, considering national, state, and municipal holidays.
Verifica se a data fornecida é um dia útil, considerando feriados nacionais, estaduais e municipais.

### `getNextHoliday(date, state, city)`
Returns the next holiday after the given date.
Retorna o próximo feriado após a data fornecida.

### `countBusinessDays(startDate, endDate, state, city)`
Counts the number of business days between two dates.
Conta o número de dias úteis entre duas datas.

### `addCustomHoliday({ date, name, state, city })`
Adds or updates a custom holiday for a specific state or city.
Adiciona ou atualiza um feriado personalizado para um estado ou cidade específico.

## 📜 License / Licença

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.
Este projeto está licenciado sob a **Licença MIT**. Sinta-se à vontade para usar, modificar e distribuir.

> Designed and developed with ❤️ by [**Thiago Dias**](https://www.linkedin.com/in/thiago-souza-dias/), an **enthusiast of technology** 🚀 / Projetado e desenvolvido com ❤️ por [**Thiago Dias**](https://www.linkedin.com/in/thiago-souza-dias/), um **entusiasta da tecnologia** 🚀
