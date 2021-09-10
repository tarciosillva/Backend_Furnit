const express = require("express")
const router = express.Router()

const PedidosController = require("../controller/PedidosController")

router.post('/novoPedido', PedidosController.newPedido)
router.get('/listarPedidos/:email', PedidosController.listPedido)
router.delete('/deletarPedido/:id', PedidosController.deletePedido)

module.exports = router