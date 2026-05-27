const express = require('express');
const router  = express.Router();
const Experiencia = require('../models/Experiencia');

// GET todas
router.get('/', async (req, res) => {
  try {
    const lista = await Experiencia.find().sort({ fechaInicio: -1 });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET una por ID
router.get('/:id', async (req, res) => {
  try {
    const exp = await Experiencia.findById(req.params.id);
    if (!exp) return res.status(404).json({ error: 'No encontrada' });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST crear
router.post('/', async (req, res) => {
  try {
    const nueva = new Experiencia(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT actualizar
router.put('/:id', async (req, res) => {
  try {
    const actualizada = await Experiencia.findByIdAndUpdate(
      req.params.id, req.body, { new: true, runValidators: true }
    );
    if (!actualizada) return res.status(404).json({ error: 'No encontrada' });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE eliminar
router.delete('/:id', async (req, res) => {
  try {
    const eliminada = await Experiencia.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'No encontrada' });
    res.json({ mensaje: 'Experiencia eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;