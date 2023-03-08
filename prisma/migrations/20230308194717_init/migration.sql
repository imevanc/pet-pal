-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('DOG_OWNER', 'DOG_TRAINER', 'DOG_SITTER', 'FOOD_SUPPLIER', 'DOG_BREEDER');

-- CreateEnum
CREATE TYPE "CountryRole" AS ENUM ('United_Kingdom', 'United_States', 'Canada', 'Mexico');

-- CreateEnum
CREATE TYPE "AboutRespones" AS ENUM ('Yes', 'No', 'Unsure');

-- CreateEnum
CREATE TYPE "PottyRole" AS ENUM ('EVERY_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS');

-- CreateEnum
CREATE TYPE "EnergyRole" AS ENUM ('High', 'Medium', 'Low');

-- CreateEnum
CREATE TYPE "FeedingRole" AS ENUM ('Once', 'Twice', 'Thrice', 'Fourice');

-- CreateEnum
CREATE TYPE "LeftAloneRole" AS ENUM ('No', 'OneToFour', 'FiveToEight', 'MoreThanEight');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressLineOne" TEXT,
ADD COLUMN     "addressLineTwo" TEXT,
ADD COLUMN     "age" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" "CountryRole" NOT NULL DEFAULT 'United_Kingdom',
ADD COLUMN     "postcode" TEXT,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'DOG_OWNER',
ADD COLUMN     "status" TEXT;

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "breed" TEXT,
    "sex" TEXT,
    "age" TEXT,
    "weight" TEXT,
    "image" TEXT,
    "userId" TEXT,
    "sprayedOrNeutered" "AboutRespones" NOT NULL DEFAULT 'Unsure',
    "microchipped" "AboutRespones" NOT NULL DEFAULT 'Unsure',
    "houseTrained" "AboutRespones" NOT NULL DEFAULT 'Unsure',
    "friendlyWithDogs" "AboutRespones" NOT NULL DEFAULT 'Unsure',
    "friendlyWithCats" "AboutRespones" NOT NULL DEFAULT 'Unsure',
    "friendlyWithChildren" "AboutRespones" NOT NULL DEFAULT 'Unsure',
    "pottyBreak" "PottyRole" NOT NULL DEFAULT 'EVERY_HOUR',
    "energyLevel" "EnergyRole" NOT NULL DEFAULT 'Low',
    "feedingSchedule" "FeedingRole" NOT NULL DEFAULT 'Twice',
    "leftAlone" "LeftAloneRole" NOT NULL DEFAULT 'No',

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
