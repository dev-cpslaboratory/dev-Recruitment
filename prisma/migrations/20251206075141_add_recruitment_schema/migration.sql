-- CreateTable
CREATE TABLE "Research" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Research_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Practicum" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Practicum_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Research_nim_key" ON "Research"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Research_email_key" ON "Research"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Practicum_nim_key" ON "Practicum"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Practicum_email_key" ON "Practicum"("email");
