-- CreateTable
CREATE TABLE "Cita" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "paciente" TEXT NOT NULL,
    "tratamiento" TEXT NOT NULL
);
