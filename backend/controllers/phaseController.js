import phaseModel from '../models/phaseModel.js';

export const getAllPhases = async (req, res) => {
    try {
        const phases = await phaseModel.findAll();
        res.json(phases);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const getPhase = async (req, res) => {
    try {
        const phase = await phaseModel.findAll({
            where:{
                id:req.params.id
            }
        });

        res.json(phase);
    } catch (error) {
        res.json({
            'message': error.message
        });
    }
}

export const createPhase = async (req,res) => {
    try {
        await phaseModel.create(req.body);
        res.json({
            "message": "Fase agregado"
        })
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const updatePhase = async (req, res) =>{
    try {
        await phaseModel.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message":"Fase actualizado"
        });
    } catch (error) {
        res.json({
            "message":error.message
        });
    }
}

export const deletePhase = async (req, res) =>{
    try {
        await phaseModel.destroy({
            where:{
                id : req.params.id
            }
        });
        res.json({"message": "Fase eliminado"});
    } catch (error) {
        res.json({
            "message":error.message
        });
    }
}