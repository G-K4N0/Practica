import express from 'express';
import { createTime, deleteTime, getAllTimes, getTime, updateTime } from '../controllers/timeController';
const timeRoute = express.Router();

timeRoute.get('/',getAllTimes);
timeRoute.get('/:id', getTime);
timeRoute.create('/', createTime);
timeRoute.update('/:id',updateTime);
timeRoute.delete('/:id',deleteTime);

export default timeRoute;