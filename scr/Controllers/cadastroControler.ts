import {Request, Response} from 'express'
import { nome } from './infoController'
import {User} from '../Models/User'
import { defaultValueSchemable, toDefaultValue } from 'sequelize/types/utils'

export const cad_control = async (req:Request, res:Response) => {
    let { nome, age } = req.body;
    let SendButton = req.body.send;
if(nome){
    if(SendButton) {
        const newUser = User.build({ nome });

        if(age) {
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }}
        //Função para adicionar "1" à idade do usuário
        let usuario = req.body.nome
        const MaisButton = req.body.mais
        if (MaisButton){
           let results = await User.findAll({where:{nome: usuario}});
           if(results.length > 0){
               let resultado = results[0]
               resultado.age ++;
           await resultado.save()
   }}  
       //Função para diminuir "1" na idade do usuário
       const MenosButton = req.body.menos
       if(MenosButton){
           let results = await User.findAll({where:{nome: usuario}});
       if(results.length > 0){
           let resultado = results[0]
           resultado.age --;
       await resultado.save()
   }}
   //Função para remover usuário
   const ButtonDelete = req.body.del
   if(ButtonDelete){
    let results = await User.findAll({where:{nome: usuario}});
        if (results.length > 0){
            let resultado = results[0]
            await resultado.destroy();}
        }
    res.redirect('/')
}