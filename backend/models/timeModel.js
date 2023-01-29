import db from "../database/db.js";
import { DataTypes } from "sequelize";

const timeModel = db.define('time',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
        },
    timeInit:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
    timeEnd:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
    day:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
    idGroup:
        {
            type:DataTypes.TINYINT,
            allowNull:false
        },
    idTopic:
        {
            type:DataTypes.INTEGER,
            allowNull:false
        },
    idLab:
        {
            type:DataTypes.SMALLINT,
            allowNull:false
        },
    idUser:
    {
        type:DataTypes.SMALLINT,
        allowNull:false
    }
});

export default timeModel;