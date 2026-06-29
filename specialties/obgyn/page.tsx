"use client";
import Link from "next/link";
import { useState } from "react";
import EmojiIcon from "../../../components/EmojiIcon";

const stats = [{ value: "98%", label: "Clean Claim Rate" },{ value: "20%", label: "Revenue Increase" },{ value: "72 hr", label: "Claim Turnaround" },{ value: "<3%", label: "Denial Rate" }];

const mainServices = [
  { icon: "🔍", title: "Eligibility Verification", desc: "Pre-visit coverage checks for obstetric care, gynecological surgeries, and global maternity packages." },
  { icon: "📋", title: "Prior Authorization", desc: "Rapid PA for C-sections, laparoscopies, hysterectomies, and advanced gynecological procedures." },
  { icon: "🏷️", title: "OB/GYN CPT & ICD-10 Coding", desc: "Expert coding for global obstetric packages, prenatal visits, deliveries, postpartum care, and GYN surgeries." },
  { icon: "📤", title: "Clean Claim Submission", desc: "Correctly bundled OB global package claims and separate GYN procedure claims submitted electronically." },
  { icon: "🔄", title: "Global OB Package Billing", desc: "Accurate global maternity billing including antepartum, delivery, and postpartum care bundle management." },
  { icon: "💰", title: "Denial Management & A/R", desc: "Targeted appeals for OB unbundling denials, payer global period disputes, and GYN surgery coverage rejections." },
];

const valueProps = [
  { icon: "👶", title: "Global OB Package Expertise", desc: "We correctly manage the global obstetric billing package — tracking antepartum visit counts, co-management splits, and postpartum billing for each patient to ensure accurate reimbursement." },
  { icon: "🏥", title: "GYN Surgical Coding", desc: "We accurately code hysterectomies, laparoscopies, LEEP procedures, and endometrial ablations with correct diagnosis coding and modifier usage." },
  { icon: "🛡️", title: "HIPAA, Medicare & Medicaid Compliance", desc: "All OB/GYN billing follows strict HIPAA, Medicare, and state Medicaid compliance protocols including NCCI edits for GYN procedures." },
  { icon: "📊", title: "Real-Time Revenue Dashboards", desc: "Live OB/GYN-specific financial dashboards tracking delivery volume, payer mix, and A/R performance." },
  { icon: "🤝", title: "Dedicated OB/GYN Billing Manager", desc: "One expert who understands global OB package rules, GYN payer requirements, and your patient population." },
  { icon: "🤖", title: "Automated OB Global Package Tracking", desc: "Automated tracking of global OB package components prevents under-billing and ensures complete postpartum follow-up capture." },
];

const commonCodes = [
  { code: "59400", desc: "Global obstetric care including antepartum, vaginal delivery & postpartum" },
  { code: "59510", desc: "Routine obstetric care including antepartum, cesarean delivery & postpartum" },
  { code: "58150", desc: "Total abdominal hysterectomy" },
  { code: "58661", desc: "Laparoscopy with removal of adnexal structures" },
  { code: "57522", desc: "Conization of cervix with LEEP" },
  { code: "59025", desc: "Fetal non-stress test, with interpretation and report" },
];

const faqs = [
  { q: "How do you handle global OB package billing?", a: "We track each patient's global obstetric package components — counting antepartum visits, recording the delivery type, and capturing postpartum visits — ensuring the global package is billed correctly to each payer." },
  { q: "Do you bill for co-managed obstetric cases?", a: "Yes — we correctly split the global OB package between the delivering physician and co-managing providers, applying appropriate CPT codes for each party's contribution to the patient's care." },
  { q: "What GYN surgical procedures do you bill for?", a: "We handle billing for hysterectomies, laparoscopies, myomectomies, LEEP procedures, endometrial ablations, oophorectomies, tubal ligations, and all other GYN surgical procedures." },
  { q: "How do you handle OB unbundling denials?", a: "We identify which antepartum services were incorrectly bundled by payers, document the clinical basis for separate billing, and file targeted appeals with supporting clinical documentation." },
];

const relatedSpecialties = [
  { name: "Pediatrics", href: "/specialties/pediatrics", icon: "🍼" },
  { name: "Cardiology", href: "/specialties/cardiology", icon: "❤️" },
  { name: "Oncology", href: "/specialties/oncology", icon: "🎗️" },
  { name: "Gastroenterology", href: "/specialties/gastroenterology", icon: "🫀" },
  { name: "Nephrology", href: "/specialties/nephrology", icon: "💧" },
  { name: "Pain Management", href: "/specialties/pain-management", icon: "⚡" },
];

export default function OBGYNPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-pink-300 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">OB/GYN Billing Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Top Obstetrics and Gynecology (OB/GYN) Billing Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">Mid Atlantic's OB/GYN billing specialists handle global maternity packages, GYN surgical coding, credentialing, and prior authorizations — ensuring your practice captures complete reimbursement for every obstetric and gynecological service.</p>
            <ul className="space-y-2 text-white/80 text-sm">
              {["Global OB package & co-management billing experts","Accurate CPT/ICD-10 coding for GYN surgeries","Rapid PA for C-sections, laparoscopies & hysterectomies","100% compliance with Medicare, NCCI & Medicaid rules"].map((item,i)=>(<li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>))}
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
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Handle</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">OB/GYN Billing Services</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{mainServices.map((s,i)=>(<div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20"><EmojiIcon emoji={s.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#5B7B5E] transition-colors">{s.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-y border-gray-100"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic Medical Billing</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why OB/GYN Practices Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{valueProps.map((v,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"><EmojiIcon emoji={v.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-12"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Coding Expertise</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Common OB/GYN CPT Codes We Bill</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{commonCodes.map((c,i)=>(<div key={i} className="flex items-start gap-4 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-xl p-5"><span className="bg-[#5B7B5E] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{c.code}</span><p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-t border-gray-100"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2></div><div className="space-y-4">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center px-6 py-5 text-left"><span className="font-semibold text-gray-900 text-sm">{f.q}</span><span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq===i?"rotate-45":""}`}>+</span></button>{openFaq===i&&<div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>}</div>))}</div></div></section>
      <section className="py-16 bg-white"><div className="max-w-[1280px] mx-auto px-4 text-center"><h2 className="text-2xl font-extrabold text-gray-900 mb-8">Explore Other Specialty Billing Services</h2><div className="flex flex-wrap justify-center gap-4">{relatedSpecialties.map((s,i)=>(<Link key={i} href={s.href} className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-[#5B7B5E] hover:text-[#5B7B5E] text-gray-700 font-semibold px-5 py-3 rounded-full transition-all text-sm"><EmojiIcon emoji={s.icon} className="w-4 h-4 text-[#5B7B5E]" />{s.name}</Link>))}<Link href="/specialties" className="flex items-center gap-2 bg-[#5B7B5E] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D5C42] transition-all text-sm">View All Specialties →</Link></div></div></section>
      <section className="py-16 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} /><div className="max-w-3xl mx-auto px-4 space-y-5"><h2 className="text-3xl md:text-4xl font-extrabold">Maximize Your OB/GYN Practice Revenue</h2><p className="text-white/80 text-lg">Get a free billing audit and discover how much your OB/GYN practice could recover.</p><div className="flex flex-wrap gap-4 justify-center pt-2"><Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Audit →</Link><a href="tel:+18885050582" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">+1 (888) 505-0582</a></div></div></section>
    </div>
  );
}
