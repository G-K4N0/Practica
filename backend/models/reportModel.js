import db from "../database/db.js";
import { DataTypes } from "sequelize";

const reportModel = db.define('report',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    note:
        {
            type:DataTypes.TEXT,
            allowNull:false
        },
    suggestion:
        {
            type:DataTypes.TEXT
        }
});

export default reportModel;