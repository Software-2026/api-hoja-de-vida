require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error MongoDB:', err));

app.use('/api/experiencias', require('./routes/experiencias'));

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Hoja de Vida funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});