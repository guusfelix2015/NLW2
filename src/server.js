const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages");

//configurar nunjucks
const nunjuks = require("nunjucks");
nunjuks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  // receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  //configura arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/index", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  .listen(5500);
