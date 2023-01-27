import timeModel from '../models/timeModel.js'

export const getAllTimes = async (req, res) => {
    try {
        const times = await timeModel.findAll();

        res.json(times);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const getTime = async (req,res) => {
    try {
        const time = await timeModel.findAll({
            where:{
                id : req.params.id
            }
        });
        res.json(time);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const createTime = async (req, res) => {
    try {
        await timeModel.create(req.body);
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
        await timeModel.update(req.body,{
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
        await timeModel.destroy({
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