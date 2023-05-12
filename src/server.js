import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const home = (req, res) => {
  return res.send('<h1>Home</h1>');
};

const login = (req, res) => {
  return res.json({ msg: 'Login here.' });
};

app.use(logger);
app.get('/', home);
app.get('/login', login);

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
