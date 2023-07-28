// json-server.js

const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src', 'data', 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.json({ message: 'Login successful', token: 'my-example-token' });
});

server.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

server.use('/api', router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
