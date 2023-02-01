import db from "../database/db.js";
import { DataTypes } from "sequelize";

const userModel = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name: {type:DataTypes.STRING},
    nickname:{type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    privileges:{type:DataTypes.TINYINT}
});

export default userModel;