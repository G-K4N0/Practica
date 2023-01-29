import db from "../database/db.js";
import { DataTypes } from "sequelize";

const careerModel = db.define('career',{
    id:{
        type:DataTypes.SMALLINT,
        primaryKey:true,
        autoIncrement: true
    },
    name:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
});

export default careerModel;