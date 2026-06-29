"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Tag, ClipboardList, Laptop, ShieldCheck, FlaskConical,
  Dna, Microscope, Building2, Stethoscope, Star, Zap,
  CheckCircle2, RefreshCw, Globe, DollarSign, Brain, Bone,
  Activity, HeartPulse, Sun, Flame, MessageSquare, Plus, Minus
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
  { end: 10, suffix: "%", label: "Practice Revenue Increase" },
  { end: 1100, suffix: "+", label: "Skilled Medical Billers" },
  { end: 4, suffix: "-5%", label: "Low Billing Rate" }
];

const mainServices = [
  { title: "Complex Test Coding", desc: "Managing frequent CPT and HCPCS updates for molecular, clinical, pathology, and diagnostic testing.", Icon: Tag },
  { title: "Prior Authorizations", desc: "Timely pre-approvals for high-cost genetic, molecular, and diagnostic testing to prevent post-service denials.", Icon: ClipboardList },
  { title: "LIS & EHR Integration", desc: "Seamless, automated data flow from Laboratory Information Systems directly to billing software to minimize errors.", Icon: Laptop },
  { title: "Compliance & CLIA Checks", desc: "Ensuring all human specimen testing claims are validated with active CLIA numbers to meet strict CMS standards.", Icon: ShieldCheck },
  { title: "Toxicology Lab Billing", desc: "Specialized coding and medical necessity validation for confirmatory testing, preventing audit failures.", Icon: FlaskConical },
  { title: "Molecular & Genetics Billing", desc: "Handling advanced NGS panels, PCR testing, and genomic panel billing with precise bundling compliance.", Icon: Microscope },
  { title: "Pathology Lab Billing", desc: "Ensuring accurate charge capture and professional component coding for biopsies, cytogenetics, and histopathology.", Icon: Microscope },
  { title: "Independent Labs RCM", desc: "End-to-end billing solutions for free-standing diagnostic and reference laboratories to optimize collections.", Icon: Building2 },
  { title: "Physician Office Labs", desc: "Streamlined billing workflows for in-office lab testing and in-house provider diagnostics.", Icon: Stethoscope }
];

const valueProps = [
  { title: "LIS Integration Expertise", desc: "We specialize in connecting laboratory billing workflows with leading LIS platforms for automated order and results transfer.", Icon: Zap },
  { title: "CLIA Compliance Validation", desc: "Our automated checks validate facility CLIA certifications to ensure correct billing on CMS-1500 and UB-04 forms.", Icon: ShieldCheck },
  { title: "RPA Billing Automation", desc: "Advanced robotic process automation scrubs laboratory orders, checks insurance eligibility, and uploads claims in seconds.", Icon: Zap },
  { title: "Audits & Appeal Recovery", desc: "Persistent denial management and strategic appeal procedures designed specifically for high-value laboratory claims.", Icon: RefreshCw },
  { title: "Nationwide Payer Coverage", desc: "We align laboratory billing rules with regional payer policies, Medicare local coverage determinations (LCDs), and state rules.", Icon: Globe },
  { title: "Low Collection Fees", desc: "Affordable percentage-based pricing ranging from 4% to 5% with no hidden fees and dedicated account management.", Icon: DollarSign }
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
    name: "Dr. Anthony",
    title: "Medical Director",
    clinic: "National Medical Labs",
    text: "Mid Atlantic Medical Billing has helped us save countless hours and improve our bottom line. The team is friendly, professional, and always available to answer our questions."
  },
  {
    name: "Dr. Richard",
    title: "Laboratory Manager",
    clinic: "Elite Diagnostics",
    text: "I used to dread our billing process, but since implementing Mid Atlantic Medical Billing, it has become much more manageable and efficient."
  },
  {
    name: "Dr. Susan",
    title: "Laboratory Manager",
    clinic: "Apex Reference Labs",
    text: "Mid Atlantic Medical Billing helped us save time and improve accuracy in our billing coordination. Highly recommended for any lab!"
  }
];

const faqs = [
  {
    q: "Can a physician bill for laboratory services?",
    a: "Yes, physicians can bill for laboratory services if the tests are performed within their practice or office lab. However, proper CLIA certification and correct CPT coding must be followed to prevent denials in laboratory billing."
  },
  {
    q: "Do labs need an EHR, or is an LIS enough for billing?",
    a: "An EHR is not always required for laboratory billing. An LIS often integrates directly with billing software, handling test orders, results, and coding. Many labs rely solely on LIS for efficient revenue cycle management."
  },
  {
    q: "How much does it cost to outsource laboratory billing services?",
    a: "The cost of outsourcing laboratory billing typically ranges from 6% to 10% of collections. However, Mid Atlantic Medical Billing offers an affordable pricing range of 4% to 5% of monthly revenue, which makes it a go-to choice for lab billing outsourcing."
  },
  {
    q: "What's the difference between LIS and LIMS in lab billing?",
    a: "A Laboratory Information System (LIS) is designed for clinical labs to support diagnostic testing, coding, and billing. On the other hand, the Laboratory Information Management System (LIMS) serves research or industrial labs, focusing on sample tracking and data management."
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

export default function LaboratoryBillingPage() {
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
              Laboratory Billing Services to Strengthen Your Revenue Cycle
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
              While you focus on delivering accurate test results, we maximize your revenue with our laboratory billing services.
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
                  <p className="text-gray-600">Our billing experts will review your laboratory structure and reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-[#5B7B5E] text-center">Contact Our Experts</h3>
                  <p className="text-gray-500 text-sm text-center">Request a free quote & laboratory billing analysis</p>
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
                      placeholder="name@laboratory.com"
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
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Laboratory Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#5B7B5E] focus:ring-1 focus:ring-[#5B7B5E] outline-none transition-all"
                      placeholder="Lab/Clinic Name"
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

      {/* Why labs need specialized billing */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 rounded-3xl p-10 relative overflow-hidden border border-green-100">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#5B7B5E]/10 rounded-full blur-xl"></div>
            <p className="text-8xl mb-6 text-[#5B7B5E]/30 font-black">CLIA</p>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Stop Lab Billing Claim Denials</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Missing or invalid Clinical Laboratory Improvement Amendments (CLIA) numbers on billing forms like the CMS-1500 or UB-04 often result in costly denials. Mid Atlantic Medical Billing helps validate CLIA certification alignment before claim submission.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Section>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Do Laboratories Need Specialized Lab Billing Services?
              </h2>
            </Section>
            <p className="text-gray-600 leading-relaxed text-base">
              Unlike general medical practices, laboratories face unique RCM and coding constraints. Frequent updates to molecular pathology CPT codes, complex prior authorizations for genetic panels, and strict CLIA certification requirements make in-house billing highly error-prone.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Outsourcing to <strong>Mid Atlantic Medical Billing</strong> grants your laboratory access to certified billing professionals, customized LIS integrations, and a rules-based RPA scrubbing engine built specifically for clinical, molecular, and toxicology diagnostics.
            </p>
            <div>
              <a href="#audit-form" className="inline-flex items-center gap-2 bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-6 py-3 rounded-full transition-all">
                Speak with a Lab Billing Expert Now <span>→</span>
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
                Laboratory Billing Services Offered by Mid Atlantic Medical Billing
              </h2>
              <p className="text-gray-500">
                From LIS integration to toxicology coding, Mid Atlantic Medical Billing manages the entire lab revenue cycle under one roof.
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
                Cost Comparison: In-House Billing vs. Mid Atlantic Medical Billing Lab Billing
              </h2>
              <p className="text-gray-500">Discover how much your diagnostics lab can save by outsourcing to Mid Atlantic Medical Billing</p>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* In House */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">In-House Laboratory Billing</h3>
                <div className="text-center py-4 border-y border-gray-100">
                  <span className="text-4xl font-black text-red-500">$50,000</span>
                  <span className="text-gray-500 text-sm"> / per year</span>
                  <p className="text-xs text-gray-400 mt-1">Estimates for small to medium-sized laboratory</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><span className="font-semibold text-gray-800">Annual Salary:</span> $25,000 to $35,000</li>
                  <li><span className="font-semibold text-gray-800">Overhead Cost:</span> $15,000 to $25,000</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-red-500 text-xs uppercase tracking-wider">Downsides</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>❌ High software and clearinghouse costs</p>
                  <p>❌ High turnover and training overhead</p>
                  <p>❌ Lacks automated LIS-to-billing scrubbers</p>
                </div>
              </div>
            </div>
            {/* Outsourcing */}
            <div className="bg-[#5B7B5E] text-white p-8 rounded-3xl shadow-xl border border-green-300 scale-105 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Outsourcing to Mid Atlantic Medical Billing</h3>
                <div className="text-center py-4 border-y border-white/10">
                  <span className="text-4xl font-black text-white">$5,000</span>
                  <span className="text-white/80 text-sm"> / per year</span>
                  <p className="text-xs text-green-200 mt-1">Calculations done for labs earning around $100k/yr</p>
                </div>
                <ul className="space-y-3 text-sm text-green-100">
                  <li><span className="font-semibold text-white">Mid Atlantic Medical Billing’s Rate:</span> 4% to 5% of monthly revenue</li>
                  <li><span className="font-semibold text-white">Total Cost:</span> Approximately $5,000</li>
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
                Supporting Medical Billing Across All Major Specialties
              </h2>
              <p className="text-gray-500">
                Our billing services meet the unique needs of healthcare providers across all specialties.
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
                Our Billing Services Work Seamlessly with Your LIS & EMR
              </h2>
              <p className="text-gray-500">
                No matter what software your laboratory relies on, our billing experts adapt to your workflow.
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
                Proven Trust: Testimonials from Our Laboratory Partners
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Explore what laboratory managers and diagnostic clinics say about our solutions.
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
