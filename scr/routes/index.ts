import { Router, Request, Response, request, response } from "express";
import { render } from "react-dom";
import * as info from "../Controllers/infoController"
import * as home from "../Controllers/homeController"

const router = Router();
router.get('/', home.home)
router.get('/contato', (req:Request, res:Response) => {
    res.render('pages/contato') 
})
router.get('/sobre', info.sobre)
router.get('/nome', info.nome)
router.get('/idade', info.idadeGet)
router.post('/idade-resultado', info.idadePost)
export default router