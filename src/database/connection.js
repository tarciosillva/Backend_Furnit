const {
    MongoClient
} = require("mongodb")

/*Cole o link do endereço de conexão com o banco de dados na constante abaixo*/
const uri = "/*link aqui*/"
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function run() {
    try {
        return await client.connect()
    } catch (error) {
        await client.close()
        console.error(error)
    }
}

module.exports = run()
