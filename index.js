const express = require("express")
const cors = require('cors')
const router = require("./src/router/router")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(router)

app.get('/', (request, response) => {
    response.send("API Produtos - Tarcio")
})

app.listen(80, () => {
    console.log("Servidor rodando na porta:" + 80)
})