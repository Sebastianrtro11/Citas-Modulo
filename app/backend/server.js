const express = require('express');
const server = express();
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const citasRouter = require('./src/routes/citas.Routes');



server.use(express.json());
server.use(cors());


server.post('/citas', async (req, res) => {
  const { fecha, paciente, tratamiento } = req.body;
  const cita = await prisma.cita.create({
    data: {
      fecha,
      paciente,
      tratamiento,
    },
  });
  res.status(201).json(cita);
});

server.get('/citas', async (req, res) => {
  const citas = await prisma.cita.findMany();
  res.json(citas);
  });

const PORT = process.env.PORT || 3000;

server.use('/citas', citasRouter);

server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = server;
