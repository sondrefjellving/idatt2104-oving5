import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'
import { exec } from 'child_process'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/compile', async (req, res) => {
    const compileInput = req.body.compileText
    fs.writeFileSync("main.js", compileInput)

    exec('node main.js', function( err, runResult, stderr){
        let result = {data: ""};
        if (err) {
            result.data = stderr
        } else {
            result.data = runResult
        }
        res.json(result);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})