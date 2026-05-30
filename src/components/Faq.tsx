import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

const FAQ_ITEMS = [
  {
    question: 'What is a GST Franchise Center?',
    answer:
      'A GST Franchise Center is an authorized service hub where entrepreneurs offer GST filing, banking, insurance, government services, and 300+ business utilities under the GST Suvidha Kendra network.',
  },
  {
    question: 'How do I apply for a franchise?',
    answer:
      'Click Apply Now in the header or scroll to Contact Us. Our team will guide you through registration, documentation, and setup so you can start serving customers quickly.',
  },
  {
    question: 'Which services can I offer at my center?',
    answer:
      'You can offer GST services, CA & accounting, company registration, insurance, loans, micro ATM, travel booking, digital marketing, utility payments, and national/state government services.',
  },
  {
    question: 'Is GST Franchise Center government approved?',
    answer:
      'Yes. GST Franchise Center operates under approvals aligned with GSTN Organisation standards for tax, accounting, and franchise service delivery across India.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-white scroll-mt-36">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers about franchise setup, services, and approvals."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-orange-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-gst-navy md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-orange-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
