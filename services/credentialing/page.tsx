"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Handshake, ClipboardList, Building2, RefreshCw, Stethoscope, Tag,
  Award, MapPin, Users, Zap, ShieldCheck, Search, Star, Gift,
  CheckCircle2, Lock, ArrowRight, ShieldAlert, Clock, HeartPulse,
  Brain, Bone, Activity, Sun, Flame, MessageSquare, Microscope,
  Plus, Minus
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

function useCountUp(end: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return { ref, value };
}

/* ─── DATA ─────────────────────────────────────────────── */
const stats = [
  { end: 90, suffix: " Days", label: "Medicare Enrollment Under" },
  { end: 100, suffix: "%", label: "Document Compliance Rate" },
  { end: 40, suffix: "+", label: "Medical Specialties Served" },
  { end: 0, suffix: "", label: "Missed Certification Errors" }
];

const mainServices = [
  { title: "Payer Enrollment & Contracting", desc: "Comprehensive management of applications to establish commercial and government payer in-network statuses.", Icon: Handshake },
  { title: "CAQH Profile Maintenance", desc: "Complete profile setups, regular document uploads, and timely reattestations to prevent payer status lapses.", Icon: ClipboardList },
  { title: "Medicare & Medicaid Enrollment", desc: "PECOS registration and state-specific Medicaid enrollment forms handled with precision to avoid 90-day wait times.", Icon: Building2 },
  { title: "Revalidation & Re-credentialing", desc: "Proactive tracking of re-credentialing cycles and validation requests from payers to maintain continuous enrollment.", Icon: RefreshCw },
  { title: "Hospital Privileges Coordination", desc: "Gathering credentials, verifying backgrounds, and managing applications for admitting and clinical privileges.", Icon: Stethoscope },
  { title: "NPI Registration (Type I & II)", desc: "Securing individual National Provider Identifiers (Type I) and group/corporate NPIs (Type II) for new practices.", Icon: Tag },
  { title: "Contract Review & Negotiation", desc: "Evaluating fee schedules and commercial payer contract parameters to secure optimized reimbursement rates.", Icon: Award },
  { title: "Directory & Address Updates", desc: "Submitting demographic changes, taxonomy codes, and billing address updates to payer networks.", Icon: MapPin },
  { title: "Locum Tenens Enrollment", desc: "Onboarding temporary providers and coordinating Q5/Q6 billing modifiers to ensure uninterrupted collections.", Icon: Users }
];

const valueProps = [
  { title: "Accelerated Payer Onboarding", desc: "Enrollment delays freeze collections. We submit clean, verified applications to get you approved in record time.", Icon: Zap },
  { title: "Dedicated Enrollment Experts", desc: "A team of credentialing managers who coordinate directly with payer representatives to push applications forward.", Icon: Users },
  { title: "Database Compliance Management", desc: "Continuous maintenance of credentials, DEA licenses, board certifications, and history profiles.", Icon: ShieldCheck },
  { title: "Primary Source Verification", desc: "Pre-auditing all document arrays before submission to ensure zero data discrepancies or application returns.", Icon: Search },
  { title: "Transparent Progress Updates", desc: "Frequent tracking and status updates on pending contracts, applications, and payer approvals.", Icon: ClipboardList },
  { title: "Free RCM Package Bundling", desc: "Enjoy complementary provider credentialing and enrollment support when you outsource billing and RCM to Mid Atlantic Medical Billing.", Icon: Gift }
];

const specialties = [
  { name: "OB/GYN", Icon: Stethoscope, link: "/specialties/obgyn" },
  { name: "Neurology", Icon: Brain, link: "/specialties/neurology" },
  { name: "Orthopedics", Icon: Bone, link: "/specialties/orthopedics" },
  { name: "Podiatry", Icon: Activity, link: "/specialties/podiatry" },
  { name: "Cardiology", Icon: HeartPulse, link: "/specialties/cardiology" },
  { name: "Nephrology", Icon: RefreshCw, link: "/specialties/nephrology" },
  { name: "Psychiatry", Icon: MessageSquare, link: "/specialties/psychiatry" },
  { name: "Primary Care", Icon: Activity, link: "/specialties/primary-care" },
  { name: "Endocrinology", Icon: Microscope, link: "/specialties/endocrinology" },
  { name: "Dermatology", Icon: Sun, link: "/specialties/dermatology" },
  { name: "Pain Management", Icon: Flame, link: "/specialties/pain-management" },
  { name: "Infectious Disease", Icon: ShieldCheck, link: "/specialties/infectious-disease" }
];

const emrs = [
  { name: "eClinicalWorks", logo: "eC" },
  { name: "AdvancedMD", logo: "AM" },
  { name: "NextGen", logo: "NG" },
  { name: "Athena Health", logo: "AH" },
  { name: "CareCloud", logo: "CC" },
  { name: "Epic", logo: "EP" }
];

const testimonials = [
  {
    name: "Jackie Judd",
    title: "Practice Manager",
    clinic: "Wilson Creek Internal Medicine",
    text: "As a practice manager, I was looking to streamline the medical billing process. I tried other companies, but they were all complicated and took too much of my time. Fortunately, I found Mid Atlantic Medical Billing. They excel in tailoring solutions to fit my requirements."
  },
  {
    name: "Amber Vaughan",
    title: "Office Manager",
    clinic: "Idaho Kidney & Hypertension Institute",
    text: "We are a large practice with 15 providers. Mid Atlantic has been working with us for the last 5 years. This billing company has been a great asset to us. I work with Mid Atlantic Medical Billing and they provide everything I ask for. The team is friendly and very pleasant to work with."
  },
  {
    name: "Ashlee Rose",
    title: "Practice Manager",
    clinic: "Harding Memorial Healthcare",
    text: "We've been working with Mid Atlantic Medical Billing for 8 years now and I just wanted to say how happy we are with their services. They always get back to us quickly and are very easy to work with. They get my bills paid in record time and help us to generate millions in revenue."
  }
];

const faqs = [
  {
    q: "What is the difference between credentialing and contracting?",
    a: "Credentialing is the process where a payer verifies a provider's background, training, licenses, and certifications (verifying they are qualified). Contracting (payer enrollment) is establishing the actual billing agreement and participating provider contract with the network."
  },
  {
    q: "How long does the provider credentialing process take?",
    a: "Payer enrollment typically takes 90 to 120 days. Government payers like Medicare can take 60 to 90 days. We ensure all applications are submitted clean, complete, and pre-audited to ensure the fastest possible processing times."
  },
  {
    q: "What is CAQH and why is it important?",
    a: "CAQH (Council for Affordable Quality Healthcare) is a national provider database. Most commercial payers retrieve credential profiles from CAQH. Keeping this profile updated, complete, and regularly reattested is critical to remaining in-network."
  },
  {
    q: "Can a provider see patients while credentialing is pending?",
    a: "Generally, a provider cannot bill as in-network while credentialing is pending. However, in short-term coverage setups like locum tenens, billing under a Q5 or Q6 modifier is possible. Our team can guide you on the safest RCM workflows during application wait times."
  }
];

/* ─── SUBCOMPONENTS ─────────────────────────────────────── */
function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-black text-[#5B7B5E]">
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{value}</span>{suffix}
      </p>
      <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

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

export default function CredentialingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", practice: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-block bg-white/10 text-green-200 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">
              Free Credentialing with RCM Bundling
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Comprehensive Medical Credentialing & Payer Enrollment Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
              Affiliate with commercial insurance networks and government payers quickly. Our credentialing experts handle the entire application lifecycle so you can start billing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#audit-form" className="bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-2xl">
                Get a Free Audit & Quote
              </a>
              <a href="#services" className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all">
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div id="audit-form" className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-md mx-auto">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-[#5B7B5E]">Request Submitted!</h3>
                  <p className="text-gray-600">Our contracting specialists will review your provider details and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-[#5B7B5E] text-center">Contact Our Experts</h3>
                  <p className="text-gray-500 text-sm text-center">Request a free quote & credentialing audit</p>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#5B7B5E] focus:ring-1 focus:ring-[#5B7B5E] outline-none transition-all"
                      placeholder="Enter full name"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#5B7B5E] focus:ring-1 focus:ring-[#5B7B5E] outline-none transition-all"
                      placeholder="name@clinic.com"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#5B7B5E] focus:ring-1 focus:ring-[#5B7B5E] outline-none transition-all"
                      placeholder="Phone number"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Practice Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#5B7B5E] focus:ring-1 focus:ring-[#5B7B5E] outline-none transition-all"
                      placeholder="Clinic/Practice Name"
                      value={leadForm.practice}
                      onChange={(e) => setLeadForm({ ...leadForm, practice: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white font-bold py-3.5 rounded-xl hover:opacity-95 transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <AnimatedStat key={idx} end={item.end} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </section>

      {/* Why practices need active credentialing */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 rounded-3xl p-10 relative overflow-hidden border border-green-100">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5B7B5E]/10 rounded-full blur-xl"></div>
            <p className="text-8xl mb-6 text-[#5B7B5E]/30 font-black">100%</p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Eliminate Enrollment Gaps</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Achieve total compliance and avoid self-credentialing errors. Mid Atlantic Medical Billing conducts primary source verification and CAQH setups, ensuring providers are authorized to see patients and bill networks before the first claim is filed.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Section>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Payer Enrollment & Credentialing is Essential
              </h2>
            </Section>
            <p className="text-gray-600 leading-relaxed text-base">
              A single missing certification, an expired state license, or a delay in CAQH profile reattestation can immediately freeze your practice collections. Becoming out-of-network or losing participating provider status with a major payer disrupts patient care and drops clinic revenue.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Outsourcing your enrollment cycles to <strong>Mid Atlantic Medical Billing</strong> ensures your database profiles, license updates, revalidations, and hospital affiliations are handled with 100% accuracy. We expedite onboarding so you can expand your practice and see in-network patients without interruption.
            </p>
            <div>
              <a href="#audit-form" className="inline-flex items-center gap-2 bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-6 py-3 rounded-full transition-all">
                Speak with a Contracting Expert <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Provider Credentialing & Payer Enrollment Offerings
              </h2>
              <p className="text-gray-500">
                Accurate, comprehensive contracting solutions built for hospitals, clinics, and independent practitioners.
              </p>
            </div>
          </Section>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#5B7B5E]/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#5B7B5E]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <StaggerGrid className="grid lg:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => {
              const IconComponent = prop.Icon;
              return (
                <div key={idx} className="bg-[#5B7B5E]/5 border border-green-100 p-8 rounded-3xl space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#5B7B5E]/10 flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-[#5B7B5E]" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{prop.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{prop.desc}</p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Supporting Credentialing Cycles for Over 40+ Specialties
              </h2>
              <p className="text-gray-500">
                Our contracting specialists adapt to specific state regulations and specialty-specific guidelines.
              </p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {specialties.map((item, idx) => {
              const IconComp = item.Icon;
              return (
                <Link href={item.link} key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center hover:bg-gradient-to-br hover:from-[#5B7B5E] hover:to-[#3D5C42] hover:text-white transition-all group">
                  <IconComp className="w-8 h-8 text-[#5B7B5E] group-hover:text-white mx-auto mb-2 transition-colors" />
                  <p className="font-bold text-sm text-gray-800 group-hover:text-white">{item.name}</p>
                </Link>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* EMR Integrations */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Coordinates Seamlessly with Your Existing Software
              </h2>
              <p className="text-gray-500">
                Payer networks require verified electronic data interchange (EDI) setup. We coordinate all system links.
              </p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {emrs.map((emr, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-8 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="text-2xl font-black text-[#5B7B5E] block mb-2">{emr.logo}</span>
                <p className="font-semibold text-sm text-gray-700">{emr.name}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Trusted Provider Contracting Results
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Discover what healthcare practitioners say about our enrollment and credentialing services.
              </p>
            </div>
          </Section>
          <StaggerGrid className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl relative">
                <span className="text-5xl text-[#5B7B5E]/20 absolute top-4 right-6 font-serif leading-none">“</span>
                <h4 className="font-bold text-gray-900 text-base">{t.name}</h4>
                <p className="text-xs text-[#5B7B5E] font-semibold uppercase mt-0.5">{t.title} · {t.clinic}</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-4 italic">
                  {t.text}
                </p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[800px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions (FAQs)</h2>
            </div>
          </Section>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:text-[#5B7B5E] transition-colors outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl text-[#5B7B5E] ml-4">{activeFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
