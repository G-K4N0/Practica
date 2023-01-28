import express from 'express';
import cors from  'cors';
import db from './database/db.js';
import routerUser from './routes/userRoutes.js'
import routerCareer from './routes/careerRoutes.js';
import routerLab from './routes/labRoutes.js'
import reportRoute from './routes/reportRoutes.js'
import timeRoute from './routes/timeRoutes.js'
import topicRoute from './routes/topicRoutes.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
const app = express();
const PORT = 8000;

dotenv.config({path:'./.env'});

//app.use(cookieParser);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',routerUser);
app.use('/career',routerCareer);
app.use('/labs',routerLab);
app.use('/reports',reportRoute);
app.use('/time',timeRoute);
app.use('/topic',topicRoute);

app.listen(PORT,()=>{
console.log(`Escuchando en el puerto ${PORT}`);
db.authenticate()
	.then(()=>{
		console.log('Conexión exitosa');
	})
	.catch(error =>{
		console.log(`Se ha producido un error: ${error}`);
	});
});
