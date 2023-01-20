import db from "../database/db.js";
import { DataTypes } from "sequelize";

const userModel = db.define('user',{
    name: {type:DataTypes.STRING},
    nickname:{type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    privileges:{type:DataTypes.STRING}
});

export default userModel;