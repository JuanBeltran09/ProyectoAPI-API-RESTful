const express = require('express');
const router = express.Router();
const { crearPresupuesto, obtenerPresupuestos, actualizarPresupuesto, eliminarPresupuesto } = require('../controllers/presupuestoController');
const verificarToken = require('../middleware/auth');

router.post('/', verificarToken, crearPresupuesto);

router.get('/', verificarToken, obtenerPresupuestos);

router.put('/:id', verificarToken, actualizarPresupuesto);

router.delete('/:id', verificarToken, eliminarPresupuesto);

module.exports = router;
