import { PARTNER_SLIDES } from '../data/siteData';
import { ImageCarousel } from './Carousel';
import { SectionHeading } from './SectionHeading';

export function Partners() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Partners"
          subtitle="Trusted by leading brands and institutions across India."
        />

        <ImageCarousel
          slides={PARTNER_SLIDES}
          showIndicators
          renderSlide={(images) => (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
              {images.map((image) => (
                <div
                  key={image}
                  className="card-modern flex h-32 items-center justify-center p-4 sm:h-36"
                >
                  <img
                    src={image}
                    alt="Partner"
                    className="max-h-full max-w-full object-contain grayscale transition hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/img/Frame 1.png"
        alt="GST Franchise promotion"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gst-navy/20 to-transparent" />
    </section>
  );
}
