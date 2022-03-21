import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfil1647883504533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD IF NOT EXISTS "age" int NOT NULL;`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN if Exists "age";`); // reverts things made in "up" method

    }
}

