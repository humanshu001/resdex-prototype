-- DropIndex
DROP INDEX "idx_candidates_exp";

-- DropIndex
DROP INDEX "idx_candidates_notice_period";

-- AlterTable
ALTER TABLE "candidates" ADD COLUMN     "apply_date" TIMESTAMP(3),
ADD COLUMN     "calling_date" TIMESTAMP(3),
ADD COLUMN     "college_name" TEXT,
ADD COLUMN     "feedback" TEXT,
ADD COLUMN     "qualification" TEXT,
ADD COLUMN     "top_skills" TEXT,
ALTER COLUMN "current_ctc" SET DATA TYPE TEXT,
ALTER COLUMN "expected_ctc" SET DATA TYPE TEXT;

-- CreateIndex
CREATE INDEX "idx_candidates_exp" ON "candidates"("total_experience");
