CREATE TYPE "public"."proposal_status" AS ENUM('pending', 'accepted', 'rejected');--> statement-breakpoint
CREATE TABLE "proposals" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "proposals_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"whichOffer" integer,
	"theProposal" text NOT NULL,
	"whoSent" integer,
	"toWhom" integer,
	"created_at" timestamp with time zone DEFAULT now(),
	"status" "proposal_status" DEFAULT 'pending' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "proposals" ADD CONSTRAINT "proposals_whichOffer_offers_id_fk" FOREIGN KEY ("whichOffer") REFERENCES "public"."offers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "proposals" ADD CONSTRAINT "proposals_whoSent_users_id_fk" FOREIGN KEY ("whoSent") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "proposals" ADD CONSTRAINT "proposals_toWhom_users_id_fk" FOREIGN KEY ("toWhom") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;