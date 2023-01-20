import db from "../database/db.js";
import { DataTypes } from "sequelize";

const careerModel = db.define('career',{
    idCareer:
        {
            type:DataTypes.SMALLINT,
            allowNull:false
        },
    name:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
}); 