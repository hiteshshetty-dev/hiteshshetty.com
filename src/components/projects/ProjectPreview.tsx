import Image from "next/image";

interface ProjectPreviewProps {
  previews?: string[];
  title: string;
  className?: string;
}

export default function ProjectPreview({
  previews,
  title,
  className = "",
}: ProjectPreviewProps) {
  if (!previews || previews.length === 0) return null;

  return (
    <div className={`relative h-48 bg-brand-navy/5 ${className}`}>
      <Image
        src={previews[0]}
        alt={`Preview of ${title} project showing the application interface and functionality`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}
