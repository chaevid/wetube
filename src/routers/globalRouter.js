import express from 'express';
import { trending, search } from '../controllers/videoController';
import { signup, login } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get('/', trending);
globalRouter.get('/signup', signup);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
