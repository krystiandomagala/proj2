import express from 'express'
import {Request, Response} from 'express'

const app = express()

/*
const notes: Note[] = []
app.use(express.json())
app.get('/', function (req,res){
    const note = {title: 'asd'}
    //const jsonNote = JSON.stringify(note)
    res.send(note)
})
app.post('/', function(req: Request, res: Response){
    //console.log(req.body.title)
    const title = req.body.title
    req.statusCode(200).send(`note title: ${title}`)
})
*/

app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(200).send('POST Hello World')
})

app.listen(3000)