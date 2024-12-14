const Presupuesto = require('../models/Presupuesto');

const crearPresupuesto = async (req, res) => {
  try {
    const presupuesto = new Presupuesto(req.body);
    await presupuesto.save();
    res.status(201).json(presupuesto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerPresupuestos = async (req, res) => {
  try {
    const presupuestos = await Presupuesto.find();
    res.json(presupuestos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarPresupuesto = async (req, res) => {
  try {
    const { id } = req.params;
    const presupuestoActualizado = await Presupuesto.findByIdAndUpdate(id, req.body, { new: true });
    res.json(presupuestoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarPresupuesto = async (req, res) => {
  try {
    const { id } = req.params;
    await Presupuesto.findByIdAndDelete(id);
    res.json({ message: 'Presupuesto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearPresupuesto, obtenerPresupuestos, actualizarPresupuesto, eliminarPresupuesto };
