import express from 'express';

const app = express();

const handleListening = () =>
  console.log(`✅ Server listening on: http://localhost:${PORT} 🚀`);

const PORT = 4000;

app.listen(PORT, handleListening);
