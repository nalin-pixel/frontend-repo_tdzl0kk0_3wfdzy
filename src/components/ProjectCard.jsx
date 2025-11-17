import { ExternalLink, Download, Star } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-slate-800/50 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-colors">
      {project.image_url && (
        <div className="h-40 w-full overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-500/10 border border-amber-400/30 px-2 py-0.5 rounded-full">
                  <Star size={14} /> Unggulan
                </span>
              )}
            </div>
            {project.subtitle && (
              <p className="text-blue-200/80 text-sm mb-2">{project.subtitle}</p>
            )}
          </div>
        </div>

        <p className="text-slate-300/90 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="text-xs text-blue-200/90 bg-blue-500/10 border border-blue-400/30 px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          {project.playstore_url && (
            <a
              href={project.playstore_url}
              target="_blank"
              className="inline-flex items-center gap-2 bg-emerald-500/90 hover:bg-emerald-500 text-white text-sm font-medium px-3 py-2 rounded-md transition-colors"
            >
              <ExternalLink size={16} /> Play Store
            </a>
          )}
          {project.mediafire_url && (
            <a
              href={project.mediafire_url}
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-500/90 hover:bg-blue-500 text-white text-sm font-medium px-3 py-2 rounded-md transition-colors"
            >
              <Download size={16} /> MediaFire
            </a>
          )}
          {project.website_url && (
            <a
              href={project.website_url}
              target="_blank"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium px-3 py-2 rounded-md transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
