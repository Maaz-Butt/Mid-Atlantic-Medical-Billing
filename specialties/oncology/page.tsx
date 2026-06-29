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
  { icon: "🔍", title: "Eligibility Verification", desc: "Pre-treatment insurance checks for chemotherapy, immunotherapy, and radiation therapy services." },
  { icon: "📋", title: "Prior Authorization", desc: "Rapid PA submission for high-cost oncology drugs, infusions, PET scans, and surgical oncology procedures." },
  { icon: "🏷️", title: "Oncology Drug & Infusion Coding", desc: "Expert HCPCS J-code billing for chemotherapy drugs, immunotherapy agents, and supportive care medications." },
  { icon: "📤", title: "Clean Claim Submission", desc: "Scrubbed and payer-ready oncology claims submitted electronically to all major payers." },
  { icon: "🔄", title: "Denial Management & Appeals", desc: "Aggressive appeals for medical necessity, coverage, and formulary-related oncology claim denials." },
  { icon: "💰", title: "340B Drug Program Billing", desc: "Proper billing for drugs acquired under the 340B program with correct modifiers and compliance." },
];

const valueProps = [
  { icon: "🎗️", title: "Oncology Drug Billing Expertise", desc: "We correctly apply HCPCS J-codes, NDC numbers, and dosage-based billing for all chemotherapy, immunotherapy, and supportive care drugs." },
  { icon: "💊", title: "Infusion Suite Billing", desc: "We handle the complex billing hierarchy for infusion services — primary drug, sequential drugs, concurrent drugs, and hydration — to maximize reimbursement." },
  { icon: "🛡️", title: "340B Compliance", desc: "Our team navigates 340B program billing rules, correct modifier usage, and payer-specific 340B policies to keep your program compliant." },
  { icon: "📊", title: "Real-Time Revenue Dashboards", desc: "Live visibility into oncology drug utilization costs, reimbursement rates, and A/R performance." },
  { icon: "🤝", title: "Dedicated Oncology Billing Manager", desc: "One expert who understands your oncology payer contracts, drug formularies, and prior auth requirements." },
  { icon: "🤖", title: "RPA-Powered Automation", desc: "Automated claim scrubbing reduces oncology billing errors related to NDC numbers, dosage calculations, and modifier usage." },
];

const commonCodes = [
  { code: "J9999", desc: "Not otherwise classified antineoplastic drug" },
  { code: "96413", desc: "Chemotherapy administration; infusion technique, up to 1 hour" },
  { code: "96415", desc: "Chemotherapy administration; infusion technique, each additional hour" },
  { code: "G0463", desc: "Hospital outpatient clinic visit, oncology assessment" },
  { code: "77301", desc: "Intensity modulated radiotherapy planning" },
  { code: "96360", desc: "Intravenous infusion, hydration; initial, 31 minutes to 1 hour" },
];

const faqs = [
  { q: "What oncology services do you bill for?", a: "We bill for chemotherapy administration, immunotherapy infusions, radiation therapy, surgical oncology, PET/CT imaging, bone marrow procedures, and all supportive care services." },
  { q: "How do you handle drug J-code billing?", a: "Our billers correctly apply HCPCS J-codes with accurate NDC numbers, dosage-based units, and proper 340B or non-340B modifiers for every oncology drug administered." },
  { q: "Do you handle infusion hierarchy billing?", a: "Yes — we correctly sequence primary, sequential, and concurrent drug infusion billing per CMS hierarchy rules to ensure maximum reimbursement for every infusion visit." },
  { q: "Can you handle both hospital outpatient and office-based oncology billing?", a: "Yes — we handle billing for community oncology practices, hospital outpatient departments, and cancer centers with both professional and facility fee components." },
];

const relatedSpecialties = [
  { name: "Nephrology", href: "/specialties/nephrology", icon: "💧" },
  { name: "Cardiology", href: "/specialties/cardiology", icon: "❤️" },
  { name: "Neurology", href: "/specialties/neurology", icon: "🧠" },
  { name: "Gastroenterology", href: "/specialties/gastroenterology", icon: "🫀" },
  { name: "Pain Management", href: "/specialties/pain-management", icon: "⚡" },
  { name: "OBGYN", href: "/specialties/obgyn", icon: "👶" },
];

export default function OncologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="relative bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/medical_hero_bg.png')` }} />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-pink-300 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-white/20">Oncology Billing Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Expert Oncology Billing Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">Mid Atlantic's oncology billing team handles chemotherapy drug billing, infusion hierarchy coding, prior authorizations, and 340B compliance — ensuring your cancer center captures every billable dollar.</p>
            <ul className="space-y-2 text-white/80 text-sm">
              {["HCPCS J-code drug billing with NDC accuracy","Infusion hierarchy & concurrent drug billing","340B program compliance & modifier management","Rapid PA for high-cost oncology drugs & PET scans"].map((item,i)=>(<li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{item}</li>))}
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
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What We Handle</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Oncology Billing Services</h2><p className="text-gray-500 max-w-2xl mx-auto">From chemotherapy drug coding to radiation therapy billing, our oncology billing specialists handle every component of your cancer center's revenue cycle.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{mainServices.map((s,i)=>(<div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#5B7B5E]/20"><EmojiIcon emoji={s.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#5B7B5E] transition-colors">{s.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-y border-gray-100"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-14"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Why Mid Atlantic Medical Billing</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Why Oncology Practices Choose Us</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{valueProps.map((v,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"><EmojiIcon emoji={v.icon} className="w-8 h-8 text-[#5B7B5E] mb-4" /><h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-white"><div className="max-w-[1280px] mx-auto px-4"><div className="text-center mb-12"><span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Coding Expertise</span><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Common Oncology CPT/HCPCS Codes We Bill</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{commonCodes.map((c,i)=>(<div key={i} className="flex items-start gap-4 bg-gradient-to-br from-[#5B7B5E]/5 to-[#3D5C42]/5 border border-green-100 rounded-xl p-5"><span className="bg-[#5B7B5E] text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">{c.code}</span><p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p></div>))}</div></div></section>
      <section className="py-20 bg-gray-50 border-t border-gray-100"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2></div><div className="space-y-4">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center px-6 py-5 text-left"><span className="font-semibold text-gray-900 text-sm">{f.q}</span><span className={`text-[#5B7B5E] font-bold text-xl transition-transform ${openFaq===i?"rotate-45":""}`}>+</span></button>{openFaq===i&&<div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>}</div>))}</div></div></section>
      <section className="py-16 bg-white"><div className="max-w-[1280px] mx-auto px-4 text-center"><h2 className="text-2xl font-extrabold text-gray-900 mb-8">Explore Other Specialty Billing Services</h2><div className="flex flex-wrap justify-center gap-4">{relatedSpecialties.map((s,i)=>(<Link key={i} href={s.href} className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-[#5B7B5E] hover:text-[#5B7B5E] text-gray-700 font-semibold px-5 py-3 rounded-full transition-all text-sm"><EmojiIcon emoji={s.icon} className="w-4 h-4 text-[#5B7B5E]" />{s.name}</Link>))}<Link href="/specialties" className="flex items-center gap-2 bg-[#5B7B5E] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#3D5C42] transition-all text-sm">View All Specialties →</Link></div></div></section>
      <section className="py-16 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-cover bg-center mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('/images/doctor_office_bg.png')` }} /><div className="max-w-3xl mx-auto px-4 space-y-5"><h2 className="text-3xl md:text-4xl font-extrabold">Maximize Your Oncology Practice Revenue</h2><p className="text-white/80 text-lg">Get a free billing audit and uncover hidden revenue in your oncology billing cycle.</p><div className="flex flex-wrap gap-4 justify-center pt-2"><Link href="/contact-us" className="bg-white text-[#5B7B5E] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg">Get Free Audit →</Link><a href="tel:+18885050582" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">+1 (888) 505-0582</a></div></div></section>
    </div>
  );
}
