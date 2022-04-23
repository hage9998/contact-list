import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfil1647883504533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contacts" ADD IF NOT EXISTS "name" varchar(30) NOT NULL;`
    );
    await queryRunner.query(
      `ALTER TABLE "contacts" ADD IF NOT EXISTS "phone" int NOT NULL;`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contacts" DROP COLUMN if varchar(30) "name";`
    );
    await queryRunner.query(
      `ALTER TABLE "contacts" DROP COLUMN if int "phone";`
    );
  }
}
