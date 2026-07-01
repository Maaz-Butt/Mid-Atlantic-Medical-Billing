"use client";
import Link from "next/link";
import { useState } from "react";
import EmojiIcon from "../../../components/EmojiIcon";

const stats = [
  { value: "98%", label: "Clean Claim Rate" },
  { value: "22%", label: "Revenue Increase" },
  { value: "72 hr", label: "Claim Turnaround" },
  { value: "<3%", label: "Denial Rate" }
];

const mainServices = [
  { icon: "🔍", title: "Eligibility Verification", desc: "Real-time insurance checks for routine foot care, DME coverage, orthotic benefits, and surgical procedures prior to the visit." },
  { icon: "📋", title: "Prior Authorization", desc: "Fast approval processing for podiatric surgeries, MRI scans, custom orthoses, and complex wound treatments." },
  { icon: "🏷️", title: "Podiatry-Specific Coding", desc: "Expert CPT/ICD-10 coding for nail debridement, bunionectomies, matrixectomies, tendon injections, and wound care." },
  { icon: "📤", title: "Clean Claim Submission", desc: "Scrubbed and audited claims submitted electronically to Medicare, Medicaid, and commercial insurers with zero delay." },
  { icon: "🔄", title: "Denial Management & Appeals", desc: "Aggressive appeals for Medicare routine care denials, bundling disputes, modifier 25/59 rejections, and medical necessity audits." },
  { icon: "👣", title: "DME & Orthotic Billing", desc: "Accurate billing for custom orthotic inserts (L-codes) and durable medical equipment, adhering strictly to supplier standards." },
];

const valueProps = [
  { icon: "🩹", title: "Routine Foot Care Compliance", desc: "Medicare LCDs are highly specific about routine foot care coverage. We verify secondary diagnosis codes and systemic conditions to ensure compliant billing." },
  { icon: "🦴", title: "Surgical Coding Precision", desc: "Capture maximum value for complex reconstructive foot and ankle surgeries with correct procedure coding and bundling compliance." },
  { icon: "🛡️", title: "Modifier 25 & 59 Mastery", desc: "We correctly apply modifier 25 for separately identifiable E&M services and modifier 59 for distinct procedural services to prevent improper bundling." },
  { icon: "📊", title: "Real-Time Revenue Dashboards", desc: "Monitor your practice's billing performance, outstanding accounts receivable, claim status, and denial rates in real time." },
  { icon: "🤝", title: "Dedicated Podiatry Billing Experts", desc: "Work with account managers who speak your language, understand podiatric terminology, and know the specific commercial payer guidelines." },
  { icon: "🤖", title: "Payer Enrollment & Credentialing", desc: "Fast-track credentialing and payer enrollment with government and private insurers for new podiatrists joining your practice." },
];

const commonCodes = [
  { code: "11721", desc: "Debridement of nail(s) by any method(s); 6 or more nails" },
  { code: "28296", desc: "Correction, hallux valgus (bunionectomy), with sesamoidectomy, with metatarsal osteotomy" },
  { code: "97597", desc: "Debridement, open wound, first 20 sq cm or less" },
  { code: "20550", desc: "Injection(s); single tendon sheath or ligament, aponeurosis" },
  { code: "L3000", desc: "Orthotic insert, removable, molded to patient model, neoprene/rubber, each" },
  { code: "G0127", desc: "Trimming of dystrophic nails, any number" },
];

const faqs = [
  { q: "What podiatry services do you bill for?", a: "We handle billing for all podiatric services including nail debridement, matrixectomies, bunion corrections, hammer toe repairs, wound debridement, skin substitutes, orthotic inserts, joint injections, DME, and E&M office visits." },
  { q: "How do you handle Medicare's strict routine foot care rules?", a: "Medicare only covers routine foot care (nail trimming, debridement) under specific circumstances, such as when the patient has a systemic condition like diabetes, peripheral vascular disease, or chronic venous insufficiency. We carefully review provider documentation, ensure the correct systemic diagnosis codes (and Q-modifiers indicating the last professional visit) are included, and verify that all coverage criteria are met before submission." },
  { q: "Do you bill for custom orthotics and DME?", a: "Yes. We bill for custom orthotic inserts (L3000, L3020, etc.) and other durable medical equipment. We ensure that your practice meets the strict supplier standards, has the necessary proof of delivery, and maintains compliant documentation (including detailed orders and clinical notes) to prevent post-payment audits and recoupments." },
  { q: "How do you prevent denials related to bundling?", a: "Many podiatric procedures (like nail debridement and E&M visits) are frequently bundled by payers. We apply precise modifiers, such as modifier 25 for a significant, separately identifiable evaluation and management service performed on the same day as a procedure, and modifier 59 for distinct procedural services, ensuring you get paid for all the services you perform." }
];

const relatedSpecialties = [
  { name: "Orthopedics", href: "/specialties/orthopedics", icon: "🦴" },
  { name: "Pain Management", href: "/specialties/pain-management", icon: "⚡" },
  { name: "Neurology", href: "/specialties/neurology", icon: "🧠" },
  { name: "Dermatology", href: "/contact-us?specialty=Dermatology", icon: "✨" },
  { name: "Rheumatology", href: "/contact-us?specialty=Rheumatology", icon: "🩺" },
  { name: "OBGYN", href: "/specialties/obgyn", icon: "👶" },
];

export default function PodiatryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-pink-300 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">Podiatry Billing Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Top-Rated Podiatry Medical Billing Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">Mid Atlantic's podiatry billing team manages complex routine foot care guidelines, orthotics & DME claims, surgical coding, and modifier compliance — maximizing your practice collections.</p>
            <ul className="space-y-2 text-white/80 text-sm">
              {["Routine foot care compliance & secondary diagnosis verification","Custom orthotics & DME billing expertise","Precise modifier 25 & 59 usage to prevent bundling denials","Prior authorizations for podiatric surgeries & therapies"].map((item,i)=>(<li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>))}
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
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Handle</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Podiatry Billing Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{mainServices.map((s,i)=>(<div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20"><EmojiIcon emoji={s.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#5B7B5E] transition-colors">{s.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-y border-gray-100"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic Medical Billing</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Podiatry Practices Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{valueProps.map((v,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"><EmojiIcon emoji={v.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-12"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Coding Expertise</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Common Podiatry CPT/HCPCS Codes We Bill</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{commonCodes.map((c,i)=>(<div key={i} className="flex items-start gap-4 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-xl p-5"><span className="bg-[#5B7B5E] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{c.code}</span><p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-t border-gray-100"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2></div><div className="space-y-4">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center px-6 py-5 text-left"><span className="font-semibold text-gray-900 text-sm">{f.q}</span><span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq===i?"rotate-45":""}`}>+</span></button>{openFaq===i&&<div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>}</div>))}</div></div></section>
      <section className="py-16 bg-white"><div className="max-w-[1280px] mx-auto px-4 text-center"><h2 className="text-2xl font-extrabold text-gray-900 mb-8">Explore Other Specialty Billing Services</h2><div className="flex flex-wrap justify-center gap-4">{relatedSpecialties.map((s,i)=>(<Link key={i} href={s.href} className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-[#5B7B5E] hover:text-[#5B7B5E] text-gray-700 font-semibold px-5 py-3 rounded-full transition-all text-sm"><EmojiIcon emoji={s.icon} className="w-4 h-4 text-[#5B7B5E]" />{s.name}</Link>))}<Link href="/specialties" className="flex items-center gap-2 bg-[#5B7B5E] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D5C42] transition-all text-sm">View All Specialties →</Link></div></div></section>
      <section className="py-16 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} /><div className="max-w-3xl mx-auto px-4 space-y-5"><h2 className="text-3xl md:text-4xl font-extrabold">Maximize Your Podiatry Practice Revenue</h2><p className="text-white/80 text-lg">Get a free billing audit and find out where your podiatry practice is losing reimbursement.</p><div className="flex flex-wrap gap-4 justify-center pt-2"><Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Audit →</Link><a href="tel:+18885050582" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">+1 (888) 505-0582</a></div></div></section>
    </div>
  );
}
