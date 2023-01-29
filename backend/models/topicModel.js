import db from "../database/db.js";
import { DataTypes } from "sequelize";

const topicModel = db.define('topic',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
});

export default topicModel;