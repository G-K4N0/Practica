import db from "../database/db.js";
import { DataTypes } from "sequelize";

const labModel = db.define('lab',{
    idLab:
        {
            type:DataTypes.SMALLINT,
            allowNull:false
        },
    name:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
    status:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
});

export default labModel;