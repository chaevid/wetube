import express from 'express';

const app = express();
const PORT = 4000;

const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle.");
  console.log(`Someone is going to ${req.url} with ${req.method} method`);
  next();
};

const handleHome = (req, res) => {
  return res.send('<h1>I still love you.</h1>');
};

const handleLogin = (req, res) => {
  return res.json({ msg: 'Login here.' });
};

app.get('/', gossipMiddleware, handleHome);
app.get('/login', handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
