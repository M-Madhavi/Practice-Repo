import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hey!!!!!!!</h1>')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running at port ${port}`)
})
