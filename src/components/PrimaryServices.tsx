import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PRIMARY_SERVICES } from '../data/primaryServices';
import { asset } from '../utils/assets';
import { DigitalMarketingModal } from './DigitalMarketingModal';
import { SectionHeading } from './SectionHeading';

const FALLBACK_ICON = asset('img/services/gst.svg');

function ServiceCard({
  name,
  image,
  popular,
}: {
  name: string;
  image: string;
  popular?: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition duration-300 hover:-translate-y-1.5 hover:border-orange-400/50 hover:bg-white/12 hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)]">
      {popular && (
        <span className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
          <Sparkles size={10} />
          Popular
        </span>
      )}

      <div className="flex h-20 w-full items-center justify-center sm:h-24">
        <img
          src={imgSrc}
          alt={name}
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
          onError={() => setImgSrc(FALLBACK_ICON)}
          className="h-16 w-16 object-contain transition duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
        />
      </div>

      <p className="mt-2 w-full border-t border-white/10 pt-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-slate-300 transition group-hover:text-white sm:text-xs">
        {name}
      </p>
    </div>
  );
}

export function PrimaryServices() {
  const [modalOpen, setModalOpen] = useState(false);

  const rows = [
    PRIMARY_SERVICES.slice(0, 5),
    PRIMARY_SERVICES.slice(5, 10),
    PRIMARY_SERVICES.slice(10, 15),
  ];

  return (
    <section className="section-padding bg-gst-navy">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Primary Services"
          subtitle="Everything your franchise needs — from GST to digital marketing, all in one place."
          light
        />

        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
            >
              {row.map((service) => {
                if (service.opensModal) {
                  return (
                    <button
                      key={service.id}
                      type="button"
                      className="cursor-pointer text-left"
                      onClick={() => setModalOpen(true)}
                    >
                      <ServiceCard
                        name={service.name}
                        image={service.image}
                        popular={service.popular}
                      />
                    </button>
                  );
                }

                return (
                  <ServiceCard
                    key={service.id}
                    name={service.name}
                    image={service.image}
                    popular={service.popular}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <DigitalMarketingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
