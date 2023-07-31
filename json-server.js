const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src', 'data', 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
