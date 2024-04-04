import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1712220860556 implements MigrationInterface {
    name = 'CreateUser1712220860556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
