-- CreateTable
CREATE TABLE "Cita" (
    "id" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,
    "paciente" TEXT NOT NULL,
    "tratamiento" TEXT NOT NULL,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);
