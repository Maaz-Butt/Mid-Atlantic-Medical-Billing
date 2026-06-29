"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Target, Handshake, ShieldCheck, Zap, Heart, TrendingUp,
  Award, Clock, CheckCircle2, Shield, Eye, Flame, Star, ArrowRight
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

/* ─── SUBCOMPONENTS ─────────────────────────────────────── */
function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
      <span className="text-3xl font-extrabold text-[#5B7B5E]" ref={ref as React.RefObject<HTMLSpanElement>}>{value}</span>
      <span className="text-3xl font-extrabold text-[#5B7B5E] -ml-2">{suffix}</span>
      <span className="text-sm text-gray-500 font-medium leading-tight">{label}</span>
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

const team = [
  { name: "Dr. James Wilson", role: "CEO & Founder", bio: "20+ years in healthcare revenue cycle management with expertise in building scalable billing operations." },
  { name: "Sarah Mitchell", role: "Chief Operations Officer", bio: "Former hospital CFO with deep expertise in healthcare finance and revenue optimization strategies." },
  { name: "Ahmed Al-Rashid", role: "Chief Technology Officer", bio: "AI and healthcare technology expert who built Mid Atlantic's proprietary billing automation platform." },
  { name: "Dr. Lisa Thompson", role: "VP of Clinical Operations", bio: "Board-certified physician turned healthcare operations expert, ensuring clinical accuracy in every claim." },
];

const milestones = [
  { year: "2008", event: "Mid Atlantic Medical Billing founded with a vision to transform medical billing." },
  { year: "2012", event: "Expanded to serve 100+ providers across 10 specialties nationwide." },
  { year: "2016", event: "Launched proprietary Revenue Cycle Management (RCM) platform." },
  { year: "2019", event: "Reached $500M in annual claims processed milestone." },
  { year: "2022", event: "Introduced AI-powered billing automation — a first in the industry." },
  { year: "2024", event: "Serving 500+ providers across 40+ specialties with 98% clean claim rate." },
];

const values = [
  { Icon: Target, title: "Accuracy", desc: "We hold ourselves to the highest standard of billing accuracy. Every claim we submit reflects our commitment to precision." },
  { Icon: Handshake, title: "Partnership", desc: "We see ourselves as an extension of your team — invested in your success as much as our own." },
  { Icon: ShieldCheck, title: "Integrity", desc: "Full transparency in everything we do. No hidden fees, no surprise deductions, no gray areas." },
  { Icon: Zap, title: "Innovation", desc: "We continuously invest in technology to keep your practice ahead of billing challenges." },
  { Icon: Heart, title: "Patient-First", desc: "Our work ultimately supports better patient care by freeing providers to focus on what matters most." },
  { Icon: TrendingUp, title: "Growth", desc: "Our success is measured by the revenue growth and practice improvement we deliver to our clients." },
];

const certifications = [
  "AAPC Certified Professional Billers",
  "AAPC Certified Professional Coders",
  "HFMA Member Organization",
  "MGMA Affiliated",
  "HIPAA Compliant",
  "SOC 2 Type II Certified",
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-white text-gray-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f12] via-[#1e3a22] to-[#3D5C42] py-28 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest border border-white/10">
            About Mid Atlantic
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Transforming Healthcare Revenue Since 2008
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            We are the most trusted medical billing company in the USA — combining deep human expertise with cutting-edge AI to maximize your practice revenue.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-5">Built by Healthcare Professionals, for Healthcare Professionals</h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Mid Atlantic Medical Billing was founded in 2008 by Dr. James Wilson, a physician who experienced firsthand the frustration of revenue leakage due to poor billing practices. What started as a small team of five billers has grown into one of the most trusted names in medical billing across the United States.
              </p>
              <p>
                Today, we serve 500+ healthcare providers across more than 40 specialties — from solo practitioners to large hospital systems — delivering an average revenue increase of 20% within the first 90 days.
              </p>
              <p>
                Our secret? We hire only AAPC-certified billers and coders, invest heavily in technology, and treat every client like a true partner. When you grow, we grow.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedStat end={500} suffix="+" label="Providers Served" />
              <AnimatedStat end={15} suffix="+" label="Years Experience" />
              <AnimatedStat end={98} suffix="%" label="Clean Claim Rate" />
            </div>
          </div>
          <StaggerGrid className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] rounded-3xl p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Our Mission</h3>
              <p className="text-white/75 text-sm leading-relaxed">To empower healthcare providers with the billing solutions they need to thrive financially and focus on exceptional patient care.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 mt-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#5B7B5E]/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-[#5B7B5E]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">To be the most innovative and trusted revenue cycle partner in US healthcare, setting the gold standard for billing excellence.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#5B7B5E]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#5B7B5E]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Our Approach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We combine certified human expertise with AI technology for unparalleled accuracy and efficiency.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white mt-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Our Promise</h3>
              <p className="text-white/75 text-sm leading-relaxed">Transparency, accountability, and measurable results — every single month.</p>
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">What Drives Us</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Our Core Values</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">These principles guide every decision we make and every service we deliver.</p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const IconComp = v.Icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5B7B5E]/10 to-[#3D5C42]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#5B7B5E]/20 transition-colors">
                    <IconComp className="w-6 h-6 text-[#5B7B5E]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#5B7B5E] transition-colors">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4">
          <Section>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Our Journey</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">A Legacy of Excellence</h2>
            </div>
          </Section>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5B7B5E] to-[#3D5C42]" />
            <StaggerGrid className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-16 md:pl-0`}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-[#5B7B5E] font-extrabold text-xl mb-1">{m.year}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute md:relative left-0 md:left-auto flex items-center justify-center w-16 flex-shrink-0 z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] border-4 border-white shadow-lg" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <Section>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Our Leadership</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Meet the Team Behind Mid Atlantic Medical Billing</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Industry veterans dedicated to transforming healthcare revenue management.</p>
            </div>
          </Section>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-[#5B7B5E] to-[#3D5C42] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-4xl font-extrabold text-white">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-0.5">{t.name}</h3>
                  <p className="text-[#5B7B5E] text-xs font-semibold uppercase tracking-wide mb-3">{t.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-[#5B7B5E] uppercase tracking-widest">Certifications & Memberships</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-[#5B7B5E] hover:text-[#5B7B5E] transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#5B7B5E]" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#5B7B5E] to-[#3D5C42] text-white">
        <div className="max-w-[900px] mx-auto px-4 text-center space-y-6">
          <Section>
            <h2 className="text-4xl font-extrabold">Partner with Mid Atlantic Medical Billing Today</h2>
          </Section>
          <p className="text-white/80 text-lg max-w-xl mx-auto">Join 500+ practices that trust us to maximize their revenue and reduce administrative burden.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[#5B7B5E] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl text-base">
              Get Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all text-base">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
