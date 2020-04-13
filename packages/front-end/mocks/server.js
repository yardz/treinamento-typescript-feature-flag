const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('mocks/db.json')
const middlewares = jsonServer.defaults()
const db = router.db

const port = 3100;

server.use(middlewares)

server.get('/ocasioes', (req, res) => {
  res
    .status(200)
    .json(db.get('ocasioes').map(ocasiao => ({ 'nome': ocasiao.nome, 'id': ocasiao.id, })).value());
})

server.get('/ocasioes/:id', (req, res) => {
  res
    .status(200)
    .json(db.get('ocasioes').filter({ id: req.params.id }).value());
})

server.use(router)


server.listen(port, () => {
  console.log(`Server start at port: ${port}`)
})
