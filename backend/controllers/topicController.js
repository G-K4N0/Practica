import topicModel from '../models/topicModel.js'

export const getAllTopics = async (req, res) => {
    try {
        const topics = await topicModel.findAll();

        res.json(topics);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const getTopic = async (req, res) => {
    try {
        const topic = await topicModel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(topic);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const createTopic = async (req, res) => {
    try {
        await topicModel.create(req.body);

        res.json({
            "message": "Materia añadida"
        })
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}

export const updateTopic =  async (req,res) => {
    try {
        await topicModel.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message":"Materia actualizada"
        });
    } catch (error) {
        res.json({
            "message":error.message
        });
    }
}

export const deleteTopic = async (req, res) => {
    try {
        await topicModel.destroy({
            where:{
                id:req.params.id
            }
        });

        res.json({
            "message": "Materia eliminada"
        })
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
}