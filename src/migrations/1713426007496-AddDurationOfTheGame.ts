import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDurationOfTheGame1713426007496 implements MigrationInterface {
    name = 'AddDurationOfTheGame1713426007496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" ADD "durationInSeconds" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" DROP COLUMN "durationInSeconds"`);
    }

}
