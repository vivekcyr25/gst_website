import { Check, X } from 'lucide-react';
import { DIGITAL_MARKETING_SERVICES } from '../data/siteData';

interface DigitalMarketingModalProps {
  open: boolean;
  onClose: () => void;
}

export function DigitalMarketingModal({ open, onClose }: DigitalMarketingModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gst-navy/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-gst-navy shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="digital-marketing-title"
      >
        <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-6">
          <div className="absolute inset-0 shimmer-bar opacity-20" />
          <div className="relative flex items-center justify-between">
            <h5 id="digital-marketing-title" className="font-display text-xl font-bold text-white md:text-2xl">
              Digital Marketing Services
            </h5>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <ul className="space-y-3">
            {DIGITAL_MARKETING_SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-orange-400" strokeWidth={2.5} />
                {service}
              </li>
            ))}
          </ul>

          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            onSubmit={(event) => {
              event.preventDefault();
              onClose();
            }}
          >
            <p className="font-display text-lg font-bold text-white">Get a Free Quote</p>
            <p className="text-sm text-slate-400">Fill in your details and we&apos;ll reach out within 24 hours.</p>

            {[
              { id: 'dm-name', label: 'Name', placeholder: 'Your full name' },
              { id: 'dm-mobile', label: 'Mobile No.', placeholder: '10-digit mobile' },
            ].map(({ id, label, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {label}
                </label>
                <input
                  id={id}
                  type="text"
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'dm-state', label: 'State', placeholder: 'State' },
                { id: 'dm-zip', label: 'Zip', placeholder: 'Pin code' },
              ].map(({ id, label, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {label}
                  </label>
                  <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-400/50"
                  />
                </div>
              ))}
            </div>

            <button type="submit" className="btn-primary w-full py-3">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
