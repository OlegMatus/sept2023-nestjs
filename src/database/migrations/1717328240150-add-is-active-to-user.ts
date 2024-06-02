import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveToUser1717328240150 implements MigrationInterface {
    name = 'AddIsActiveToUser1717328240150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
