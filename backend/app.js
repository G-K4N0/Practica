import express from 'express';
import cors from  'cors';
import db from './database/db.js';
import routerUser from './routes/userRoutes.js'
import routerCareer from './routes/careerRoutes.js';
import routerLab from './routes/labRoutes.js'
import reportRoute from './routes/reportRoutes'
import timeRoute from './routes/timeRoutes.js'
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use('/user',routerUser);
app.use('/user/career',routerCareer);
app.use('/user/labs',routerLab);
app.use('/user/reports',reportRoute);
app.use('/time',timeRoute);

app.get('/',(req, res)=>{
	res.send('Hola mundo');
});

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
