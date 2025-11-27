-- CreateTable
CREATE TABLE "candidates" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "gender" TEXT,
    "location" TEXT,
    "resume_url" TEXT,
    "source_portal" TEXT,
    "portal_unique_id" TEXT,
    "portal_date" TIMESTAMP(3),
    "total_experience" DECIMAL(5,2),
    "relevant_experience" DECIMAL(5,2),
    "experience_years" DECIMAL(5,2),
    "current_ctc" INTEGER,
    "expected_ctc" INTEGER,
    "notice_period" TEXT,
    "current_company" TEXT,
    "current_designation" TEXT,
    "preferred_roles" TEXT[],
    "preferred_locations" TEXT[],
    "employment_type" TEXT,
    "year_of_birth" INTEGER,
    "skills_raw" TEXT,
    "companies_raw" TEXT,
    "ctc_feedback" TEXT,
    "remark" TEXT,
    "jd_brief" TEXT,
    "searchable" tsvector,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_candidates_exp" ON "candidates"("experience_years");

-- CreateIndex
CREATE INDEX "idx_candidates_location" ON "candidates"("location");

-- CreateIndex
CREATE INDEX "idx_candidates_notice_period" ON "candidates"("notice_period");

-- CreateIndex
CREATE INDEX "idx_candidates_search_gin" ON "candidates" USING GIN ("searchable");

-- CreateIndex
CREATE INDEX "idx_candidates_updated" ON "candidates"("updated_at" DESC);
