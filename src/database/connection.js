const {
    MongoClient
} = require("mongodb")

const uri = "mongodb+srv://furnit:fUrn1tD2tab4s3@cluster0.doqaz.mongodb.net/FurnitTeste?retryWrites=true&w=majority"
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