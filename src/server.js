import express from 'express';

const app = express();
const PORT = 4000;

const methodLogger = (req, res, next) => {
  console.log(`Method : '${req.method}'`);
  next();
};

const routerLogger = (req, res, next) => {
  console.log(`Path : '${req.path}'`);
  next();
};

const home = (req, res) => {
  return res.send('<h1>Home</h1>');
};

const login = (req, res) => {
  return res.json({ msg: 'Login here.' });
};

app.use(methodLogger, routerLogger);

app.get('/', home);
app.get('/login', login);

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
