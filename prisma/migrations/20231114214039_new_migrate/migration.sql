-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cita" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" TEXT NOT NULL,
    "paciente" TEXT NOT NULL,
    "tratamiento" TEXT NOT NULL
);
INSERT INTO "new_Cita" ("fecha", "id", "paciente", "tratamiento") SELECT "fecha", "id", "paciente", "tratamiento" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
