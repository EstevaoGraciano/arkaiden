-- CreateTable
CREATE TABLE `Player` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Descendency` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Magic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DescendencyTrait` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterAttributes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `healthMax` INTEGER NOT NULL,
    `healthCurrent` INTEGER NOT NULL,
    `deathTurns` INTEGER NOT NULL,
    `turnActions` INTEGER NOT NULL,
    `classPoints` INTEGER NOT NULL,
    `descendencyPoints` INTEGER NOT NULL,
    `highGuard` INTEGER NOT NULL,
    `lowGuard` INTEGER NOT NULL,
    `defenseBonus` INTEGER NOT NULL,
    `dodgeBonus` INTEGER NOT NULL,
    `strength` INTEGER NOT NULL,
    `resistance` INTEGER NOT NULL,
    `agility` INTEGER NOT NULL,
    `intelligence` INTEGER NOT NULL,
    `knowledge` INTEGER NOT NULL,
    `confidence` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NULL,
    `descendencyId` INTEGER NOT NULL,
    `symbol` BOOLEAN NOT NULL,
    `symbolLocation` VARCHAR(191) NULL,
    `primaryMagicId` INTEGER NOT NULL,
    `secondaryMagicId` INTEGER NULL,
    `classId` INTEGER NOT NULL,
    `secondaryClassId` INTEGER NULL,
    `descendencyTraitId` INTEGER NOT NULL,
    `characterAttributesId` INTEGER NOT NULL,

    UNIQUE INDEX `Character_characterAttributesId_key`(`characterAttributesId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_descendencyId_fkey` FOREIGN KEY (`descendencyId`) REFERENCES `Descendency`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_primaryMagicId_fkey` FOREIGN KEY (`primaryMagicId`) REFERENCES `Magic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_secondaryMagicId_fkey` FOREIGN KEY (`secondaryMagicId`) REFERENCES `Magic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_secondaryClassId_fkey` FOREIGN KEY (`secondaryClassId`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_descendencyTraitId_fkey` FOREIGN KEY (`descendencyTraitId`) REFERENCES `DescendencyTrait`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_characterAttributesId_fkey` FOREIGN KEY (`characterAttributesId`) REFERENCES `CharacterAttributes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
