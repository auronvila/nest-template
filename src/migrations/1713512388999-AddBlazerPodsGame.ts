import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBlazerPodsGame1713512388999 implements MigrationInterface {
    name = 'AddBlazerPodsGame1713512388999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."blazer-pods_level_enum" AS ENUM('1', '2', '3', '4', '5')`);
        await queryRunner.query(`CREATE TABLE "blazer-pods" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" character varying NOT NULL, "userId" character varying NOT NULL, "durationInSeconds" integer NOT NULL, "successFullCount" integer NOT NULL DEFAULT '0', "unSuccessFullCount" integer NOT NULL DEFAULT '0', "level" "public"."blazer-pods_level_enum" NOT NULL, CONSTRAINT "PK_08b3490400a9f0bdbf47577b83f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blazer-pods"`);
        await queryRunner.query(`DROP TYPE "public"."blazer-pods_level_enum"`);
    }

}
