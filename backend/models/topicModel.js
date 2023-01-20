import db from "../database/db.js";
import { DataTypes } from "sequelize";

const topicModel = db.define('topic',{
    idTopic:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
    name:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
});

export default topicModel;