import careerModel from "../models/careerModel.js"

export const getAllCareers = async (req,res) =>{
    try {
        const careers = await careerModel.findAll();
        res.json(careers);
    } catch (error) {
        res.json({message:error.message});
    }
}

export const getCareer = async (req, res) => {
    try {
        const career = await careerModel.findAll({
            where:
            {
                id:req.params.id
            }
        });
        res.json(career);
    } catch (error) {
        res.json(
            {
                messaje: error.message
            }
        );
    }
}

export const createCareer = async (req, res) =>{
    try {
        await careerModel.create(req.body);
        res.json(
            {
                "message":"Carrera añadido con éxito"
            }
        )
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const updateCareer = async (req, res) => {
    try {
        await careerModel.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message":"Carrera actualizado"
        });
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
} 

export const deletCareer = async (req, res) => {
    try {
        await careerModel.destroy ({
            where:{
                id:req.params.id
            }
        });
        res.json({"message":"Carrera eliminada"});
    } catch (error) {
        res.json({"message":error.message});
    }
}