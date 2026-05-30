import { Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const HIGHLIGHTS = [
  { icon: Award, label: 'GSTN Approved', value: 'Govt. Certified' },
  { icon: TrendingUp, label: '300+ Services', value: 'Growing Daily' },
  { icon: CheckCircle2, label: 'PAN-India', value: '678+ Centers' },
];

export function WhatWeDo() {
  return (
    <section className="section-padding bg-mesh">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What We Do"
          subtitle="Empowering entrepreneurs and small businesses with India's most comprehensive franchise service network."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              We are <strong className="font-semibold text-gst-navy">#1 GST Franchises Center Provider</strong> in
              India, approved from Government of India&apos;s GSTN Organisation in Tax and Accounting under the legal
              contract. Our aim is to contribute to employment in India and empower small businesses to prosper
              PAN-India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We provide GST Services, Banking, Loans, Insurance, Healthcare, Micro ATM, Ticket & Hotel Booking,
              Company Registration, LLP, Society Registration and{' '}
              <span className="font-semibold text-orange-600">300+ services</span> — with 100+ more coming soon.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="card-modern flex flex-col items-center p-5 text-center"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide text-gst-muted">
                    {label}
                  </span>
                  <span className="mt-1 font-display text-sm font-bold text-gst-navy">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-400/20 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-2xl">
              <img
                src="/img/wwd.jfif"
                alt="What we do"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gst-navy/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-bottom-6 sm:-left-6">
              <p className="font-display text-2xl font-bold text-gradient">12,006+</p>
              <p className="text-sm text-gst-muted">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
