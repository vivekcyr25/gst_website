import { Globe, MapPin } from 'lucide-react';
import {
  NATIONAL_G2C_IMAGES,
  STATE_G2C_IMAGES,
} from '../data/siteData';
import { useAlternatingFade } from '../hooks/useSiteEffects';
import { SectionHeading } from './SectionHeading';

function G2CImageGrid({ images }: { images: readonly string[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-9 md:gap-4">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="group flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
        >
          <img
            src={image}
            alt="Government service"
            className="h-auto w-full max-w-[90px] object-contain transition group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export function G2CServices() {
  const showNational = useAlternatingFade(10000);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Government To Customer"
          subtitle="National and state-level government services delivered at your nearest GST center."
        />

        {/* Tab indicators */}
        <div className="mb-10 flex justify-center gap-3">
          <div
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              showNational
                ? 'bg-gst-navy text-white shadow-lg'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            <Globe size={16} />
            National Level
          </div>
          <div
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              !showNational
                ? 'bg-gst-navy text-white shadow-lg'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            <MapPin size={16} />
            State Level
          </div>
        </div>

        <div className="relative min-h-[280px]">
          <div className={showNational ? 'fade-section-visible' : 'fade-section-hidden'}>
            <h4 className="font-display mb-6 text-center text-xl font-bold text-gst-navy">
              National Level Services
            </h4>
            <G2CImageGrid images={NATIONAL_G2C_IMAGES} />
          </div>

          <div className={showNational ? 'fade-section-hidden' : 'fade-section-visible'}>
            <h4 className="font-display mb-6 text-center text-xl font-bold text-gst-navy">
              State Level Services
            </h4>
            <G2CImageGrid images={STATE_G2C_IMAGES} />
          </div>
        </div>
      </div>
    </section>
  );
}
