import db from "../database/db.js";
import { DataTypes } from "sequelize";

const modModel = db.define('mod', {
    id:{
        type:DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

export default modModel;