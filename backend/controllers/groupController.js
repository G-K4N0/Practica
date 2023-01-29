import groupModel from '../models/groupModel.js';

export const getAllGroups = async (req, res) => {
    try {
        const groups = await groupModel.findAll();
        res.json(groups);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const getGroup = async (req, res) => {
    try {
        const group = await groupModel.findAll({
            where:{
                id:req.params.id
            }
        });

        res.json(group);
    } catch (error) {
        res.json({
            'message': error.message
        });
    }
}

export const createGroup = async (req,res) => {
    try {
        await groupModel.create(req.body);
        res.json({
            "message": "Grupo creado"
        })
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const updateGroup = async (req, res) =>{
    try {
        await groupModel.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message":"Grupo actualizado"
        });
    } catch (error) {
        res.json({
            "message":error.message
        });
    }
}

export const deleteGroup = async (req, res) =>{
    try {
        await groupModel.destroy({
            where:{
                id : req.params.id
            }
        });
        res.json({"message": "Grupo eliminado"});
    } catch (error) {
        res.json({
            "message":error.message
        });
    }
}