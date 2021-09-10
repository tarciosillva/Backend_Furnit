const {
    MongoClient
} = require("mongodb")

const uri = ""
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
