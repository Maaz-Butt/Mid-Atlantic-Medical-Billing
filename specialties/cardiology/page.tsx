"use client";
import Link from "next/link";
import { useState } from "react";
import EmojiIcon from "../../../components/EmojiIcon";

const stats = [{ value: "98%", label: "Clean Claim Rate" },{ value: "20%", label: "Revenue Increase" },{ value: "72 hr", label: "Claim Turnaround" },{ value: "<3%", label: "Denial Rate" }];

const mainServices = [
  { icon: "🔍", title: "Eligibility Verification", desc: "Pre-visit insurance checks for cardiac consultations, diagnostic tests, and interventional cardiology procedures." },
  { icon: "📋", title: "Prior Authorization", desc: "Rapid PA for cardiac catheterizations, stress tests, echocardiograms, pacemakers, and ICD implantations." },
  { icon: "🏷️", title: "Cardiology-Specific Coding", desc: "Expert CPT coding for echocardiography, cardiac catheterization, electrophysiology, and cardiovascular surgery." },
  { icon: "📤", title: "Clean Claim Submission", desc: "Scrubbed and verified cardiology claims submitted electronically to all major payers with near-zero errors." },
  { icon: "🔄", title: "Denial Management & Appeals", desc: "Aggressive appeals for cardiac medical necessity denials, bundling disputes, and coverage exclusion rejections." },
  { icon: "💰", title: "TC/PC Component Billing", desc: "Correct technical (TC) and professional (PC) component billing for all cardiovascular diagnostic studies." },
];

const valueProps = [
  { icon: "❤️", title: "Interventional Cardiology Expertise", desc: "We correctly bill for complex interventional procedures including cardiac catheterizations, angioplasty, stent placements, and structural heart procedures." },
  { icon: "📋", title: "Pacemaker & ICD Billing", desc: "Accurate device implantation billing including procedure codes, device codes, and post-implant follow-up service coding." },
  { icon: "🛡️", title: "HIPAA & CMS Compliance", desc: "All cardiology billing follows strict HIPAA, CMS, and commercial payer compliance to keep your practice audit-ready." },
  { icon: "📊", title: "Real-Time Revenue Dashboards", desc: "Live visibility into cardiology procedure revenue, A/R aging, and denial trends across all payers." },
  { icon: "🤝", title: "Dedicated Cardiology Billing Manager", desc: "One expert who understands your cardiology payer contracts, device reimbursement, and prior auth requirements." },
  { icon: "🤖", title: "Credentialing & Payer Enrollment", desc: "We guide new cardiologists through credentialing and payer enrollment to ensure claims flow from day one." },
];

const commonCodes = [
  { code: "93306", desc: "Echocardiography, transthoracic, real-time with image documentation" },
  { code: "93510", desc: "Left heart catheterization" },
  { code: "93458", desc: "Coronary angiography with left heart catheterization" },
  { code: "92928", desc: "Percutaneous transcatheter placement of intracoronary stent" },
  { code: "33206", desc: "Insertion of pacemaker, single chamber" },
  { code: "93000", desc: "Electrocardiogram, routine ECG with interpretation" },
];

const faqs = [
  { q: "What cardiology procedures do you bill for?", a: "We handle billing for echocardiography, cardiac catheterizations, angioplasty and stenting, pacemaker and ICD implantations, electrophysiology studies, stress tests, and all cardiovascular E&M visits." },
  { q: "How do you handle TC/PC billing for cardiology diagnostics?", a: "We correctly apply TC and PC modifiers for all cardiovascular diagnostic studies, ensuring both the technical supervision and professional interpretation components are fully reimbursed." },
  { q: "Do you handle pacemaker and ICD device billing?", a: "Yes — we correctly code device implantations including the procedure code, separate device codes when applicable, and all post-implant follow-up services within and outside the global period." },
  { q: "Do you assist with cardiology credentialing?", a: "Yes — we provide guidance for new cardiologist credentialing and payer enrollment with Medicare, Medicaid, and all major commercial insurers." },
];

const relatedSpecialties = [
  { name: "Nephrology", href: "/specialties/nephrology", icon: "💧" },
  { name: "Oncology", href: "/specialties/oncology", icon: "🎗️" },
  { name: "Neurology", href: "/specialties/neurology", icon: "🧠" },
  { name: "Pain Management", href: "/specialties/pain-management", icon: "⚡" },
  { name: "Gastroenterology", href: "/specialties/gastroenterology", icon: "🫀" },
  { name: "OBGYN", href: "/specialties/obgyn", icon: "👶" },
];

export default function CardiologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-pink-300 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">Cardiology Billing Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Top-Rated Cardiology Medical Billing Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">Mid Atlantic's cardiology billing team handles interventional procedure coding, pacemaker/ICD billing, TC/PC component splitting, and prior authorizations — ensuring your cardiology practice captures full reimbursement.</p>
            <ul className="space-y-2 text-white/80 text-sm">
              {["Interventional & non-invasive cardiac procedure billing","Pacemaker & ICD device coding expertise","TC/PC component billing for cardiac diagnostics","Credentialing & payer enrollment for new cardiologists"].map((item,i)=>(<li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Billing Audit</Link>
              <Link href="/services/medical-billing" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">Our Services</Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">{stats.map((s,i)=>(<div key={i} className="bg-white/10 rounded-2xl p-4 text-center"><div className="text-3xl font-black text-white">{s.value}</div><div className="text-white/60 text-xs mt-1 font-medium">{s.label}</div></div>))}</div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Handle</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Cardiology Billing Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{mainServices.map((s,i)=>(<div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20"><EmojiIcon emoji={s.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#5B7B5E] transition-colors">{s.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-y border-gray-100"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic Medical Billing</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Cardiology Practices Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{valueProps.map((v,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"><EmojiIcon emoji={v.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-12"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Coding Expertise</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Common Cardiology CPT Codes We Bill</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{commonCodes.map((c,i)=>(<div key={i} className="flex items-start gap-4 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-xl p-5"><span className="bg-[#5B7B5E] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{c.code}</span><p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-t border-gray-100"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2></div><div className="space-y-4">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center px-6 py-5 text-left"><span className="font-semibold text-gray-900 text-sm">{f.q}</span><span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq===i?"rotate-45":""}`}>+</span></button>{openFaq===i&&<div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>}</div>))}</div></div></section>
      <section className="py-16 bg-white"><div className="max-w-[1280px] mx-auto px-4 text-center"><h2 className="text-2xl font-extrabold text-gray-900 mb-8">Explore Other Specialty Billing Services</h2><div className="flex flex-wrap justify-center gap-4">{relatedSpecialties.map((s,i)=>(<Link key={i} href={s.href} className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-[#5B7B5E] hover:text-[#5B7B5E] text-gray-700 font-semibold px-5 py-3 rounded-full transition-all text-sm"><EmojiIcon emoji={s.icon} className="w-4 h-4 text-[#5B7B5E]" />{s.name}</Link>))}<Link href="/specialties" className="flex items-center gap-2 bg-[#5B7B5E] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D5C42] transition-all text-sm">View All Specialties →</Link></div></div></section>
      <section className="py-16 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} /><div className="max-w-3xl mx-auto px-4 space-y-5"><h2 className="text-3xl md:text-4xl font-extrabold">Maximize Your Cardiology Practice Revenue</h2><p className="text-white/80 text-lg">Get a free billing audit and find out where your cardiology practice is losing reimbursement.</p><div className="flex flex-wrap gap-4 justify-center pt-2"><Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Audit →</Link><a href="tel:+18885050582" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">+1 (888) 505-0582</a></div></div></section>
    </div>
  );
}
