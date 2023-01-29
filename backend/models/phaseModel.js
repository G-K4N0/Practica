import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const phaseModel = db.define('phase',{
    id:{
        type:DataTypes.SMALLINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default phaseModel;