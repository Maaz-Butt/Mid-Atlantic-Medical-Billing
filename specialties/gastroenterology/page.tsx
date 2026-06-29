"use client";
import Link from "next/link";
import { useState } from "react";
import EmojiIcon from "../../../components/EmojiIcon";

const stats = [{ value: "98%", label: "Clean Claim Rate" },{ value: "20%", label: "Revenue Increase" },{ value: "72 hr", label: "Claim Turnaround" },{ value: "<3%", label: "Denial Rate" }];

const mainServices = [
  { icon: "🔍", title: "Eligibility Verification", desc: "Pre-procedure coverage checks for endoscopy, colonoscopy, and GI consultations." },
  { icon: "📋", title: "Prior Authorization", desc: "Rapid PA management for colonoscopies, upper GI endoscopy, capsule endoscopy, and GI surgery." },
  { icon: "🏷️", title: "GI Procedure Coding", desc: "Expert CPT coding for EGD, colonoscopy, ERCP, flexible sigmoidoscopy, and liver biopsies with correct bundling." },
  { icon: "📤", title: "Clean Claim Submission", desc: "Correctly bundled and scrubbed GI claims submitted to all major commercial and government payers." },
  { icon: "🔄", title: "Denial Management & Appeals", desc: "Targeted appeals for GI bundling denials, screening vs. diagnostic colonoscopy disputes, and medical necessity rejections." },
  { icon: "💰", title: "Payment Posting & A/R", desc: "Accurate payment posting and systematic A/R follow-up for all gastroenterology claims." },
];

const valueProps = [
  { icon: "🫀", title: "GI Bundling Compliance", desc: "We correctly apply colonoscopy bundling rules, snare polypectomy upgrades, and biopsy add-on coding to prevent costly bundling denials." },
  { icon: "📋", title: "Screening vs. Diagnostic Coding", desc: "We correctly distinguish screening from diagnostic colonoscopy billing, applying the right diagnosis codes to maximize patient benefits." },
  { icon: "🛡️", title: "HIPAA & CMS Compliance", desc: "All gastroenterology billing follows strict HIPAA, CMS, and NCCI compliance to keep your practice audit-ready." },
  { icon: "📊", title: "Real-Time Revenue Dashboards", desc: "Live visibility into GI procedure volumes, payer mix, denial trends, and A/R aging." },
  { icon: "🤝", title: "Dedicated GI Billing Expert", desc: "One point of contact who understands the intricacies of GI payer rules and bundling edits." },
  { icon: "🤖", title: "NCCI Edit Prevention", desc: "Automated claim scrubbing catches NCCI bundling errors before submission to prevent preventable denials." },
];

const commonCodes = [
  { code: "45378", desc: "Colonoscopy, flexible; diagnostic" },
  { code: "45380", desc: "Colonoscopy with biopsy, single or multiple" },
  { code: "43239", desc: "Upper GI endoscopy with ablation" },
  { code: "43264", desc: "ERCP with removal of calculi/debris" },
  { code: "47000", desc: "Biopsy of liver, needle; percutaneous" },
  { code: "45385", desc: "Colonoscopy with removal of tumor by snare technique" },
];

const faqs = [
  { q: "What GI procedures do you bill for?", a: "We bill for colonoscopy, EGD, ERCP, capsule endoscopy, flexible sigmoidoscopy, esophageal dilation, liver biopsies, and all GI surgical procedures." },
  { q: "How do you handle screening vs. diagnostic colonoscopy billing?", a: "We correctly apply ICD-10 codes and CPT modifiers to distinguish screening colonoscopies from diagnostic ones, maximizing patient insurance benefits and preventing billing disputes." },
  { q: "How do you prevent GI bundling denials?", a: "Our billers know NCCI edits for GI procedures inside and out — correctly applying add-on codes, separate procedure modifiers, and upgrade billing when a screening becomes diagnostic mid-procedure." },
  { q: "What EMR systems do you work with for gastroenterology?", a: "We integrate with gGastro, Epic, eClinicalWorks, Athenahealth, AdvancedMD, and all major GI-specific EHR platforms." },
];

const relatedSpecialties = [
  { name: "Oncology", href: "/specialties/oncology", icon: "🎗️" },
  { name: "Nephrology", href: "/specialties/nephrology", icon: "💧" },
  { name: "Pain Management", href: "/specialties/pain-management", icon: "⚡" },
  { name: "Neurology", href: "/specialties/neurology", icon: "🧠" },
  { name: "Cardiology", href: "/specialties/cardiology", icon: "❤️" },
  { name: "OBGYN", href: "/specialties/obgyn", icon: "👶" },
];

export default function GastroenterologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-pink-300 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">Gastroenterology Billing Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Expert Gastroenterology Billing Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">Mid Atlantic's GI billing specialists handle colonoscopy bundling rules, screening vs. diagnostic coding, ERCP billing, and NCCI edit compliance — so your GI practice captures maximum reimbursement.</p>
            <ul className="space-y-2 text-white/80 text-sm">
              {["GI bundling & NCCI edit compliance experts","Screening vs. diagnostic colonoscopy billing accuracy","ERCP, capsule endoscopy & advanced GI procedure coding","Rapid PA management for GI surgical procedures"].map((item,i)=>(<li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>))}
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
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Handle</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Gastroenterology Billing Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{mainServices.map((s,i)=>(<div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20"><EmojiIcon emoji={s.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#5B7B5E] transition-colors">{s.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-y border-gray-100"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic Medical Billing</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why GI Practices Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{valueProps.map((v,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"><EmojiIcon emoji={v.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-12"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Coding Expertise</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Common GI CPT Codes We Bill</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{commonCodes.map((c,i)=>(<div key={i} className="flex items-start gap-4 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-xl p-5"><span className="bg-[#5B7B5E] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{c.code}</span><p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-t border-gray-100"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2></div><div className="space-y-4">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center px-6 py-5 text-left"><span className="font-semibold text-gray-900 text-sm">{f.q}</span><span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq===i?"rotate-45":""}`}>+</span></button>{openFaq===i&&<div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>}</div>))}</div></div></section>
      <section className="py-16 bg-white"><div className="max-w-[1280px] mx-auto px-4 text-center"><h2 className="text-2xl font-extrabold text-gray-900 mb-8">Explore Other Specialty Billing Services</h2><div className="flex flex-wrap justify-center gap-4">{relatedSpecialties.map((s,i)=>(<Link key={i} href={s.href} className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-[#5B7B5E] hover:text-[#5B7B5E] text-gray-700 font-semibold px-5 py-3 rounded-full transition-all text-sm"><EmojiIcon emoji={s.icon} className="w-4 h-4 text-[#5B7B5E]" />{s.name}</Link>))}<Link href="/specialties" className="flex items-center gap-2 bg-[#5B7B5E] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D5C42] transition-all text-sm">View All Specialties →</Link></div></div></section>
      <section className="py-16 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} /><div className="max-w-3xl mx-auto px-4 space-y-5"><h2 className="text-3xl md:text-4xl font-extrabold">Boost Your GI Practice Revenue Today</h2><p className="text-white/80 text-lg">Get a free billing audit and discover how much your gastroenterology practice could recover.</p><div className="flex flex-wrap gap-4 justify-center pt-2"><Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Audit →</Link><a href="tel:+18885050582" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">+1 (888) 505-0582</a></div></div></section>
    </div>
  );
}
