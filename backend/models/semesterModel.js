import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const semesterModel = db.define('semester',{
    id:{
        type: DataTypes.SMALLINT,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    semester:{
        type: DataTypes.STRING,
        allowNull:false
    },
    schoolPeriod:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

export default semesterModel;