const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear una nueva cita
let programarCita = async (req, res) => {
  const { fecha,paciente,tratamiento } = req.body;
  const cita = await prisma.cita.create({
    data: {
      fecha,
      paciente,
      tratamiento
    },
  });
  res.status(201).json(cita);
};

// Cancelar una cita por ID
let modificarCita = async (req, res) => {
  const { id } = req.params;
  const { fecha, paciente, tratamiento } = req.body;

  try {
    const cita = await prisma.cita.update({
      where: { id: parseInt(id) },
      data: {
        fecha,
        paciente,
        tratamiento,
      },
    });

    res.json({ message: 'Cita modificada con éxito', cita });
  } catch (error) {
    console.error('Error al modificar la cita:', error);
    res.status(500).json({ message: 'Error al modificar la cita' });
  }
};


// Mostrar citas programadas para un paciente específico por ID
let mostrarCitasPorPaciente = async (req, res) => {
  const { paciente } = req.params;
  const citas = await prisma.cita.findMany({
    where: { paciente },
  });
  res.json(citas);
};

// Listar todas las citas programadas
let listarCitas = async (req, res) => {
  const citas = await prisma.cita.findMany();
  res.json(citas);
};

// Cerrar la conexión Prisma al final de la aplicación
process.on('beforeExit', () => {
  prisma.$disconnect();
});

module.exports = {
  programarCita,
  modificarCita,
  mostrarCitasPorPaciente,
  listarCitas,
};
