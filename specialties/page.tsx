"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  HeartPulse, Bone, Brain, Microscope, Stethoscope, ActivitySquare,
  ClipboardList, RefreshCw, Smile, Building2, Search, CheckCircle2,
  TrendingUp, Award, DollarSign, ShieldCheck, Users, Clock, Flame,
  FileText, ArrowRight, Shield, Award as AwardIcon, Check, Baby, BarChart3,
  Wind, Sparkles, Eye, Footprints
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
const allSpecialties = [
  // Top specialties (featured)
  { name: "Cardiology Billing", Icon: HeartPulse, desc: "Complex cardiac procedure coding, catheterization billing, and stress test claims.", href: "/specialties/cardiology", featured: true },
  { name: "Orthopedics Billing", Icon: Bone, desc: "Surgical, joint replacement, and musculoskeletal coding for orthopedic practices.", href: "/specialties/orthopedics", featured: true },
  { name: "Neurology Billing", Icon: Brain, desc: "EEG, EMG, and complex nerve study billing with precise CPT coding.", href: "/specialties/neurology", featured: true },
  { name: "Oncology Billing", Icon: Microscope, desc: "Chemotherapy administration, radiation therapy, and cancer drug billing compliance.", href: "/specialties/oncology", featured: true },
  { name: "OB/GYN Billing", Icon: Stethoscope, desc: "Obstetrics, gynecologic procedure coding, and global maternity billing.", href: "/specialties/obgyn", featured: true },
  { name: "Pain Management Billing", Icon: Flame, desc: "Interventional pain procedure coding and prior authorization management.", href: "/specialties/pain-management", featured: true },

  // All specialties
  { name: "Nephrology Billing", Icon: RefreshCw, desc: "Dialysis services, chronic kidney disease management, and ESRD billing.", href: "/specialties/nephrology" },
  { name: "Gastroenterology Billing", Icon: ClipboardList, desc: "Endoscopy, colonoscopy, and GI procedure billing with bundling compliance.", href: "/specialties/gastroenterology" },
  { name: "Pediatrics Billing", Icon: Baby, desc: "Well-child visits, immunizations, and pediatric-specific E&M code billing.", href: "/specialties/pediatrics" },
  { name: "Dental Billing", Icon: Smile, desc: "Dental procedure coding (CDT), dental claim forms, and insurance billing.", href: "/specialties/dental" },
  { name: "ASC Billing", Icon: Building2, desc: "Ambulatory surgery center facility fee coding and APC payment billing.", href: "/specialties/asc" },
  { name: "Podiatry Billing", Icon: Footprints, desc: "Specialized podiatric coding for foot/ankle surgeries, orthotics, and routine foot care.", href: "/specialties/podiatry" },
  { name: "Pulmonology Billing", Icon: Wind, desc: "Lungs, sleep apnea studies, bronchoscopy, and pulmonary function test billing.", href: "/contact-us?specialty=Pulmonology" },
  { name: "Psychiatry Billing", Icon: Brain, desc: "Psychiatric diagnostic evaluations, psychotherapy sessions, and pharmacologic management.", href: "/contact-us?specialty=Psychiatry" },
  { name: "Urgent Care Billing", Icon: Flame, desc: "High-volume claims, E&M coding, and rapid collections for urgent care clinics.", href: "/contact-us?specialty=Urgent%20Care" },
  { name: "Sleep Medicine Billing", Icon: Clock, desc: "Polysomnography coding, home sleep test billing, and DME reimbursement.", href: "/contact-us?specialty=Sleep%20Medicine" },
  { name: "Primary Care Billing", Icon: Users, desc: "Preventive medicine, annual wellness visits, and chronic care management billing.", href: "/contact-us?specialty=Primary%20Care" },
  { name: "Urology Billing", Icon: ClipboardList, desc: "Cystoscopy, prostate procedure billing, and urological surgery coding.", href: "/contact-us?specialty=Urology" },
  { name: "Endocrinology Billing", Icon: ActivitySquare, desc: "Continuous glucose monitoring, thyroid biopsy, and diabetes management billing.", href: "/contact-us?specialty=Endocrinology" },
  { name: "Hand Surgery Billing", Icon: Bone, desc: "Tendon repair, carpal tunnel release, and complex hand reconstructive coding.", href: "/contact-us?specialty=Hand%20Surgery" },
  { name: "Rheumatology Billing", Icon: Stethoscope, desc: "Infusion services, joint injections, and autoimmune disorder billing compliance.", href: "/contact-us?specialty=Rheumatology" },
  { name: "Dermatology Billing", Icon: Sparkles, desc: "Biopsies, mohs micrographic surgery, skin tag removals, and cosmetic billing.", href: "/contact-us?specialty=Dermatology" },
  { name: "Otolaryngology Billing", Icon: Stethoscope, desc: "ENT surgeries, audiology tests, tonsillectomy, and sinus procedure coding.", href: "/contact-us?specialty=Otolaryngology" },
  { name: "Ophthalmology Billing", Icon: Eye, desc: "Cataract surgery, intravitreal injections, and comprehensive eye exam billing.", href: "/contact-us?specialty=Ophthalmology" },
  { name: "Allergy Immunology Billing", Icon: Shield, desc: "Allergen immunotherapy, patch testing, and spirometry billing services.", href: "/contact-us?specialty=Allergy%20Immunology" },
  { name: "Speech Therapy Billing", Icon: ClipboardList, desc: "Evaluation and therapeutic interventions for speech, language, and cognitive disorders.", href: "/contact-us?specialty=Speech%20Therapy" },
  { name: "General Surgery Billing", Icon: Microscope, desc: "Hernia repair, appendectomy, gallbladder removal, and surgical bundling compliance.", href: "/contact-us?specialty=General%20Surgery" },
  { name: "Physical Therapy Billing", Icon: ActivitySquare, desc: "Therapeutic exercises, manual therapy, and timed modality billing compliance.", href: "/contact-us?specialty=Physical%20Therapy" },
  { name: "Vascular Surgery Billing", Icon: HeartPulse, desc: "Endovascular procedures, angioplasty, vein ablation, and diagnostic studies.", href: "/contact-us?specialty=Vascular%20Surgery" },
  { name: "Physical Medicine Billing", Icon: ActivitySquare, desc: "Rehabilitative care, EMG/NCS studies, and pain management coding.", href: "/contact-us?specialty=Physical%20Medicine" },
  { name: "Internal Medicine Billing", Icon: Stethoscope, desc: "Complex multi-system disease management, E&M coding, and preventive care.", href: "/contact-us?specialty=Internal%20Medicine" },
  { name: "Infectious Disease Billing", Icon: Shield, desc: "Outpatient parenteral antimicrobial therapy (OPAT) and complex consultations.", href: "/contact-us?specialty=Infectious%20Disease" },
  { name: "Behavioral Health Billing", Icon: Brain, desc: "Mental health counseling, substance abuse treatment, and intensive outpatient billing.", href: "/contact-us?specialty=Behavioral%20Health" },
  { name: "Rehabilitative Medicine Billing", Icon: ActivitySquare, desc: "PT/OT billing, neurological rehabilitation, and custom orthotic device coding.", href: "/contact-us?specialty=Rehabilitative%20Medicine" },
  { name: "Neurosurgery Billing", Icon: Brain, desc: "Craniotomy, spinal fusion, and complex neuro-interventional coding.", href: "/contact-us?specialty=Neurosurgery" },
  { name: "Medical Nutrition Billing", Icon: Stethoscope, desc: "Medical nutrition therapy (MNT), diabetes education, and nutritional counseling.", href: "/contact-us?specialty=Medical%20Nutrition" },
  { name: "Birth Center Billing", Icon: Baby, desc: "Global maternity packages, facility fee billing, and newborn care services.", href: "/contact-us?specialty=Birth%20Center" },
  { name: "Family Practice Billing", Icon: Users, desc: "Comprehensive family care, chronic care coordination, and preventive billing.", href: "/contact-us?specialty=Family%20Practice" },
  { name: "Radiology Billing", Icon: Microscope, desc: "MRI, CT scans, X-rays, ultrasound, and professional/technical component billing.", href: "/contact-us?specialty=Radiology" },
  { name: "Anesthesia Billing", Icon: Clock, desc: "Base units, time units, physical status modifiers, and CRNA billing compliance.", href: "/contact-us?specialty=Anesthesia" },
  { name: "Chiropractic Billing", Icon: Bone, desc: "Spinal manipulation coding, modality tracking, and strict medical necessity documentation.", href: "/contact-us?specialty=Chiropractic" },
  { name: "DME Billing", Icon: ClipboardList, desc: "Durable Medical Equipment billing, supply codes, and supplier standards compliance.", href: "/contact-us?specialty=DME" },
  { name: "Occupational Therapy Billing", Icon: ActivitySquare, desc: "Functional cognitive training, custom orthotic fitting, and timed modality billing.", href: "/contact-us?specialty=Occupational%20Therapy" },
  { name: "Pathology Billing", Icon: Microscope, desc: "Anatomical and clinical pathology coding, laboratory panels, and specimen billing.", href: "/contact-us?specialty=Pathology" }
];

const stats = [
  { end: 44, suffix: "+", label: "Specialties Covered" },
  { end: 98, suffix: "%", label: "Clean Claim Rate" },
  { end: 1100, suffix: "+", label: "Certified Billing Experts" },
  { end: 20, suffix: "%", label: "Avg. Revenue Increase" },
];

const featuredSpecialties = allSpecialties.filter(s => s.featured);
const otherSpecialties = allSpecialties.filter(s => !s.featured);

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

export default function SpecialtiesPage() {
  const [search, setSearch] = useState("");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", specialty: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filtered = [...featuredSpecialties, ...otherSpecialties].filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.desc.toLowerCase().includes(search.toLowerCase())
  );

  const showingFeatured = search === "";

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-[1280px] mx-auto px-4 text-center relative z-10 space-y-8">
          <span className="inline-block bg-white/10 text-green-200 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">
            40+ Specialties · 98% Clean Claim Rate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Medical Billing & Coding Services for All Types of Specialties
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-light">
            From cardiology to general surgery, Mid Atlantic's certified billers handle the complete revenue cycle for over 40 medical specialties. Find your specialty below.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your specialty (e.g. Cardiology, Dental, Pediatrics...)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white text-gray-900 text-sm font-medium shadow-2xl outline-none focus:ring-2 focus:ring-[#5B7B5E]"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a href="#specialties" className="bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg">
              Browse All Specialties
            </a>
            <a href="#contact-form" className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all">
              Get a Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <AnimatedStat key={idx} end={item.end} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 space-y-16">

          {/* Search results mode */}
          {search !== "" && (
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  {filtered.length > 0
                    ? `${filtered.length} Result${filtered.length > 1 ? "s" : ""} for "${search}"`
                    : `No results for "${search}"`}
                </h2>
                {filtered.length === 0 && (
                  <p className="text-gray-500">Try searching for another specialty or <a href="#contact-form" className="text-[#5B7B5E] font-semibold underline">contact us</a> to discuss your billing needs.</p>
                )}
              </div>
              <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((specialty, idx) => {
                  const IconComponent = specialty.Icon;
                  return (
                    <Link
                      href={specialty.href}
                      key={idx}
                      className="group bg-gray-50 border border-gray-100 p-7 rounded-2xl hover:bg-gradient-to-br hover:from-[#5B7B5E] hover:to-[#3D5C42] hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#5B7B5E]/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-[#5B7B5E] group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-white text-base mb-1.5">{specialty.name}</h3>
                      <p className="text-gray-500 group-hover:text-green-50 text-sm leading-relaxed">{specialty.desc}</p>
                      <span className="inline-block mt-3 text-[#5B7B5E] group-hover:text-white text-sm font-semibold">Learn more →</span>
                    </Link>
                  );
                })}
              </StaggerGrid>
            </div>
          )}

          {/* Normal mode — Featured + All */}
          {showingFeatured && (
            <>
              {/* Featured specialties */}
              <div className="space-y-10">
                <Section>
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                      Our Most Popular Billing Specialties
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                      These high-volume specialties represent the most complex and frequently requested billing solutions from our 500+ provider partners.
                    </p>
                  </div>
                </Section>
                <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredSpecialties.map((specialty, idx) => {
                    const IconComponent = specialty.Icon;
                    return (
                      <Link
                        href={specialty.href}
                        key={idx}
                        className="group relative bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 p-8 rounded-3xl hover:bg-gradient-to-br hover:from-[#5B7B5E] hover:to-[#3D5C42] hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                      >
                        <div className="absolute top-3 right-3 bg-[#5B7B5E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full group-hover:bg-white group-hover:text-[#5B7B5E] transition-all">
                          Popular
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-[#5B7B5E]/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                          <IconComponent className="w-8 h-8 text-[#5B7B5E] group-hover:text-white" />
                        </div>
                        <h3 className="font-extrabold text-gray-900 group-hover:text-white text-xl mb-2">{specialty.name}</h3>
                        <p className="text-gray-500 group-hover:text-green-50 text-sm leading-relaxed">{specialty.desc}</p>
                        <span className="inline-block mt-4 text-[#5B7B5E] group-hover:text-white text-sm font-bold">
                          Explore billing services →
                        </span>
                      </Link>
                    );
                  })}
                </StaggerGrid>
              </div>

              {/* All specialties grid */}
              <div className="space-y-10">
                <Section>
                  <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                      All Medical Billing Specialties (40+)
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                      Can't find your specialty above? Browse our full directory below or use the search bar to find exactly what you need.
                    </p>
                  </div>
                </Section>
                <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {otherSpecialties.map((specialty, idx) => {
                    const IconComponent = specialty.Icon;
                    return (
                      <Link
                        href={specialty.href}
                        key={idx}
                        className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#5B7B5E] hover:to-[#3D5C42] hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#5B7B5E]/10 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-[#5B7B5E] group-hover:text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 group-hover:text-white text-sm leading-snug mb-1">{specialty.name}</h3>
                        <p className="text-gray-500 group-hover:text-green-50 text-xs leading-relaxed line-clamp-2">{specialty.desc}</p>
                      </Link>
                    );
                  })}
                </StaggerGrid>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Mid Atlantic Medical Billing Section */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Section>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Mid Atlantic Medical Billing is the Preferred Billing Partner for 40+ Specialties
              </h2>
            </Section>
            <p className="text-gray-600 leading-relaxed">
              Medical billing rules differ dramatically across specialties. What applies to cardiology doesn't apply to chiropractic, and a missed modifier in oncology can cost thousands. Mid Atlantic's specialty-trained billing teams are fully immersed in the nuances of each discipline.
            </p>
            <ul className="space-y-4">
              {[
                { Icon: Check, text: "Specialty-specific CPT, ICD-10, and modifier expertise" },
                { Icon: Shield, text: "RPA-driven claim scrubbing before every submission" },
                { Icon: BarChart3, text: "Real-time KPI dashboards and monthly revenue reports" },
                { Icon: ShieldCheck, text: "HIPAA-compliant workflows with SOC-2 certification" },
                { Icon: RefreshCw, text: "Aggressive denial management and appeals within 48 hours" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.Icon className="w-3.5 h-3.5 text-[#5B7B5E]" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
            <a href="#contact-form" className="inline-flex items-center gap-2 bg-[#5B7B5E] hover:bg-[#3D5C42] text-white font-bold px-6 py-3 rounded-full transition-all">
              Get a Free Specialty Billing Audit →
            </a>
          </div>
          <div className="lg:col-span-7">
            <StaggerGrid className="grid grid-cols-2 gap-5">
              {[
                { title: "Specialty-Trained Billers", desc: "Each account is managed by billers trained specifically for your practice's coding rules and payer landscape.", Icon: AwardIcon },
                { title: "Fast Payer Onboarding", desc: "We credential your providers and set up EDI connections with commercial and government payers in record time.", Icon: Clock },
                { title: "Transparent Reporting", desc: "Monthly KPI reports, denial trend analysis, and A/R aging visibility at your fingertips — no surprises.", Icon: BarChart3 },
                { title: "Affordable Pricing", desc: "Percentage-based billing at 4–8% of monthly collections. No setup fees, no hidden charges.", Icon: DollarSign },
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-7 rounded-2xl shadow-sm space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#5B7B5E]/10 flex items-center justify-center">
                    <card.Icon className="w-6 h-6 text-[#5B7B5E]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">{card.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      {/* Contact / CTA form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Section>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Tell Us Your Specialty and Get a Custom Billing Quote
              </h2>
            </Section>
            <p className="text-gray-600 leading-relaxed">
              Don't see your specialty listed? We serve all healthcare disciplines. Share your details below and one of our specialty billing consultants will prepare a custom proposal within 24 hours.
            </p>
            <StaggerGrid className="grid grid-cols-2 gap-5">
              {[
                { stat: "500+", label: "Active Practice Clients" },
                { stat: "98%", label: "Client Satisfaction Rate" },
                { stat: "26 Days", label: "Avg. Reimbursement Time" },
                { stat: "8 Years", label: "Industry Experience" },
              ].map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-2xl p-5 text-center">
                  <p className="text-2xl font-black text-[#5B7B5E]">{s.stat}</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </StaggerGrid>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Request Submitted!</h3>
                  <p className="text-green-100">Our billing experts will reach out within 24 hours with a custom quote for your specialty.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-white text-center">Get a Free Quote</h3>
                  <p className="text-green-200 text-sm text-center">Custom specialty billing analysis — no commitment required</p>
                  <div>
                    <label className="block text-xs font-bold uppercase text-green-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:border-white/50 focus:ring-1 focus:ring-white/30 outline-none transition-all"
                      placeholder="Enter full name"
                      value={leadForm.name}
                      onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-green-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:border-white/50 focus:ring-1 focus:ring-white/30 outline-none transition-all"
                      placeholder="name@practice.com"
                      value={leadForm.email}
                      onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-green-300 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:border-white/50 focus:ring-1 focus:ring-white/30 outline-none transition-all"
                      placeholder="Phone number"
                      value={leadForm.phone}
                      onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-green-300 mb-1">Your Specialty *</label>
                    <select
                      required
                      className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:border-white/50 outline-none transition-all [&>option]:text-gray-900"
                      value={leadForm.specialty}
                      onChange={e => setLeadForm({ ...leadForm, specialty: e.target.value })}
                    >
                      <option value="" disabled>Select your specialty</option>
                      {allSpecialties.map(s => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Other">Other Specialty</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-white text-[#5B7B5E] font-bold py-3.5 rounded-xl hover:bg-green-50 transition-all shadow-lg hover:-translate-y-0.5 mt-2">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
