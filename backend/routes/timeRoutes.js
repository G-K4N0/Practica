import express from 'express';
import { createTime, deleteTime, getAllTimes, getTime, updateTime } from '../controllers/timeController.js';
const timeRoute = express.Router();

timeRoute.get('/',getAllTimes);
timeRoute.get('/:id', getTime);
timeRoute.post('/', createTime);
timeRoute.put('/:id',updateTime);
timeRoute.delete('/:id',deleteTime);

export default timeRoute;