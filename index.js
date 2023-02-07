const addDays = require("date-fns/addDays");
let daysAfterXDays = (days) => {
  let result = addDays(new Date(2020, 08, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
module.exports = daysAfterXDays;
console.log(daysAfterXDays);
