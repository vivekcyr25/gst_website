import { Trophy } from 'lucide-react';
import { AWARD_IMAGES } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

function FlipAwardCard({ src, index }: { src: string; index: number }) {
  return (
    <div className="flip-card group mx-auto h-56 w-full max-w-xs sm:h-60">
      <div className="flip-card-inner relative h-full w-full">
        <div className="flip-card-front absolute inset-0 overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
          <img src={src} alt={`Award ${index + 1}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gst-navy/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <Trophy size={18} className="text-amber-400" />
            <span className="text-sm font-semibold">Excellence Award</span>
          </div>
        </div>
        <div className="flip-card-back absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-center text-white shadow-2xl">
          <div>
            <Trophy size={40} className="mx-auto mb-3 opacity-90" />
            <p className="font-display text-lg font-bold">Recognized Leader</p>
            <p className="mt-2 text-sm opacity-90">GST Franchise Excellence {2024 + index}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Awards() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/awards-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gst-navy/85" />
      <div className="absolute inset-0 bg-mesh-dark opacity-60" />

      <div className="container relative mx-auto px-4">
        <SectionHeading
          title="Awards & Recognition"
          subtitle="Celebrating excellence in franchise services and customer trust across India."
          light
        />
        <div className="grid gap-8 md:grid-cols-3">
          {AWARD_IMAGES.map((image, index) => (
            <FlipAwardCard key={image} src={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
