import db from "../database/db.js";
import { DataTypes } from "sequelize";

const groupModel = db.define('group',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    idMod: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idType:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    idPhase:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    idSemester:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    idCareer:{
        type: DataTypes.SMALLINT,
        allowNull:false
    }
});

export default groupModel;