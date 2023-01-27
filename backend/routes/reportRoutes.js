import express from 'express';
import {createReport, deleteReport, getAllReports, getReport, updateReport} from '../controllers/reportController.js';

const routeReport = express.Router();

routeReport.get('/',getAllReports);
routeReport.get('/:id', getReport);
routeReport.post('/',createReport);
routeReport.put('/:id',updateReport);
routeReport.delete('/:id',deleteReport);

export default routeReport;