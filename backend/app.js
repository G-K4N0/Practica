import express from 'express';
import cors from  'cors';
import db from './database/db.js';

import careerRoutes from './routes/careerRoutes.js';
import groupRoutes from './routes/groupRoute.js';
import labRoutes from './routes/labRoutes.js'
import modRoutes from './routes/modRoutes.js';
import phaseRoutes from './routes/phaseRoutes.js';
import reportRoutes from './routes/reportRoutes.js'
import semesterRoutes from './routes/semesterRoutes.js';
import timeRoutes from './routes/timeRoutes.js'
import topicRoutes from './routes/topicRoutes.js'
import typeRoutes from './routes/typeRoutes.js';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
const app = express();
const PORT = 8000;

dotenv.config({path:'./.env'});

//app.use(cookieParser);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/careers',careerRoutes);
app.use('/groups',groupRoutes);
app.use('/labs',labRoutes);
app.use('/mods',modRoutes);
app.use('/phases',phaseRoutes);
app.use('/reports',reportRoutes);
app.use('/semesters',semesterRoutes);
app.use('/',timeRoutes);
app.use('/topics',topicRoutes);
app.use('/types',typeRoutes);
app.use('/users',userRoutes);

app.listen(PORT,()=>{
console.log(`Escuchando en el puerto ${PORT}`);
db.authenticate()
	.then(()=>{
		console.log('La aplicación se ha conectado a la base de datos de manera correcta');
	})
	.catch(error =>{
		console.log(`Se ha producido un error: ${error}`);
	});
});