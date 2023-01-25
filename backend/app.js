import express from 'express';
import cors from  'cors';
import db from './database/db.js';
import userRoutes from './routes/userRoutes.js'

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use('/user',userRoutes);

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
