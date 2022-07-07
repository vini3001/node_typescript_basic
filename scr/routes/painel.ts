import { Router, Request, Response, request } from "express";
import {cad_control} from '../Controllers/cadastroControler';

const router = Router();
router.post('/alterado-resultado')
router.post('/registro-resultado', cad_control)
router.get('/sobre', (req:Request, res:Response) => {
    res.send('Informações sobre a empresa')
})
export default router