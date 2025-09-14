import { PostSubmissionFormWrapper } from "./PostSubmissionFormWrapper";
import { PostListServer } from "./PostListServer";
import { Suspense } from "react";

interface PostSectionProps {
  currentPage: number;
}

export function PostSection({ currentPage }: PostSectionProps) {
  return (
    <>
      {/* Post Submission Form - Only show for logged in users */}
      <PostSubmissionFormWrapper />

      {/* Post List */}
      <div className="mt-8">
        <Suspense fallback={
          <div className="text-center py-8 text-gray-400">
            Loading posts...
          </div>
        }>
          <PostListServer page={currentPage} />
        </Suspense>
      </div>
    </>
  );
}