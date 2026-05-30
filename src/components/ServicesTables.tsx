import { Check } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function ServicesTables() {
  return (
    <section className="section-padding bg-slate-100/80">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="A complete catalogue of business, government, and utility services for your franchise."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="card-modern overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-4">
                <h4 className="font-display text-lg font-bold text-white">
                  {category.title}
                </h4>
              </div>
              <ul className="space-y-2.5 p-5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-orange-500"
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
