-- CreateTable
CREATE TABLE "rideOption" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "rideOption_pkey" PRIMARY KEY ("id")
);
