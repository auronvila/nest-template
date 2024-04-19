import { MigrationInterface, QueryRunner } from "typeorm";

export class FormatDate1713428778794 implements MigrationInterface {
    name = 'FormatDate1713428778794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "number-selector" ADD "createdAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "number-selector" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
