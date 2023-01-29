import userModel from "../models/userModel.js"


export const getAllUsers= async (req,res)=>{
    try {
        const users = await userModel.findAll();
        res.json(users);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({message:error.message});
    }
}

export const createUser = async (req, res) =>{
    try {
        await userModel.create(req.body);
        res.json(
            {
                "message":"Usuario creado"
            });
    } catch (error) {
        res.json({"message":"Error en la sintaxis"});
    }
}

export const updateUser = async (req, res) => {
    try {
        await userModel.update(req.body,{
            where: 
            {
                id:req.params.id
            }
            
        });
        res.json(
            {
                "message":"Usuario actualizado"
            });
    } catch (error) {
        res.json({message:error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        await userModel.destroy({
            where:
            {
                id:req.params.id
            }
        });
        res.json(
            {
                "message":"Usuario eliminado"
            });
    } catch (error) {
        res.json({message:error.message});
    }
}