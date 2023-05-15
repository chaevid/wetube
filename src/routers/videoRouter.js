import express from 'express';
import { see, edit, deleteVideo, upload } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);
// videoRouter.get('/upload', upload); <<<<<<< 이렇게 하면 /upload가 /:id로 인식되어버림

export default videoRouter;
