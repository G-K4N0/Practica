import db from "../database/db.js";
import { DataTypes } from "sequelize";

const timeModel = db.define('time',{
    day:
        {
        type:DataTypes.STRING,
        allowNull:false
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
    idTopic:
        {
            type:DataTypes.STRING,
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