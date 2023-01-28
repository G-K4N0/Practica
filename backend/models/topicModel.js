import db from "../database/db.js";
import { DataTypes } from "sequelize";

const topicModel = db.define('topic',{
    id:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    name:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
});

export default topicModel;