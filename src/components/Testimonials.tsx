import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';
import { useCarousel } from '../hooks/useSiteEffects';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  const { activeIndex, goPrev, goNext, goTo } = useCarousel(TESTIMONIALS.length);

  return (
    <section className="section-padding bg-mesh">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Partners Say"
          subtitle="Real stories from franchise owners and customers across India."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="card-modern relative overflow-hidden p-8 md:p-12">
            <Quote
              size={48}
              className="absolute right-6 top-6 text-orange-100"
              fill="currentColor"
            />

            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? 'block opacity-100'
                    : 'pointer-events-none absolute inset-0 opacity-0'
                }`}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border-2 border-orange-200 object-cover"
                  />
                  <div>
                    <p className="font-display font-bold text-gst-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gst-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-400'
                        : 'w-2 bg-slate-200'
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gst-navy transition hover:border-orange-300 hover:bg-orange-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gst-navy transition hover:border-orange-300 hover:bg-orange-50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
