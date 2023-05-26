/*
  Warnings:

  - A unique constraint covering the columns `[playerId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playerId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseAgi` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseCon` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseDeathTurns` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseGuard` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseHealth` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseInt` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseKnw` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseLowGuard` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseRes` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseStr` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Character` ADD COLUMN `playerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Class` ADD COLUMN `baseAgi` INTEGER NOT NULL,
    ADD COLUMN `baseCon` INTEGER NOT NULL,
    ADD COLUMN `baseDeathTurns` INTEGER NOT NULL,
    ADD COLUMN `baseGuard` INTEGER NOT NULL,
    ADD COLUMN `baseHealth` INTEGER NOT NULL,
    ADD COLUMN `baseInt` INTEGER NOT NULL,
    ADD COLUMN `baseKnw` INTEGER NOT NULL,
    ADD COLUMN `baseLowGuard` INTEGER NOT NULL,
    ADD COLUMN `baseRes` INTEGER NOT NULL,
    ADD COLUMN `baseStr` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Character_playerId_key` ON `Character`(`playerId`);

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `Player`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
