const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mocks/db.json');
const middlewares = jsonServer.defaults();
const db = router.db;

const port = 3001;

server.use(middlewares);

// get lista
server.get('/atividades', (req, res) => {
  res.status(200).json(
    db
      .get('atividades')
      .map(({ id }) => id)
      .value(),
  );
});

// get unico
server.get('/atividades/:id', (req, res) => {
  res.status(200).json(
    db
      .get('atividades')
      .filter({ id: Number(req.params.id) })
      .value(),
  );
});

// criar
server.post('/atividades', (req, res) => {
  res.status(201);
});

// editar
server.put('/atividades/:id', (req, res) => {
  res.status(201);
});

// deletar
server.delete('/atividades/:id', (req, res) => {
  res.status(200).json({ mensagem: "Atividade apagada com sucesso!" });
});


server.use(router);

server.listen(port, () => {
  console.log(`Server start at port: ${port}`);
});
