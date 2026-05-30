import { Building2, HeartHandshake, Layers } from 'lucide-react';
import { COUNTERS } from '../data/siteData';
import { useCounterAnimation } from '../hooks/useSiteEffects';

const ICONS = [HeartHandshake, Building2, Layers];

export function ServicesCounter() {
  const targets = COUNTERS.map((counter) => counter.target);
  const { sectionRef, counts } = useCounterAnimation(targets);

  return (
    <section ref={sectionRef} className="services-counter section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gst-navy via-gst-navy-light to-gst-navy shadow-2xl shadow-gst-navy/30">
          <div className="bg-mesh-dark px-6 py-12 md:px-12 md:py-16">
            <div className="mb-10 text-center">
              <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
                By The Numbers
              </span>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                Services Offered
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {COUNTERS.map((counter, index) => {
                const Icon = ICONS[index] ?? Layers;
                return (
                  <div
                    key={counter.label}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-orange-400/30 hover:bg-white/10"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 transition group-hover:scale-110">
                      <Icon size={26} />
                    </div>
                    <p className="font-display text-4xl font-extrabold text-gradient md:text-5xl">
                      {counts[index].toLocaleString()}
                      {'suffix' in counter ? counter.suffix : ''}
                    </p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                      {counter.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
