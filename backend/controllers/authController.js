import db from '../database/db.js';
import promisfy from 'util';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../models/userModel.js';
import  dotenv from 'dotenv';
dotenv.config({ path: './.env'});

export const login =  async (req, res) => {
    try {
        const user_name = req.body.nickname;
        const user_pass = req.body.password;

        if (!user_name || !user_pass){
            res.json({"message": "No dejes ningun campo vacio"});}

            const user = await userModel.findOne({where:{
                nickname:req.body.nickname
            }});
            
            const validPass = await bcrypt.compare(user_pass,user.password);
            
            if (!user ||  !validPass) {
                res.json({"message":"Usuario y/o contraseña incorrecta"});
            }

            const id = user.id;

            //token
            const token = jwt.sign({id:id},process.env.JWT_SECRET,{
                        expiresIn:process.env.JWT_TIME_EXPIRE
                    });

            console.log(token);
            
            const cookiesOptions={
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 *60 * 60 *1000),
                    httpOnly:true}
                    res.cookie('panteras', token, cookiesOptions);

                    res.json({"message":`Bienvenido `});

    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = async(req, res, next) => {

    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];
    console.log(autHeader);

    if (token == null)
        return res.status(401).send('Inicia sesión');
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.status(403).send("Acceso denegado");

        console.log(user);

        req.user = user;
        next();
    });
}

export const logout = (req,res) =>{
    res.clearCookie('panteras');
    return res.redirect('/')
}