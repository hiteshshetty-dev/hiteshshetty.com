import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "dark-plus",
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
