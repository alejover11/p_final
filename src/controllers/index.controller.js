

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderHome = (req, res) => {
  res.render('home');
};

indexCtrl.renderEncuesta = (req, res) => {
  res.render('encuesta');
};
indexCtrl.renderHorario = (req, res) => {
  res.render('horario');
};

indexCtrl.renderMatricula = (req, res) => {
  res.render('matricula');
};

module.exports = indexCtrl;