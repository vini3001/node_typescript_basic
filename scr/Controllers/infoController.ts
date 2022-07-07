import {Request, Response} from "express"

export const idadePost = (req:Request, res:Response) => {
    let informacoes = {
        nome: 'Carla',
        idade: 30,
        esporteFav: 'basquete'
    }  
        let age:number = 15
        let showOld: boolean = false
        if ( age < 18){
            showOld = true
        } else{
            showOld = false
        }
    let showAge:boolean = false
    let idade: number = 0
    if (req.body.ano){
    let ano: number = parseInt(req.body.ano as string)
    let AnoAtual: number = new Date().getFullYear();
    idade = AnoAtual - ano
    if (idade >= 18){
        showAge = true
    }
    }
    res.render('pages/idade', {
        idade,
        showAge
    })
}
export const sobre = (req:Request, res:Response) => {
    res.render('pages/sobre')
}
export const nome = (req:Request, res:Response) => {
    console.log("query string", req.query)
    let nome: string = req.query.nome as string
    res.render('nome', {nome})
}
export const idadeGet = (req:Request, res:Response) => {
    res.render('pages/idade')
}