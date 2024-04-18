import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedNumberSelectionGame1713369385272 implements MigrationInterface {
    name = 'AddedNumberSelectionGame1713369385272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."number-selector_level_enum" AS ENUM('1', '2', '3', '4', '5', '6', '7')`);
        await queryRunner.query(`CREATE TABLE "number-selector" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "successFullCount" integer NOT NULL DEFAULT '0', "unSuccessFullCount" integer NOT NULL DEFAULT '0', "level" "public"."number-selector_level_enum" NOT NULL, "userId" uuid, CONSTRAINT "PK_9c10b5600232032e702594e1cbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "number-selector" ADD CONSTRAINT "FK_65d30368383b5bfa7c0a0153cd5" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "number-selector" DROP CONSTRAINT "FK_65d30368383b5bfa7c0a0153cd5"`);
        await queryRunner.query(`DROP TABLE "number-selector"`);
        await queryRunner.query(`DROP TYPE "public"."number-selector_level_enum"`);
    }

}
