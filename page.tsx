"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ActivitySquare, ShieldCheck, BarChart3, Clock, Users, Building2,
  CheckCircle2, ArrowRight, Phone, Star, ChevronRight,
  TrendingUp, FileText, RefreshCw, Search, ClipboardList,
  DollarSign, Award, MapPin, HeartPulse, Brain, Bone,
  Stethoscope, Baby, FlaskConical, Microscope, Smile
} from "lucide-react";

/* ─── HOOKS ─────────────────────────────────────────────── */
function useReveal(threshold = 0.13) {
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
const heroSlides = [
  {
    tag: "Trusted by 500+ Providers",
    heading: "Best Medical Billing Company in USA",
    subheading: "Reduce Denials. Maximize Reimbursements. Grow Revenue by up to 20%.",
    gradient: "from-[#0f1f12] via-[#1e3a22] to-[#3D5C42]",
  },
  {
    tag: "AI-Powered Revenue Cycle",
    heading: "Automate Your Entire RCM with AI Agents",
    subheading: "Our AI agents work 24/7 to ensure zero revenue leakage and maximum collections.",
    gradient: "from-[#0f1f12] via-[#1e3a22] to-[#5B7B5E]",
  },
];

const statsData = [
  { end: 98, suffix: "%", label: "Clean Claim Rate" },
  { end: 20, suffix: "%", label: "Revenue Increase" },
  { end: 500, suffix: "+", label: "Providers Served" },
  { end: 15, suffix: "+", label: "Years Experience" },
];

const services = [
  { Icon: ActivitySquare, title: "Medical Billing Services", desc: "Reduce claim denials and increase overall collections with our expert medical billing specialists.", href: "/services/medical-billing" },
  { Icon: FileText, title: "Medical Coding Services", desc: "Accurate coding and faster reimbursements every day with AAPC-certified coders.", href: "/services/medical-billing" },
  { Icon: RefreshCw, title: "Revenue Cycle Management", desc: "Improve patient care and optimize your entire revenue cycle from front to back.", href: "/services/rcm" },
  { Icon: Search, title: "Medical Billing Audit", desc: "Get a precise billing audit to identify revenue leakage and billing errors.", href: "/services/medical-billing" },
  { Icon: FlaskConical, title: "Laboratory Billing", desc: "Discover our automated laboratory billing solution tailored to your lab's unique needs.", href: "/services/laboratory-billing" },
  { Icon: ShieldCheck, title: "Credentialing Services", desc: "Fast, accurate payer enrollment and credentialing to keep your practice billing without interruption.", href: "/services/credentialing" },
];

const specialties = [
  { name: "Cardiology", Icon: HeartPulse, href: "/specialties/cardiology" },
  { name: "Orthopedics", Icon: Bone, href: "/specialties/orthopedics" },
  { name: "Neurology", Icon: Brain, href: "/specialties/neurology" },
  { name: "Oncology", Icon: Microscope, href: "/specialties/oncology" },
  { name: "Pediatrics", Icon: Baby, href: "/specialties/pediatrics" },
  { name: "OBGYN", Icon: Stethoscope, href: "/specialties/obgyn" },
  { name: "Pain Management", Icon: ActivitySquare, href: "/specialties/pain-management" },
  { name: "Gastroenterology", Icon: ClipboardList, href: "/specialties/gastroenterology" },
  { name: "Nephrology", Icon: RefreshCw, href: "/specialties/nephrology" },
  { name: "Dental", Icon: Smile, href: "/specialties/dental" },
  { name: "ASC", Icon: Building2, href: "/specialties/asc" },
  { name: "View All 40+", Icon: ChevronRight, href: "/specialties" },
];

const whyUs = [
  { Icon: MapPin, title: "State-Specific Billing Knowledge", desc: "Texas Medicaid bills differently from New York Medicaid. Our coders apply state rules for TX, CA, FL, PA, and NY. Your claims clear local payer scrutiny on first submission." },
  { Icon: Users, title: "Dedicated Account Managers", desc: "Your practice gets one account manager who knows your providers, payers, and EMR setup. No ticket queues — your manager answers within 2 hours." },
  { Icon: DollarSign, title: "Transparent Pricing", desc: "We charge 3% to 5% of monthly collections. No setup fees, no hidden charges, no surprise invoices on your finance officer's desk." },
  { Icon: BarChart3, title: "Real-Time Billing Dashboards", desc: "Live first-pass rates, A/R days, denial trends, and collections data available at any hour, any day." },
];

const certs = [
  { Icon: Award, label: "AAPC Certified" },
  { Icon: ShieldCheck, label: "HIPAA Compliant" },
  { Icon: CheckCircle2, label: "SOC-2 Type II" },
  { Icon: FileText, label: "CMS Compliant" },
];

const onboarding = [
  { n: "01", title: "Practice Assessment", desc: "Welcome call from your dedicated account manager. We gather specialty type, EMR requirements, and practitioner details." },
  { n: "02", title: "Onboarding Meeting", desc: "Expert walkthrough of your EHR and billing platforms to build a tailored billing setup for your practice." },
  { n: "03", title: "Establishing Workflow SOPs", desc: "Custom SOPs define every billing workflow step — from charge capture to coding — ensuring consistency across all claims." },
  { n: "04", title: "Coding & Claim Submission", desc: "Certified coders assign precise CPT, ICD, and HCPCS codes. Claims are submitted electronically with clean, verified data." },
  { n: "05", title: "Payment Recording", desc: "Billing operations shift fully to Mid Atlantic Medical Billing. Every dollar from payers and patients is tracked and reconciled." },
  { n: "06", title: "Reports & Follow-Up", desc: "Timely payouts and detailed performance reports for full revenue cycle visibility and continuous billing optimization." },
];

const caseStudies = [
  {
    client: "Innovative Pain Care Center",
    challenge: "IPCC's in-house billing left over $23M sitting in accounts receivable. Late charge submissions, coding errors, and weak credentialing were quietly bleeding the practice.",
    solution: "Mid Atlantic Medical Billing took over end-to-end billing, providing claim audits, denial prevention, and AI agent-driven follow-ups. In 60 days, $3M recovered.",
    quote: "Mid Atlantic Medical Billing gave us back control of our cash flow and the ability to grow. We needed expertise we just didn't have in-house, and they delivered.",
    author: "Dr. Daniel Burkhead",
    role: "CSO, Innovative Pain Care Center",
    stats: [{ label: "AR Recovered (60 days)", value: "$3M" }, { label: "Days in A/R", value: "<35" }, { label: "Collections Boost", value: "+28%" }],
    grad: "from-[#5B7B5E] to-[#3D5C42]",
  },
  {
    client: "Idaho Kidney Institute",
    challenge: "IKI was carrying $300K stuck in the 60+ day bucket, with denials from missing info, self-pay misrouting, and invalid ICD/modifier usage.",
    solution: "We ran targeted appeals, rigorous eligibility verification, and a complete coding clean-up. Within 90 days, the backlog dropped to $100K.",
    quote: "The transformation we've experienced is nothing short of astounding. They didn't just tackle our billing — they educated our team.",
    author: "Dr. Fahim Rahim",
    role: "Idaho Kidney Institute",
    stats: [{ label: "Backlog Cleared", value: "$200K" }, { label: "Turnaround", value: "90 Days" }, { label: "Denial Reduction", value: "-45%" }],
    grad: "from-[#0f1f12] to-[#3D5C42]",
  },
  {
    client: "MD TruCare PA",
    challenge: "MD TruCare's psychiatry practice was losing revenue to late submissions, duplicate payment posting, and coding inefficiencies.",
    solution: "Mid Atlantic Medical Billing deployed RPA across the billing workflow. Bots scrubbed claims, accelerated submissions, and freed staff.",
    quote: "Our clinical performance improved significantly, and our daily operations became 40% more efficient.",
    author: "Dr. Imran S. Khawaja",
    role: "CEO, MD TruCare PA",
    stats: [{ label: "Op. Efficiency", value: "+40%" }, { label: "Collections Growth", value: "+22%" }, { label: "Claim Acceptance", value: "98%" }],
    grad: "from-[#1e3a22] to-[#5B7B5E]",
  },
];

const testimonials = [
  { name: "Dr. Daniel L. Burkhead", role: "Innovative Pain Care Center", text: "After almost 18 months with Mid Atlantic Medical Billing, I'm thrilled with their service. They've made billing easier, sorted out payer issues, and improved our processes." },
  { name: "Julia K. Saenz", role: "Office Administrator, Panda Pediatrics", text: "Mid Atlantic Medical Billing has been outstanding in managing our billing, showing dedication, efficiency, and attention to detail. Their exceptional work has streamlined our processes." },
  { name: "Ashlee Rose", role: "Harding Memorial Healthcare", text: "We've been working with Mid Atlantic Medical Billing for 8 years now and we are satisfied with their services and customer support." },
  { name: "Jackie Judd", role: "Wilson Creek Internal Medicine", text: "As a practice manager, I was looking to streamline the medical billing process. Mid Atlantic Medical Billing helped us do that." },
  { name: "Pat Vaughn", role: "Medcom Health Services", text: "I have been working with Mid Atlantic Medical Billing for the past 7 years. They always go above and beyond, which shows in their work quality." },
];

const blogPosts = [
  { title: "15 Top Medical Billing Companies in USA 2026", date: "March 23, 2026", desc: "Find the best medical billing service providers in the USA and improve your RCM.", tag: "Industry", href: "#" },
  { title: "Medical Billing Process For Healthcare Providers", date: "April 7, 2026", desc: "A complete guide to medical billing — definition, process, types, challenges, and best practices.", tag: "Guide", href: "#" },
  { title: "RCM in Medical Billing: Definition, Steps, Benefits", date: "April 20, 2026", desc: "Learn about Revenue Cycle Management, key benefits, and common billing mistakes practices make.", tag: "RCM", href: "#" },
];

/* ─── SUBCOMPONENTS ─────────────────────────────────────── */
function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-white">
        <span ref={ref as React.RefObject<HTMLDivElement>}>{value}</span>{suffix}
      </div>
      <div className="text-sm text-white/80 mt-1 font-medium">{label}</div>
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

/* ─── PAGE ──────────────────────────────────────────────── */
export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const [activeTesti, setActiveTesti] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", specialty: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => setSlide(p => (p + 1) % heroSlides.length), 5500);
    return () => clearInterval(iv);
  }, []);

  const cur = heroSlides[slide];

  return (
    <div className="overflow-x-hidden">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <section className={`relative min-h-[90vh] bg-gradient-to-br ${cur.gradient} transition-all duration-1000 flex items-center overflow-hidden`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute inset-0 opacity-[0.18] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-14 relative z-10">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {cur.tag}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">{cur.heading}</h1>
            <p className="text-lg text-white/75 max-w-xl mb-6 leading-relaxed">{cur.subheading}</p>
            <ul className="space-y-2 mb-8 text-white/80 text-sm">
              {["Specialty-specific billing for cardiology, nephrology, and beyond","99% claim accuracy with 24/7 support","Transparent pricing that scales with your practice"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-white text-[#5B7B5E] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-0.5 text-base">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/medical-billing" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-base">
                Our Services
              </Link>
            </div>
          </div>

          {/* Lead form */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-sm w-full shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Submitted!</h3>
                  <p className="text-white/70 text-sm">Our billing experts will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <h3 className="text-white font-bold text-xl mb-4">Get a Free Revenue Audit</h3>
                  {[["text","Your Full Name","name"],["email","Email Address","email"],["tel","Phone Number","phone"]].map(([type, ph, key]) => (
                    <input key={key} type={type} required placeholder={ph} value={form[key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      className="w-full bg-white/15 text-white placeholder-white/50 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/60 transition-colors" />
                  ))}
                  <select required value={form.specialty} onChange={e => setForm({ ...form, specialty: e.target.value })}
                    className="w-full bg-white/15 text-white/70 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/60 transition-colors [&>option]:text-gray-900">
                    <option value="">Select Specialty</option>
                    {["Cardiology","Orthopedics","Neurology","Oncology","Pediatrics","OBGYN","Pain Management","Gastroenterology","Nephrology","Dental","ASC"].map(s => <option key={s}>{s}</option>)}
                  </select>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] hover:opacity-90 text-white font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
                    Get Free Audit Now
                  </button>
                  <p className="text-white/50 text-xs text-center">No credit card required. 100% Free.</p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-2 bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* ═══ STATS BAR ══════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] py-10">
        <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map(s => <AnimatedStat key={s.label} {...s} />)}
        </div>
      </section>

      {/* ═══ SERVICES ═══════════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url('/images/billing_finance_bg.png')` }} />
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Offer</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Our Medical Billing Services</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Comprehensive revenue cycle solutions designed to maximize your practice's financial performance.</p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, desc, href }) => (
              <Link key={title} href={href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20">
                <div className="w-14 h-14 bg-[#5B7B5E]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#5B7B5E]/20 transition-colors group-hover:scale-110 transform">
                  <Icon className="w-7 h-7 text-[#5B7B5E]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5B7B5E] transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#5B7B5E] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </StaggerGrid>
          <div className="text-center mt-10">
            <Link href="/services/medical-billing" className="inline-flex items-center gap-2 border-2 border-[#5B7B5E] text-[#5B7B5E] font-semibold px-8 py-3 rounded-full hover:bg-[#5B7B5E] hover:text-white transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SPECIALTIES ════════════════════════════════════ */}
      <section className="py-20 bg-[#F4F8F4] border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Specialties We Serve</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Medical Billing for All Specialties</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">From primary care to complex sub-specialties, our certified billers have deep expertise across all medical fields.</p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {specialties.map(({ name, Icon, href }) => (
              <Link key={name} href={href} className="group flex flex-col items-center justify-center p-5 bg-white hover:bg-gradient-to-br hover:from-[#5B7B5E] hover:to-[#3D5C42] rounded-2xl text-center transition-all duration-300 border border-gray-100 hover:border-transparent hover:shadow-lg hover:-translate-y-1">
                <Icon className="w-8 h-8 text-[#5B7B5E] group-hover:text-white mb-2 transition-colors" />
                <span className="text-xs font-semibold text-gray-700 group-hover:text-white transition-colors">{name}</span>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ══════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Should Your Practice Choose Mid Atlantic Medical Billing?</h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">Most medical billing companies sell the same generic playbook. Mid Atlantic Medical Billing runs your revenue cycle with AI RCM agents and AAPC-certified coders.</p>
            </div>
          </Section>
          <StaggerGrid className="grid md:grid-cols-2 gap-8 mb-14">
            {whyUs.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-7 bg-[#F4F8F4] border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#5B7B5E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-[#5B7B5E]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </StaggerGrid>

          {/* Certifications */}
          <Section>
            <div className="bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] rounded-3xl p-10 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Our Certifications</h3>
              <p className="text-white/70 text-sm mb-8">Compliance isn't a checkbox — it's built into everything we do.</p>
              <div className="flex flex-wrap justify-center gap-6">
                {certs.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-white/15 border border-white/20 px-6 py-3 rounded-full">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-xl">
                  Get Help from Experts <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ═══ ONBOARDING JOURNEY ═════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} />
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-green-300 uppercase tracking-widest">How It Works</span>
              <h2 className="text-4xl font-extrabold text-white mt-2 mb-4">How Mid Atlantic Gets You from Sign-Up to Full Revenue Capture</h2>
              <p className="text-white/60 text-lg max-w-3xl mx-auto">Our structured process ensures a smooth transition and a billing workflow built entirely around your practice.</p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onboarding.map(({ n, title, desc }) => (
              <div key={n} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] flex items-center justify-center text-white font-extrabold text-lg mb-5 shadow-lg">{n}</div>
                <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Real Results</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Measurable Impact Across Every Specialty</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">From independent practices to multi-provider groups, we've helped providers reduce billing delays and increase collections.</p>
            </div>
          </Section>
          <div className="flex gap-3 justify-center mb-10 flex-wrap">
            {caseStudies.map((c, i) => (
              <button key={i} onClick={() => setActiveCase(i)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCase === i ? "bg-[#5B7B5E] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{c.client}</button>
            ))}
          </div>
          {caseStudies.map((c, i) => (
            <div key={i} className={`${activeCase === i ? "block" : "hidden"}`}>
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6"><h4 className="font-bold text-red-700 text-sm uppercase tracking-wider mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> The Challenge</h4><p className="text-gray-700 text-sm leading-relaxed">{c.challenge}</p></div>
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-6"><h4 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> The Solution</h4><p className="text-gray-700 text-sm leading-relaxed">{c.solution}</p></div>
                  </div>
                  <blockquote className="border-l-4 border-[#5B7B5E] pl-5">
                    <p className="text-gray-600 italic text-base leading-relaxed">"{c.quote}"</p>
                    <footer className="mt-3"><span className="font-bold text-gray-900 text-sm">{c.author}</span><span className="text-gray-500 text-sm"> — {c.role}</span></footer>
                  </blockquote>
                </div>
                <div className="lg:col-span-5">
                  <div className={`bg-gradient-to-br ${c.grad} rounded-3xl p-8 text-white space-y-6`}>
                    <h3 className="text-xl font-bold">Key Achievements</h3>
                    {c.stats.map((st, j) => (
                      <div key={j} className="bg-white/15 rounded-xl p-5 text-center"><div className="text-3xl font-black">{st.value}</div><div className="text-white/70 text-xs font-semibold uppercase tracking-wider mt-1">{st.label}</div></div>
                    ))}
                    <Link href="#" className="block text-center bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-100 transition-all">Read the Case Study →</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══════════════════════════════════ */}
      <section className="py-20 bg-[#F4F8F4] border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Client Reviews</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">What Providers Say About Mid Atlantic Medical Billing</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">See how practices across the United States have cut claim denials and captured full reimbursement.</p>
            </div>
          </Section>
          <div className="bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] rounded-3xl p-10 text-white mb-8 relative overflow-hidden">
            <span className="text-8xl text-white/10 absolute top-4 right-8 font-serif leading-none">"</span>
            <div className="max-w-3xl">
              <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />)}</div>
              <p className="text-xl leading-relaxed text-white/90 mb-6 italic">"{testimonials[activeTesti].text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">{testimonials[activeTesti].name.charAt(0)}</div>
                <div><div className="font-bold text-white">{testimonials[activeTesti].name}</div><div className="text-white/70 text-sm">{testimonials[activeTesti].role}</div></div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center mb-10">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTesti(i)} className={`h-2.5 rounded-full transition-all ${activeTesti === i ? "w-8 bg-[#5B7B5E]" : "w-2.5 bg-gray-300"}`} />
            ))}
          </div>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <button key={i} onClick={() => setActiveTesti(i)} className={`text-left bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all ${activeTesti === i ? "border-[#5B7B5E] ring-1 ring-[#5B7B5E]/20" : "border-gray-100"}`}>
                <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-gray-600 text-xs leading-relaxed italic mb-4 line-clamp-3">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] flex items-center justify-center text-white font-bold text-xs">{t.name.charAt(0)}</div>
                  <div><div className="font-semibold text-gray-900 text-xs">{t.name}</div><div className="text-gray-400 text-[10px]">{t.role}</div></div>
                </div>
              </button>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══ BLOG ════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Mid Atlantic Blog</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Latest Healthcare Industry Insights</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Explore the latest healthcare industry insights to enhance practice performance and profitability.</p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.href} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`h-44 bg-gradient-to-br ${i === 0 ? "from-[#5B7B5E] to-[#3D5C42]" : i === 1 ? "from-[#0f1f12] to-[#3D5C42]" : "from-[#1e3a22] to-[#5B7B5E]"} flex items-center justify-center relative overflow-hidden`}>
                  {i === 0 ? <Building2 className="w-16 h-16 text-white/20" /> : i === 1 ? <FileText className="w-16 h-16 text-white/20" /> : <RefreshCw className="w-16 h-16 text-white/20" />}
                  <span className="absolute top-4 left-4 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">{post.tag}</span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs text-gray-400 font-medium">{post.date}</p>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-[#5B7B5E] transition-colors leading-snug">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.desc}</p>
                  <div className="flex items-center gap-1 text-[#5B7B5E] text-sm font-semibold pt-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══ CTA BANNER ═════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <Section>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Ready to Increase Your Revenue?</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Join 500+ healthcare providers who trust Mid Atlantic Medical Billing to maximize their collections.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-white text-[#5B7B5E] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl text-base hover:-translate-y-0.5">
                Get Free Audit Today <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+18885050582" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all text-base">
                <Phone className="w-4 h-4" /> +1 (888) 505-0582
              </a>
            </div>
          </Section>
        </div>
      </section>

    </div>
  );
}
