import {Response, Request} from 'express'
import {User} from '../Models/User'
import {Op} from 'sequelize'
import {Product} from '../Models/Product'

export const home = async (req:Request, res:Response) => {
    let all = await User.findAll()
    let value = req.body.nome
    let list = Product.getAll()
    let expensiveList = Product.getPriceAfter(12)
    let age:number = 15
    let showOld: boolean = false
    if ( age < 18){
        showOld = true
    } else{
        showOld = false
    }
    res.render('pages/home', 
    {showOld,
    expensive: expensiveList,
    products: list,
    frasesMotivacao: [
        'Você consegue!',
        'Puta',
        'hahaha',

    ],
    all,
    value
})}