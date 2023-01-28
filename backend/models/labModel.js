import db from "../database/db.js";
import { DataTypes } from "sequelize";

const labModel = db.define('lab',{
    id:{
        type:DataTypes.SMALLINT,
        primaryKey:true
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