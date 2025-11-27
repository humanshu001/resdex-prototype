-- CreateTable
CREATE TABLE "profile_views" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "viewer_id" UUID,
    "candidate_id" UUID NOT NULL,
    "viewed_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resume_viewed" BOOLEAN NOT NULL DEFAULT false,
    "resume_viewed_at" TIMESTAMP(3),

    CONSTRAINT "profile_views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_profile_views_viewer" ON "profile_views"("viewer_id");

-- CreateIndex
CREATE INDEX "idx_profile_views_candidate" ON "profile_views"("candidate_id");
