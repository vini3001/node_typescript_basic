import express, {Request, Response} from 'express'
import mustache from 'mustache-express'
import mainRoutes from './routes/index'
import mainPainel from './routes/painel'
import dotenv from 'dotenv'
import path from 'path'

//configuração de ambiente (porta a ser utilizada pelo servidor quando ele "subir")
dotenv.config()

//algoritmo para importar as funções do "express" e preparar o "mustache" para uso
const server = express()
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())
server.use(express.static(path.join(__dirname, '../public')))

//algoritmo para permitir que os dados pegos na url do site possam ser importados pelas rotas
server.use(express.urlencoded({extended:true}))

//algoritmo para usar as rotas
server.use(mainRoutes)
server.use('/painel', mainPainel)
server.use((req:Request, res:Response) =>{
    res.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT)