const birthDate = new Date("2008-11-23");
const today = new Date();
const age =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
    today.getDate() >= birthDate.getDate())
    ? today.getFullYear() - birthDate.getFullYear()
    : today.getFullYear() - birthDate.getFullYear() - 1;

const time = {
  age: age,
  year: today.getFullYear(),
};

export default time;
