import Grupo from '../models/Grupo.js';
import Horario from '../models/Horario.js'
import Lab from '../models/Lab.js';
import Materia from '../models/Materia.js';
import Usuario from '../models/Usuario.js';

export const getAllTimes = async (req, res) => {
    try {
        const horarios = await Horario.findAll({
            attributes:['id','timeInit','timeEnd','day']
        });

        res.json(horarios);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const getTimes = async (req,res) => {
    try {
        const data = await Horario.findAll({
            attributes:['id','timeInit','TimeEnd', 'day'],
            include: [
                {
                    model: Materia,
                    attributes: ['name']
                },
                {
                    model:Grupo,
                    attributes: ['name']
                },
                {
                    model:Lab,
                    attributes: ['name','status']
                },
                {
                    model:Usuario,
                    attributes: ['name']
                }
            ]
        })
        res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}

export const getTime = async (req,res) => {
    try {
        const horario = await Horario.findOne({
            where:{
                id : req.params.id
            },
            attributes:['id','timeInit','TimeEnd', 'day'],
            include: [
                {
                    model: Materia,
                    attributes: ['name']
                },
                {
                    model:Grupo,
                    attributes: ['name']
                },
                {
                    model:Lab,
                    attributes: ['name','status']
                },
                {
                    model:Usuario,
                    attributes: ['name']
                }
            ]
        });
        res.json(horario);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const createTime = async (req, res) => {
    try {
        await Horario.create(req.body);
        res.json({
            "message": "Horario creado"
        });
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const updateTime = async (req,res) => {
    try {
        await Horario.update(req.body,{
            where:{
                id: req.params.id
            }
        });
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const deleteTime = async (req, res) => {
    try {
        await Horario.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message":"Horario eliminado"
        });
    } catch (error) {
        res.json({
            "message":error.message
        });
    }
}