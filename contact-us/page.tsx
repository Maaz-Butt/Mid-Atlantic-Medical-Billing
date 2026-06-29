"use client";
import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, MapPin, Clock, CheckCircle2, Lock, ArrowUpRight,
  ArrowRight, PhoneCall, HeartPulse, Building2, UserCheck, ShieldCheck, TrendingUp
} from "lucide-react";

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

const contactInfo = [
  {
    Icon: Phone,
    title: "Call Us",
    details: ["+1 (888) 505-0582", "+1 (346) 802-9956"],
    sub: "Mon–Fri, 8AM–7PM CST",
  },
  {
    Icon: Mail,
    title: "Email Us",
    details: ["info@midatlanticmedicalbilling.com", "billing@midatlanticmedicalbilling.com"],
    sub: "We reply within 24 hours",
  },
  {
    Icon: MapPin,
    title: "Office Location",
    details: ["6431 Long Drive", "Houston, TX 77087"],
    sub: "Visit us by appointment",
  },
  {
    Icon: Clock,
    title: "Business Hours",
    details: ["Monday – Friday: 8AM – 7PM", "Saturday: 9AM – 2PM"],
    sub: "CST (Central Standard Time)",
  },
];

const specialties = [
  "Cardiology", "Orthopedics", "Neurology", "OBGYN",
  "Pediatrics", "Oncology", "Pain Management", "Gastroenterology",
  "Nephrology", "Podiatry", "Dental", "ASC", "Other",
];

const services = [
  "Medical Billing Services",
  "Medical Coding Services",
  "Revenue Cycle Management",
  "MIPS Consulting",
  "Laboratory Billing",
  "Medical Billing Audit",
  "AI Agents Integration",
  "EHR Solutions",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    specialty: "",
    service: "",
    providers: "",
    message: "",
    monthly: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden bg-white text-gray-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest border border-white/10">
            Contact Mid Atlantic Medical Billing
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Let&apos;s Grow Your Practice Together
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Get a free revenue audit or talk to our billing experts today. We&apos;re here to answer every question.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c) => (
              <div key={c.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#5B7B5E]/10 to-[#3D5C42]/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-[#5B7B5E]/20 transition-colors">
                  <c.Icon className="w-6 h-6 text-[#5B7B5E]" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{c.title}</h3>
                {c.details.map((d, i) => (
                  <p key={i} className="text-sm font-medium text-gray-700">{d}</p>
                ))}
                <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-10 pb-24 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-5" />
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-gray-500 text-base max-w-sm">
                    We&apos;ve received your request. A Mid Atlantic Medical Billing specialist will contact you within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#5B7B5E] text-sm font-semibold underline underline-offset-2 hover:text-[#3D5C42]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Get Your Free Revenue Audit</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill out the form and we&apos;ll analyze your billing in detail — at no cost.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all"
                          placeholder="john@clinic.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Practice / Organization Name</label>
                      <input
                        type="text"
                        name="practice"
                        value={form.practice}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all"
                        placeholder="Houston Medical Group"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Specialty *</label>
                        <select
                          name="specialty"
                          required
                          value={form.specialty}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all text-gray-600 bg-white"
                        >
                          <option value="">Select Specialty</option>
                          {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interested In</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all text-gray-600 bg-white"
                        >
                          <option value="">Select Service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Number of Providers</label>
                        <select
                          name="providers"
                          value={form.providers}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all text-gray-600 bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="1">1 Provider</option>
                          <option value="2-5">2–5 Providers</option>
                          <option value="6-10">6–10 Providers</option>
                          <option value="11-25">11–25 Providers</option>
                          <option value="25+">25+ Providers</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Collections (approx.)</label>
                        <select
                          name="monthly"
                          value={form.monthly}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all text-gray-600 bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="<25k">Under $25,000</option>
                          <option value="25k-75k">$25,000 – $75,000</option>
                          <option value="75k-250k">$75,000 – $250,000</option>
                          <option value="250k-1m">$250,000 – $1M</option>
                          <option value="1m+">Over $1M</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Additional Notes</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#5B7B5E] focus:ring-2 focus:ring-[#5B7B5E]/10 transition-all resize-none"
                        placeholder="Tell us about your current billing challenges or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : "Submit Free Audit Request"}
                    </button>

                    <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> Your information is secure. We never share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick call card */}
            <div className="bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] rounded-3xl p-7 text-white shadow-lg">
              <PhoneCall className="w-8 h-8 text-white mb-3" />
              <h3 className="text-xl font-bold mb-2">Prefer to Talk?</h3>
              <p className="text-white/70 text-sm mb-5">Our billing specialists are ready to help. Call us now for an immediate consultation.</p>
              <a
                href="tel:+18885050582"
                className="block text-center bg-white text-[#5B7B5E] font-bold py-3 rounded-xl hover:bg-gray-100 transition-all"
              >
                +1 (888) 505-0582
              </a>
            </div>

            {/* What to expect */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">What Happens Next?</h3>
              <ul className="space-y-4">
                {[
                  { step: "1", text: "We review your submission within 2 business hours." },
                  { step: "2", text: "A specialist calls you to understand your needs." },
                  { step: "3", text: "We perform a free audit of your billing process." },
                  { step: "4", text: "You receive a detailed report with recommendations." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">Why Providers Trust Us</h3>
              <ul className="space-y-4">
                {[
                  { Icon: HeartPulse, text: "98% Clean Claim Rate" },
                  { Icon: TrendingUp, text: "20% Average Revenue Increase" },
                  { Icon: Building2, text: "500+ Providers Nationwide" },
                  { Icon: UserCheck, text: "AAPC Certified Billers & Coders" },
                  { Icon: ShieldCheck, text: "HIPAA Compliant & Secure" },
                  { Icon: CheckCircle2, text: "No Setup Fees — Ever" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                    <item.Icon className="w-4 h-4 text-[#5B7B5E]" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-0">
        <div className="w-full h-[350px] bg-gray-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
          <div className="relative z-10 text-center space-y-2">
            <MapPin className="w-12 h-12 text-[#5B7B5E] mx-auto mb-2" />
            <h3 className="text-gray-700 font-bold text-xl mb-1">Mid Atlantic Medical Billing Headquarters</h3>
            <p className="text-gray-500 text-sm">6431 Long Drive, Houston, TX 77087</p>
            <a
              href="https://maps.google.com/?q=6431+Long+Drive+Houston+TX+77087"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#5B7B5E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all"
            >
              Open in Google Maps <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
