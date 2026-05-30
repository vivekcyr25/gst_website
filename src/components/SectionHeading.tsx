interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <span
        className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${
          light
            ? 'bg-white/10 text-amber-300'
            : 'bg-orange-100 text-orange-600'
        }`}
      >
        GST Franchise Center
      </span>
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-gst-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base md:text-lg ${
            light ? 'text-slate-300' : 'text-gst-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mx-auto mt-5 h-1 w-16 rounded-full ${
          light
            ? 'bg-gradient-to-r from-amber-400 to-orange-500'
            : 'bg-gradient-to-r from-orange-500 to-amber-400'
        }`}
      />
    </div>
  );
}
