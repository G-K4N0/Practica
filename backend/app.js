import express from 'express';
import cors from  'cors';
import db from './database/db.js';

import { verifyToken } from './controllers/authController.js';

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
import login from './routes/login.js'
import cookieParser from 'cookie-parser';
import  dotenv from 'dotenv';
dotenv.config({ path: './.env'});


const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/careers',verifyToken,careerRoutes);
app.use('/groups',verifyToken,groupRoutes);
app.use('/labs',verifyToken,labRoutes);
app.use('/mods',verifyToken,modRoutes);
app.use('/phases',verifyToken,phaseRoutes);
app.use('/reports',reportRoutes);
app.use('/semesters',verifyToken,semesterRoutes);
app.use('/',timeRoutes);
app.use('/topics',verifyToken,topicRoutes);
app.use('/types',verifyToken,typeRoutes);
app.use('/users',verifyToken,userRoutes);
app.use('/',login);

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
