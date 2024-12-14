const mongoose = require('mongoose');
const {Schema} = mongoose

const PresupuestoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  montoTotal: { type: Number, required: true },
  montoAsignado: { type: Number, default: 0 },
  fechaCreacion: { type: Date, default: Date.now },
  alertas: { type: Boolean, default: false },
});

module.exports = mongoose.model('Presupuesto', PresupuestoSchema); 
