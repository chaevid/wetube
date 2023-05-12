import express from 'express';

const app = express();
const PORT = 4000;

const logger = (req, res, next) => {
  console.log(`Someone is going to '${req.url}' with '${req.method}' method`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;

  if (url === '/protected') {
    return res.send('<h1>Not Allowed</h1>');
  }
  console.log('Allowed, you may continue.');
  next();
};

const handleHome = (req, res) => {
  return res.send('<h1>I still love you.</h1>');
};

const handleLogin = (req, res) => {
  return res.json({ msg: 'Login here.' });
};

const handleProtected = (req, res) => {
  return res.send('<h1>Welcome to the private lounge.</h1>');
};

app.use(logger); // Must be before app.get()
app.use(privateMiddleware);
app.get('/', handleHome);
app.get('/login', handleLogin);
app.get('/protected', handleProtected);

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
