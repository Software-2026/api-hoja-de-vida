const mongoose = require('mongoose');

const ExperienciaSchema = new mongoose.Schema({
  empresa:      { type: String, required: true },
  cargo:        { type: String, required: true },
  fechaInicio:  { type: Date,   required: true },
  fechaFin:     { type: Date },
  descripcion:  { type: String },
  logros:       [String],
  actual:       { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Experiencia', ExperienciaSchema);