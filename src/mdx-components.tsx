import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

function DotSeparator(props: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <div className="flex items-center justify-center py-4" {...props}>
      <div className="flex items-center space-x-2">
        <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-brand-navy/90"></div>
        <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-brand-navy/90"></div>
        <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-brand-navy/90"></div>
      </div>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt ?? ""}
        width={1200}
        height={630}
        loading="lazy"
        className="rounded-lg my-8"
      />
    ),
    p: (props) => <p className="leading-relaxed" {...props} />,
    code: (props) => (
      <code
        className="bg-brand-navy/5 px-1.5 py-0.5 rounded text-sm font-medium"
        {...props}
      />
    ),
    pre: (props) => (
      <pre className="rounded-lg p-4 overflow-x-auto my-6" {...props} />
    ),
    hr: (props) => <DotSeparator {...props} />,
    ...components,
  };
}
