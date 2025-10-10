interface ProjectTagProps {
  type: string;
  company?: string;
}

export default function ProjectTag({ type, company }: ProjectTagProps) {
  const isPersonal = type === "personal";
  const tagColor = isPersonal
    ? "bg-brand-amber/20 text-brand-navy"
    : "bg-brand-rust/10 text-brand-rust";
  const tagText = isPersonal ? "Personal" : "Professional";

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${tagColor}`}
        >
          {tagText}
        </span>
        {company && (
          <span className="text-xs text-brand-navy/60">@ {company}</span>
        )}
      </div>
    </div>
  );
}
