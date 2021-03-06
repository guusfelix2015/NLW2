const subjects = [
  "Artes",
  "Biologia",
  "Ciência",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matématica",
  "Português",
  "Química",
];

const weekdays = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

// Funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":");
  return Number(hour * 60 + minutes);
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
};
