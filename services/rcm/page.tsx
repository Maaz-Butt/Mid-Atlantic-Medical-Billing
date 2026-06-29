"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Calendar, UserPlus, Search, ClipboardList, Tag, DollarSign,
  ShieldCheck, RefreshCw, CreditCard, Star, Zap, CheckCircle2,
  Lock, ArrowRight, ShieldAlert, Award, Clock, HeartPulse,
  Brain, Bone, Activity, Sun, Flame, MessageSquare, Microscope,
  Stethoscope, Plus, Minus
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
  { end: 99, suffix: "%", label: "Accurate Claim Submissions" },
  { end: 26, suffix: " Days", label: "Swift Reimbursements" },
  { end: 20, suffix: "%", label: "Average Revenue Boost" },
  { end: 96, suffix: "%", label: "Average Collection Rate" }
];

const mainServices = [
  { title: "Appointment Scheduling", desc: "Leveraging advanced scheduling systems to optimize slots, reduce patient wait times, and maximize provider productivity.", Icon: Calendar },
  { title: "Patient Registration", desc: "Meticulous entry of demographic and insurance details at the front desk to form an error-free billing foundation.", Icon: UserPlus },
  { title: "Eligibility & Benefits Verification", desc: "Real-time validation of patient insurance active status, deductibles, copays, and benefit caps prior to clinical visits.", Icon: Search },
  { title: "Referral & Prior Authorization", desc: "Proactive tracking and coordination of pre-approvals from payers for high-cost services to prevent coverage denials.", Icon: ClipboardList },
  { title: "Coding & Billing Compliance", desc: "Certified AAPC coders assigning correct ICD-10, CPT, and modifier selections based on strict payer rules.", Icon: Tag },
  { title: "Charge & Payment Posting", desc: "Timely logging of all charges and payments from ERAs, EOBs, and patients, ensuring accurate reconciliation.", Icon: DollarSign },
  { title: "Clearinghouse Denial Management", desc: "Rapid response to clearinghouse rejections and automated claim scrubbing to fix diagnostic and billing issues.", Icon: ShieldCheck },
  { title: "Accounts Receivable (A/R) Follow-Up", desc: "Persistent outreach and tracking of outstanding payer claims past 30 days to accelerate cash flow.", Icon: RefreshCw },
  { title: "Patient Statements & Collections", desc: "Transparent patient invoicing, immediate statement delivery, and convenient online payment collection portals.", Icon: CreditCard }
];

const valueProps = [
  { title: "SOC-1 & SOC-2 Compliance", desc: "Highest industry standards of data security protocols in place to protect patient and clinical information.", Icon: Lock },
  { title: "99.9% Uptime Assurance", desc: "Robust cloud infrastructure guarantees continuous, uninterrupted access to your billing and RCM workflows.", Icon: Star },
  { title: "RPA-Powered Claims Engine", desc: "Advanced robotic process automation speeds up patient checks, claim uploads, and audit verification.", Icon: Zap },
  { title: "Robust Disaster Recovery", desc: "Encrypted, geographically distributed backups ensure immediate data retrieval in any emergency.", Icon: ShieldCheck },
  { title: "Free Provider Credentialing", desc: "Complementary payer enrollment and credentialing services when you bundle full-suite RCM with Mid Atlantic Medical Billing.", Icon: Award },
  { title: "Dedicated Account Managers", desc: "Personalized support with monthly revenue audits and transparent financial reports to keep you in control.", Icon: UserPlus }
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
    q: "How much do RCM Services cost?",
    a: "The cost of RCM services varies based on the size and volume of your practice. At Mid Atlantic Medical Billing, we offer a percentage-based model that aligns with your monthly collections. For detailed information and a personalized plan, contact us for a free consultation."
  },
  {
    q: "Why shouldn’t I just manage my billing in-house?",
    a: "In-house billing carries high overhead costs like salaries, health benefits, billing software, and continuous training. Mid Atlantic Medical Billing frees you from this administrative burden, providing 1,100+ certified coders and advanced RPA technology at less than 5% of monthly collections."
  },
  {
    q: "Does Mid Atlantic Medical Billing offer denial management on current claims?",
    a: "Yes, we specialize in denial management. Our experts analyze why current claims were rejected, correct coding or insurance errors, and resubmit them within 48 hours to secure payment within an average of 26 days."
  },
  {
    q: "Will they analyze and track all of my rejected claims?",
    a: "At Mid Atlantic Medical Billing, we meticulously analyze and track all rejected claims. Our team identifies the root causes of denials, implements preventive rules in our scrubber system, and streamlines your overall claims process for revenue optimization."
  },
  {
    q: "When should Revenue Cycle Management be outsourced?",
    a: "You should outsource RCM when your practice is facing complex billing rules, experiencing high denial rates (above 5%), seeing an increase in outstanding A/R days, or spending too much time on paperwork instead of core patient care."
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

export default function RcmPage() {
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
              Trusted by 500+ Physicians
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Maximize Your Practice Revenue with Our Premium RCM Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
              Join hands with Mid Atlantic Medical Billing to enjoy advanced RPA billing processes that optimize collections, reduce denials, and ensure consistent cash flow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#audit-form" className="bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-2xl">
                Get a Free Revenue Audit
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
                  <p className="text-gray-600">Our billing experts will review your practice and reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-[#5B7B5E] text-center">Contact Our Experts</h3>
                  <p className="text-gray-500 text-sm text-center">Request a free quote & RCM analysis</p>
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

      {/* Why practices need RCM */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 rounded-3xl p-10 relative overflow-hidden border border-green-100">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5B7B5E]/10 rounded-full blur-xl"></div>
            <p className="text-8xl mb-6 text-[#5B7B5E]/30 font-black">96%</p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Empower Your Practice</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Achieve an average collection rate of approximately 96%. Shifting to premium RCM services from Mid Atlantic Medical Billing secures unpaid balances, tracks aging A/R, and drives practice collections.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Section>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Unlock the Full Potential of Your Revenue Cycle
              </h2>
            </Section>
            <p className="text-gray-600 leading-relaxed text-base">
              Revenue Cycle Management is much more than just submitting claims. It represents an end-to-end framework starting from the moment a patient schedules an appointment to the final balance resolution. Inconsistencies at any step lead to significant revenue leakage.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Mid Atlantic's premium RCM services combine over 1,100 certified medical billers with robust RPA automation. We eliminate scheduling bottlenecks, resolve clearinghouse rejections, track aging A/R, and handle complex appeals.
            </p>
            <div>
              <a href="#audit-form" className="inline-flex items-center gap-2 bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-6 py-3 rounded-full transition-all">
                Learn About Our RCM Advantage <span>→</span>
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
                End-to-End RCM Solutions
              </h2>
              <p className="text-gray-500">
                From appointment scheduling to collections, Mid Atlantic Medical Billing optimizes every single touchpoint.
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
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Catering to Over 40+ Medical Specialties
              </h2>
              <p className="text-gray-500">
                Our outsourced RCM services meet the unique coding and reimbursement rules of every clinical specialty.
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
                Fully Trained on Your Existing EMR & EHR Software
              </h2>
              <p className="text-gray-500">
                Our specialists adapt to your scheduling and charting tools without disrupting your day-to-day workflow.
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
                Satisfied Providers are Our Greatest Testaments
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Hear from practice managers and directors enjoying clean claims and increased revenues.
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
