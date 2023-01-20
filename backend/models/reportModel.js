import db from "../database/db.js";
import { DataTypes } from "sequelize";

const reportModel = db.define('report',{
    idReport:
        {
            type:DataTypes.INTEGER,
            allowNull:false
        },
    note:
        {
            type:DataTypes.TEXT,
            allowNull:false
        },
    suggestion:
        {
            type:DataTypes.TEXT,
            allowNull:false
        }
});

export default reportModel;