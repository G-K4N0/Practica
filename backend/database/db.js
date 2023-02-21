import  Sequelize  from "sequelize";
import  dotenv from 'dotenv';
dotenv.config({ path: './.env'});

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD,
        {
            host:'localhost',
            dialect: 'mysql' 
        }
);

export default sequelize;