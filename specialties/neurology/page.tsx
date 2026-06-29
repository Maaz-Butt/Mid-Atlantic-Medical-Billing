"use client";
import Link from "next/link";
import { useState } from "react";
import EmojiIcon from "../../../components/EmojiIcon";

const stats = [
  { value: "98%", label: "Clean Claim Rate" },
  { value: "20%", label: "Revenue Increase" },
  { value: "72 hr", label: "Claim Turnaround" },
  { value: "<3%", label: "Denial Rate" },
];

const mainServices = [
  { icon: "🔍", title: "Eligibility Verification", desc: "Pre-visit coverage checks for neurology consultations, diagnostic tests, and inpatient neurology services." },
  { icon: "📋", title: "Prior Authorization", desc: "Rapid PA for EEG, EMG, nerve conduction studies, MRI/CT, and neuromodulation devices." },
  { icon: "🏷️", title: "Neurology-Specific Coding", desc: "Expert CPT coding for EEG, EMG, nerve blocks, lumbar punctures, and cognitive assessment visits." },
  { icon: "📤", title: "Clean Claim Submission", desc: "Scrubbed and payer-ready claims submitted electronically with near-zero errors." },
  { icon: "🔄", title: "Denial Management & Appeals", desc: "Aggressive appeals for medical necessity denials and timely filing rejections common in neurology." },
  { icon: "💰", title: "Payment Posting & A/R Follow-Up", desc: "Accurate ERA/EOB posting and systematic follow-up on outstanding neurology claims." },
];

const valueProps = [
  { icon: "🧠", title: "Neurology Coding Expertise", desc: "We correctly code EEG interpretations, EMG studies, nerve conduction velocities, and complex neurological E&M visits — codes that require precise documentation linkage." },
  { icon: "📊", title: "Diagnostic Test Billing", desc: "We handle both the technical (TC) and professional (PC) components of neurodiagnostic test billing, ensuring full reimbursement for every study performed." },
  { icon: "🛡️", title: "HIPAA & CMS Compliance", desc: "All neurology billing follows strict HIPAA, CMS, and commercial payer compliance protocols to keep your practice audit-ready." },
  { icon: "📈", title: "Real-Time Revenue Dashboards", desc: "Live visibility into A/R aging, denial trends, and first-pass rates across all your neurology payers." },
  { icon: "🤝", title: "Dedicated Neurology Billing Expert", desc: "One point of contact who understands the nuances of neurology payer rules and proactively resolves billing issues." },
  { icon: "🤖", title: "RPA-Powered Automation", desc: "Automated claim scrubbing eliminates common neurology coding errors before submission." },
];

const commonCodes = [
  { code: "95816", desc: "Electroencephalogram (EEG); awake and drowsy" },
  { code: "95861", desc: "Needle electromyography; 2 extremities" },
  { code: "95907", desc: "Nerve conduction studies; 1-2 studies" },
  { code: "64483", desc: "Injection, anesthetic, transforaminal epidural; lumbar" },
  { code: "62270", desc: "Spinal puncture, lumbar, diagnostic" },
  { code: "99205", desc: "New patient office visit, high medical complexity" },
];

const faqs = [
  { q: "What neurology procedures do you bill for?", a: "We handle billing for EEG, EMG, nerve conduction studies, evoked potentials, lumbar punctures, neurotoxin injections, deep brain stimulation, and all neurological E&M visits." },
  { q: "Do you handle technical and professional component billing?", a: "Yes — we correctly apply TC and PC modifiers and bill both components of neurodiagnostic studies when the neurologist performs both interpretation and supervision." },
  { q: "How do you handle complex neurology E&M coding?", a: "Our certified coders assess medical decision-making complexity based on the number and nature of problems, amount of data reviewed, and risk of complications per CMS E&M guidelines." },
  { q: "What EMR systems do you integrate with?", a: "We integrate with Epic, eClinicalWorks, AdvancedMD, Athenahealth, NextGen, and 50+ other neurology-compatible EMR platforms." },
];

const relatedSpecialties = [
  { name: "Cardiology", href: "/specialties/cardiology", icon: "❤️" },
  { name: "Oncology", href: "/specialties/oncology", icon: "🎗️" },
  { name: "Pain Management", href: "/specialties/pain-management", icon: "⚡" },
  { name: "Nephrology", href: "/specialties/nephrology", icon: "💧" },
  { name: "Orthopedics", href: "/specialties/orthopedics", icon: "🦴" },
  { name: "Gastroenterology", href: "/specialties/gastroenterology", icon: "🫀" },
];

export default function NeurologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-pink-300 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">Neurology Billing Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Expert Neurology Billing Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">Mid Atlantic's neurology billing specialists handle EEG/EMG billing, complex E&M coding, and neurodiagnostic TC/PC components — ensuring your practice captures every billable service with precision.</p>
            <ul className="space-y-2 text-white/80 text-sm">
              {["Expert EEG, EMG & nerve conduction billing","TC/PC component billing for neurodiagnostic studies","Complex neurology E&M and cognitive assessment coding","Rapid PA management for MRI, CT & neuromodulation"].map((item,i)=>(<li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>))}
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
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Handle</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Neurology Billing Services</h2><p className="text-gray-500 max-w-2xl mx-auto">From EEG interpretation to complex neurological E&M, we handle every aspect of neurology billing with specialty-trained coders.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{mainServices.map((s,i)=>(<div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20"><EmojiIcon emoji={s.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#5B7B5E] transition-colors">{s.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-y border-gray-100"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic Medical Billing</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Neurology Practices Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{valueProps.map((v,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"><EmojiIcon emoji={v.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-12"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Coding Expertise</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Common Neurology CPT Codes We Bill</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{commonCodes.map((c,i)=>(<div key={i} className="flex items-start gap-4 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-xl p-5"><span className="bg-[#5B7B5E] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{c.code}</span><p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-t border-gray-100"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2></div><div className="space-y-4">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center px-6 py-5 text-left"><span className="font-semibold text-gray-900 text-sm">{f.q}</span><span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq===i?"rotate-45":""}`}>+</span></button>{openFaq===i&&<div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>}</div>))}</div></div></section>
      <section className="py-16 bg-white"><div className="max-w-[1280px] mx-auto px-4 text-center"><h2 className="text-2xl font-extrabold text-gray-900 mb-8">Explore Other Specialty Billing Services</h2><div className="flex flex-wrap justify-center gap-4">{relatedSpecialties.map((s,i)=>(<Link key={i} href={s.href} className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-[#5B7B5E] hover:text-[#5B7B5E] text-gray-700 font-semibold px-5 py-3 rounded-full transition-all text-sm"><EmojiIcon emoji={s.icon} className="w-4 h-4 text-[#5B7B5E]" />{s.name}</Link>))}<Link href="/specialties" className="flex items-center gap-2 bg-[#5B7B5E] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D5C42] transition-all text-sm">View All Specialties →</Link></div></div></section>
      <section className="py-16 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} /><div className="max-w-3xl mx-auto px-4 space-y-5"><h2 className="text-3xl md:text-4xl font-extrabold">Ready to Boost Your Neurology Revenue?</h2><p className="text-white/80 text-lg">Get a free billing audit and discover where your neurology practice is losing revenue.</p><div className="flex flex-wrap gap-4 justify-center pt-2"><Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Audit →</Link><a href="tel:+18885050582" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">+1 (888) 505-0582</a></div></div></section>
    </div>
  );
}
