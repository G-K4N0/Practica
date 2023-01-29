import express from 'express';
import { createTime, deleteTime, getAllTimes, getTime, updateTime } from '../controllers/timeController.js';
const timeRoute = express.Router();

timeRoute.get('/',getAllTimes);
timeRoute.get('/times/:id', getTime);
timeRoute.post('/times', createTime);
timeRoute.put('/times/:id',updateTime);
timeRoute.delete('/times/:id',deleteTime);

export default timeRoute;