import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const typeModel = db.define('type',{
    id:{
        type:DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default typeModel;