"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Check, X, ShieldAlert, ArrowRight, ShieldCheck, HelpCircle, ActivitySquare, Sparkles } from "lucide-react";

/* ─── HOOKS ─────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── SUBCOMPONENTS ─────────────────────────────────────── */
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function StaggerGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`stagger-children ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    tagline: "For solo practitioners",
    price: { monthly: "3%", annual: "2.5%" },
    description: "Perfect for individual physicians or small practices just getting started with professional billing.",
    features: [
      "Medical Billing & Coding",
      "Claims Submission",
      "Denial Management",
      "Patient Eligibility Verification",
      "Monthly Reporting",
      "Email Support",
      "Up to 2 Providers",
    ],
    notIncluded: [
      "MIPS Consulting",
      "Dedicated Account Manager",
      "AI-Powered Analytics",
    ],
    highlight: false,
    cta: "Get Started",
    badge: null,
  },
  {
    name: "Professional",
    tagline: "For growing practices",
    price: { monthly: "5%", annual: "4%" },
    description: "The most popular plan for mid-sized practices looking to maximize collections and efficiency.",
    features: [
      "Everything in Starter",
      "Medical Billing & Coding",
      "Revenue Cycle Management",
      "Prior Authorization",
      "MIPS Consulting",
      "Dedicated Account Manager",
      "Weekly Reporting & Analytics",
      "Phone + Email Support",
      "Up to 10 Providers",
    ],
    notIncluded: [
      "AI Agents Integration",
    ],
    highlight: true,
    cta: "Get Started",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    tagline: "For hospitals & large groups",
    price: { monthly: "Custom", annual: "Custom" },
    description: "Fully customized billing solution for hospitals, health systems, and large multi-specialty groups.",
    features: [
      "Everything in Professional",
      "AI Agents Integration",
      "Custom EHR Integration",
      "Dedicated Billing Team",
      "Real-Time Dashboard",
      "24/7 Priority Support",
      "Unlimited Providers",
      "Compliance Consulting",
      "Quarterly Business Reviews",
    ],
    notIncluded: [],
    highlight: false,
    cta: "Contact Sales",
    badge: "Best Value",
  },
];

const faqs = [
  {
    q: "How does Mid Atlantic's pricing model work?",
    a: "Mid Atlantic Medical Billing charges a percentage of collections — meaning we only get paid when you get paid. There are no setup fees, no hidden costs, and no monthly minimums. Our percentage-based model aligns our interests with yours.",
  },
  {
    q: "Is there a contract or commitment period?",
    a: "We offer flexible month-to-month agreements with no long-term commitments required. However, clients who commit to annual plans receive a discounted rate.",
  },
  {
    q: "How quickly can Mid Atlantic Medical Billing onboard my practice?",
    a: "Most practices are fully onboarded within 48–72 hours. Our team handles all EHR integrations, staff training, and credentialing verification to get you up and running fast.",
  },
  {
    q: "Do you work with all EHR systems?",
    a: "Yes. We integrate seamlessly with all major EHR platforms including Epic, eClinicalWorks, Athenahealth, AdvancedMD, Kareo, NextGen, and many more.",
  },
  {
    q: "What specialties does Mid Atlantic Medical Billing serve?",
    a: "We serve over 40 medical specialties including Cardiology, Orthopedics, Neurology, OBGYN, Pediatrics, Oncology, Pain Management, and more. Our billers are specialty-certified.",
  },
  {
    q: "Can I get a free audit before committing?",
    a: "Absolutely! We offer a completely free, no-obligation billing audit that identifies revenue leakage, coding errors, and denial trends in your current process.",
  },
];

const included = [
  "No setup fees",
  "Free billing audit",
  "HIPAA compliant",
  "EHR integration",
  "Real-time reporting",
  "Dedicated support",
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden bg-white text-gray-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] py-24 text-center text-white">
        <div className="max-w-[900px] mx-auto px-4">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/10">
            Transparent Pricing
          </span>
          <h1 className="text-5xl font-extrabold text-white mb-5 leading-tight">Simple, Results-Based Pricing</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">We only get paid when you get paid. No setup fees. No hidden charges. Just results.</p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${billing === "monthly" ? "bg-white text-[#5B7B5E]" : "text-white/70 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${billing === "annual" ? "bg-white text-[#5B7B5E]" : "text-white/70 hover:text-white"}`}
            >
              Annual <span className="text-green-300 text-xs ml-1 font-bold">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-50 py-6 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {included.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <Check className="w-4 h-4 text-[#5B7B5E]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#5B7B5E] to-[#3D5C42] text-white shadow-2xl shadow-green-900/20 scale-105"
                    : "bg-white border border-gray-100 text-gray-800 shadow-md hover:shadow-xl"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold ${plan.highlight ? "bg-yellow-400 text-yellow-900" : "bg-[#5B7B5E] text-white"}`}>
                    {plan.badge}
                  </div>
                )}
                <div className="p-8 flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? "text-green-200" : "text-[#5B7B5E]"}`}>{plan.tagline}</p>
                  <h2 className={`text-2xl font-extrabold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h2>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                      {plan.price[billing]}
                    </span>
                    {plan.price[billing] !== "Custom" && (
                      <span className={`text-sm font-medium ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>of collections</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-green-200" : "text-[#5B7B5E]"}`} />
                        <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-700"}`}>{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 opacity-40">
                        <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm line-through">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <Link
                    href="/contact-us"
                    className={`block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all ${
                      plan.highlight
                        ? "bg-white text-[#5B7B5E] hover:bg-green-50 shadow-lg"
                        : "bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white hover:opacity-90 shadow-md"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest flex items-center justify-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> FAQ
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Frequently Asked Questions</h2>
            </div>
          </Section>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900 text-sm hover:text-[#5B7B5E] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq === idx ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} />
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <Section>
            <h2 className="text-4xl font-extrabold">Ready to Optimize Your Revenue Cycle?</h2>
          </Section>
          <p className="text-white/80 text-lg max-w-xl mx-auto">Get a completely free, no-obligation billing audit. We'll identify revenue leakage, coding errors, and denial trends.</p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[#5B7B5E] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl">
              Request Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18885050582" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              📞 +1 (888) 505-0582
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
