ALTER TABLE "proposals" DROP CONSTRAINT "proposals_toWhom_users_id_fk";
--> statement-breakpoint
ALTER TABLE "proposals" DROP COLUMN "toWhom";