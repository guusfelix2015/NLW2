const proffys = [
  {
    name: "Gustavo Felix",
    avatar: "https://avatars2.githubusercontent.com/u/54154635?s=460&u=e38409a4bd38a5ed24ca2f575442f228a8fb28d0&v=4",
    whatsapp: "8998765458",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram poruma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },

  {
    name: "Gustavo Felix",
    avatar: "https://avatars2.githubusercontent.com/u/54154635?s=460&u=e38409a4bd38a5ed24ca2f575442f228a8fb28d0&v=4",
    whatsapp: "8998765458",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram poruma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
];

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

const weekdays = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

// Funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;
  //se tiver data
  const isNotEmpty = Object.keys(data).length > 0;
  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    //adicionar data a lista de proffys
    proffys.push(data);

    return res.redirect("/study");
  }
  // se não, mostrar a pagína
  return res.render("give-classes.html", { subjects, weekdays });
}

const express = require("express");
const server = express();

//configurar nunjucks
const nunjuks = require("nunjucks");
nunjuks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  //configura arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/index", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500);
