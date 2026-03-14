"use client";

import Giscus from "@giscus/react";

const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as
  | `${string}/${string}`
  | undefined;
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

const isConfigured =
  repo && repoId && category && categoryId;

export default function GiscusComments() {
  if (!isConfigured) {
    return null;
  }

  return (
    <section
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-brand-navy/10"
      aria-label="Comments"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">
        Comments
      </h2>
      <div className="min-h-[200px] rounded-lg overflow-hidden">
        <Giscus
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme="light"
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  );
}
