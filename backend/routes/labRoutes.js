import { express } from "express";
import {getAllLabs, getLab,createLab,updateLab,deleteLab} from '../controllers/labController.js'

const labRoute = express.Route();

labRoute.get('/',getAllLabs);
labRoute.get('/:id', getLab);
labRoute.post('/',createLab);
labRoute.put('/:id',updateLab);
labRoute.delete('/:id',deleteLab);