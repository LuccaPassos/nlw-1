import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.json(['Vai ser', 'uma jornada'])
})

app.listen(3333)