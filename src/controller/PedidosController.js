const {
    ObjectId
} = require("bson")
const mongoConnect = require("../database/connection")

class Pedidos {
    async newPedido(request, response) {
        const newPedido = request.body
        try {
            const database = (await mongoConnect).db("FurnitTeste")
            const pedidoCollection = database.collection("Pedidos")

            pedidoCollection.insertOne(newPedido)
            response.send(newPedido)
        } catch (error) {
            response.send(error)
        }
    }

    async listPedido(request, response) {
        const email = request.params.email
        try {
            const database = (await mongoConnect).db("FurnitTeste")
            database.collection("Pedidos").find({
                email:email
            }).toArray((err, result) => {
                if (err) throw err
               response.send(result)
            })
        } catch (error) {
            response.send(error)
        }
    }

    async deletePedido(request, response) {
        const id = request.params.id
        try {
            const database = (await mongoConnect).db("FurnitTeste")
            database.collection("Pedidos").deleteOne({
                _id: ObjectId(id)
            })
            response.send(id)
        } catch (error) {
            response.send(error)
        }
    }
}

module.exports = new Pedidos()