"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search, ClipboardList, Shield, DollarSign, RefreshCw, ShieldCheck,
  Tag, Edit, Send, Star, Zap, Brain, Bone, Activity, HeartPulse,
  Sun, Flame, ShieldAlert, Sparkles, AlertCircle, HelpCircle, Check,
  X, Stethoscope, Microscope, MessageSquare, CheckCircle2
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
  { end: 98, suffix: "%", label: "Clean Claim Rate" },
  { end: 20, suffix: "%", label: "Average Practice Revenue Increase" },
  { end: 24, suffix: " hr", label: "Claim Turnaround Time" },
  { end: 3, suffix: "%", label: "Denial Rates Maintained" }
];

const mainServices = [
  { title: "Insurance Verification", desc: "Confirming the patient’s insurance coverage, benefits, and deductibles before services are rendered.", Icon: Search },
  { title: "Prior Authorization", desc: "Obtaining approval from payers before expensive procedures and tests to prevent post-service denials.", Icon: ClipboardList },
  { title: "Medical Necessity Checks", desc: "Ensuring patient care documentation satisfies the payer's specific diagnostic and procedural criteria.", Icon: ShieldAlert },
  { title: "Payment Posting", desc: "Accurately logging payments, write-offs, and adjustments from insurance ERAs and patient payments.", Icon: DollarSign },
  { title: "A/R Follow-Up", desc: "Persistent outreach and tracking of outstanding claims to accelerate collections and reduce aging accounts.", Icon: RefreshCw },
  { title: "Denial Management", desc: "Rigorous root-cause analysis, correction, and timely appeal of denied claims within payer deadlines.", Icon: ShieldCheck },
  { title: "Medical Coding", desc: "Assigning correct ICD-10-CM, CPT, and HCPCS Level II codes matching strict clinical documentation.", Icon: Tag },
  { title: "Charge Entry", desc: "Entering charges based on documentation, active codes, and specific fee schedules for error-free claims.", Icon: Edit },
  { title: "Claim Submission", desc: "Electronically scrubbing and submitting clean claims to clearinghouses and payers for fast payouts.", Icon: Send }
];

const valueProps = [
  { title: "High First-Pass Claim Success", desc: "We help providers secure up to a 98% clean claim rate to help reduce denials and accelerate timely reimbursements.", Icon: Star },
  { title: "RPA-Powered Billing Automation", desc: "With advanced robotic process automation and millions of built-in rules, our system minimizes errors and speeds up billing cycles.", Icon: Zap },
  { title: "Full Compliance with Regulations", desc: "We strictly follow HIPAA, CMS, and payer guidelines to protect sensitive data and keep your practice audit-ready.", Icon: ShieldCheck },
  { title: "Transparent Financial Insights", desc: "Our medical billing experts assist you in getting control with clear daily, weekly, and monthly reporting.", Icon: RefreshCw },
  { title: "Dedicated Account Management", desc: "Every client gets a dedicated account manager to ensure personalized support and quicker resolution of issues.", Icon: UserCheckIcon },
  { title: "Scalable Solutions for Every Practice", desc: "No matter if you're a solo physician or a multi-site healthcare group, our outsourced billing services grow with your practice.", Icon: Building2Icon }
];

function UserCheckIcon(props: any) {
  return <ShieldCheck {...props} />;
}

function Building2Icon(props: any) {
  return <Send {...props} />;
}

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
    q: "Why Choose Mid Atlantic Outsourced Billing Services Over In-House Billers?",
    a: "Managing an in-house billing team often means higher costs and limited expertise. With Mid Atlantic Medical Billing’s medical billing services, you gain access to certified professionals and advanced billing technology, all at less than 5% of collections."
  },
  {
    q: "Where Can I Get CPT Codes for Medical Billing Services?",
    a: "You can get CPT codes for medical billing directly from the American Medical Association (AMA), which publishes and updates them annually. Many EHR systems also include CPT libraries, and there are other certified coding books that provide reliable access."
  },
  {
    q: "Will I Receive Financial Performance Reports After Getting Medical Billing Services from Mid Atlantic Medical Billing?",
    a: "Yes, when you outsource medical billing services to Mid Atlantic Medical Billing, you receive financial performance reports daily, weekly, and monthly. These reports cover key metrics like collections, claim statuses, and denial rates, ensuring complete transparency."
  },
  {
    q: "How Much Do Medical Billing Services Cost in 2025?",
    a: "In 2025, medical billing services typically cost 4% to 10% of monthly collections. Some companies charge you $1 to $10 per claim. Smaller practices may pay higher percentages, while larger clinics negotiate lower rates. However, Mid Atlantic Medical Billing offers an affordable rate of 5% to practices of every size."
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

export default function MedicalBillingServicesPage() {
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
              Clean Claim Rate: 98%
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Enjoy Up to 98% Clean Claim Rate with Our Medical Billing Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
              Struggling to get paid for the care you provide? Join hands with Mid Atlantic Medical Billing to enjoy timely insurance reimbursements for financial growth.
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
                  <p className="text-gray-500 text-sm text-center">Request a free quote & billing analysis</p>
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

      {/* Why practices need medical billing services */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 rounded-3xl p-10 relative overflow-hidden border border-green-100">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5B7B5E]/10 rounded-full blur-xl"></div>
            <p className="text-8xl mb-6 text-[#5B7B5E]/30 font-black">17%</p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Claim Denial Trend</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Medicare Advantage claim submissions denied on initial submission according to studies. Outsourcing to medical billing services protects your collections.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Section>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Do Practices Need Expert Medical Billing Services for Revenue Collection?
              </h2>
            </Section>
            <p className="text-gray-600 leading-relaxed text-base">
              A recent study by <strong>Health Affairs</strong> found that around <strong>17% of initial submissions</strong> to Medicare Advantage plans were denied. The numbers go way high with the strict policies of private insurers like Aetna and Blue Cross. That’s why practitioners around the United States should look to outsource medical billing to experienced billing companies.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Most of these revenue leakages occur due to a lack of pre-authorization systems and a less skilled coding team. Our company, <strong>Mid Atlantic Medical Billing</strong>, solves this issue with our expert billing teams and proper RCM workflows.
            </p>
            <div>
              <a href="#audit-form" className="inline-flex items-center gap-2 bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-6 py-3 rounded-full transition-all">
                Get Help from Our Experts Now <span>→</span>
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
                Medical Billing Services Offered by Mid Atlantic Medical Billing to Overcome Billing Challenges
              </h2>
              <p className="text-gray-500">
                From insurance verification to denial management, Mid Atlantic Medical Billing handles everything under one umbrella. You just focus on patient care while our medical billing experts handle everything else.
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

      {/* Cost Comparison */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                A Cost Breakdown Between In-House Billing and Mid Atlantic Medical Billing’s Outsourced Medical Billing Services
              </h2>
              <p className="text-gray-500">See how much you save by shifting from in-house overheads to Mid Atlantic Medical Billing</p>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* In House */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">In-House Medical Billing Services</h3>
                <div className="text-center py-4 border-y border-gray-100">
                  <span className="text-4xl font-black text-red-500">$50,000</span>
                  <span className="text-gray-500 text-sm"> / per year</span>
                  <p className="text-xs text-gray-400 mt-1">Estimates for small to medium-sized practices</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><span className="font-semibold text-gray-800">Annual Salary:</span> $25,000 to $35,000</li>
                  <li><span className="font-semibold text-gray-800">Overhead Cost:</span> $15,000 to $25,000</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-red-500 text-xs uppercase tracking-wider">Downsides</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>❌ Not Cost-Efficient</p>
                  <p>❌ Less Skilled Billers</p>
                  <p>❌ Lacks Automation & Scrubbing Systems</p>
                </div>
              </div>
            </div>
            {/* Outsourcing */}
            <div className="bg-[#5B7B5E] text-white p-8 rounded-3xl shadow-xl space-y-6 scale-105 border border-green-300 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Outsourcing to Mid Atlantic Medical Billing</h3>
                <div className="text-center py-4 border-y border-white/10">
                  <span className="text-4xl font-black text-white">$5,000</span>
                  <span className="text-white/80 text-sm"> / per year</span>
                  <p className="text-xs text-green-200 mt-1">Calculations done for practices earning around $100k/yr</p>
                </div>
                <ul className="space-y-3 text-sm text-green-100">
                  <li><span className="font-semibold text-white">Mid Atlantic Medical Billing’s Rate:</span> 5% on average</li>
                  <li><span className="font-semibold text-white">Total Amount:</span> Approximately $5,000</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-bold text-green-300 text-xs uppercase tracking-wider">Upsides</p>
                  <div className="space-y-1 text-sm text-green-100">
                    <p>✅ Save up to $45,000 annually</p>
                    <p>✅ Team of over 1,100 skilled billers</p>
                    <p>✅ RPA-powered billing & rules engine</p>
                  </div>
                </div>
                <div className="pt-2">
                  <a href="#audit-form" className="block text-center bg-white text-[#5B7B5E] font-bold py-3 rounded-xl hover:bg-green-50 transition-all">
                    Start Saving with Mid Atlantic Medical Billing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Medical Billing Services with Specialty-Specific Expertise
              </h2>
              <p className="text-gray-500">
                Our outsourced medical billing services meet the unique needs of healthcare providers across all specialties. From oncology billing to dental medical billing, our certified billers understand the complexities of coding and claims.
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
          <div className="text-center pt-4">
            <Link href="/specialties" className="bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-8 py-3 rounded-full transition-all">
              View More Specialties
            </Link>
          </div>
        </div>
      </section>

      {/* EMR Integrations */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Our Outsourced Billing Services Work Seamlessly with Your Existing EMR
              </h2>
              <p className="text-gray-500">
                No matter what software your practice relies on, our medical billing experts adapt to your workflow, helping you reduce denials. Our medical billing services fit right into your current systems without disruption.
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
          <div className="text-center pt-4">
            <a href="#audit-form" className="bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-8 py-3 rounded-full transition-all">
              Explore More EMR Integrations
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 space-y-12">
          <Section>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Testimonials Proving the Trustworthiness of Our Billing Services
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Explore What Healthcare Practitioners Are Saying About Our Medical Billing Services
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
                  <span className="text-xl text-[#5B7B5E] ml-4">{activeFaq === idx ? "−" : "+"}</span>
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
