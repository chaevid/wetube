import express from 'express';
import { see, logout, edit, deleteUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/:id', see);
userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/delete', deleteUser);

export default userRouter;
