import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTheRelation1713427513905 implements MigrationInterface {
    name = 'UpdateTheRelation1713427513905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" DROP CONSTRAINT "FK_65d30368383b5bfa7c0a0153cd5"`);
        await queryRunner.query(`ALTER TABLE "number-selector" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "number-selector" ADD "userId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "number-selector" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "number-selector" ADD CONSTRAINT "FK_65d30368383b5bfa7c0a0153cd5" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
