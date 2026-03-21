interface ProjectTagProps {
  type: string;
  company?: string;
  projectUuid?: string;
}

export default function ProjectTag({
  type,
  company,
  projectUuid,
}: ProjectTagProps) {
  const isPersonal = type === "personal";
  const tagColor = isPersonal
    ? "bg-brand-amber/20 text-brand-navy"
    : "bg-brand-rust/10 text-brand-navy";
  const tagText = isPersonal ? "Personal" : "Professional";

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span
          data-testid={
            projectUuid ? `project-type-tag-${projectUuid}` : undefined
          }
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${tagColor}`}
        >
          {tagText}
        </span>
        {company && (
          <span
            data-testid={
              projectUuid ? `project-company-tag-${projectUuid}` : undefined
            }
            className="text-xs text-brand-steel"
          >
            @ {company}
          </span>
        )}
      </div>
    </div>
  );
}
