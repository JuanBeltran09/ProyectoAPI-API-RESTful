const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const presupuestoRoutes = require('./routes/presupuestoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

require('dotenv').config();

const app = express();
app.set('PORT',process.env.PORT || 3001 )

app.use(express.json());
app.use(cors());
app.use('/presupuestos', presupuestoRoutes);
app.use('/usuarios', usuarioRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

  app.listen(app.get('PORT'),()=>console.log(`Server Ready at port ${app.get('PORT')}`))
