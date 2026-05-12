"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Fingerprint, ArrowDown, LayoutDashboard, Database, 
  Calculator, Smartphone, Zap, ArrowRight, Settings, 
  RefreshCw, Wallet, Mail, Send, MessageSquare
} from 'lucide-react';
import { Variants } from 'framer-motion';
import { Analytics } from "@vercel/analytics/next"

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};



// Hero Section Stagger Animations
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* 1️⃣ NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <span className="text-white font-black italic text-xl">A</span>
            </div>
            <span className="text-2xl font-black italic tracking-tighter uppercase">Attend<span className="text-blue-600">X</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
            <a href="#workflow" className="hover:text-blue-600 transition-colors">Ecosystem</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#payroll" className="hover:text-blue-600 transition-colors">Payroll Engine</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact Architect</a>
          </div>

          <a href="https://attendx-3bih.vercel.app" target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-md active:scale-95">
            Download application
          </a>
        </div>
      </nav>

      {/* 2️⃣ HERO SECTION (WITH NEW ANIMATIONS) */}
      <section className="pt-48 pb-32 px-6 min-h-screen flex items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="max-w-7xl mx-auto text-center z-10 w-full">
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants as Variants}>
            <motion.h1 
              variants={textItemVariants as Variants}
              className="text-7xl md:text-[140px] font-black italic tracking-tighter leading-[0.8] mb-8 uppercase">
              Automate <br/> 
              <motion.span variants={textItemVariants as Variants} className="text-blue-600 inline-block mt-2 md:mt-0">
                Your Workspace
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={textItemVariants as Variants}
              className="max-w-3xl mx-auto text-slate-500 font-medium text-xl italic mb-12 leading-relaxed">
              AttendX is the ultimate ecosystem for modern agencies. Experience seamless synchronization, automated payroll logic in PKR, and elite security protocols.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              } as Variants}
              className="flex justify-center"
            >
              <motion.a 
                href="#workflow" 
                whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-12 py-6 rounded-[24px] font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-blue-200 hover:bg-slate-900 transition-colors flex items-center gap-3"
              >
                Explore The Logic 
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown size={18} />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3️⃣ METRICS & TRUST */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 px-6">
        <motion.div {...fadeInUp as any} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <Stat item="100%" label="GPS Accuracy" />
          <Stat item="0.0s" label="Sync Latency" />
          <Stat item="Auto" label="PKR Payroll" />
          <Stat item="Instant" label="App Install" />
        </motion.div>
      </section>

      {/* 4️⃣ INFOGRAPHIC: THE ECOSYSTEM FLOW */}
      <section id="workflow" className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp as any} className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">The <span className="text-blue-500">Ecosystem</span> Flow.</h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">How AttendX automates your agency</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 hidden lg:block -z-10" />
            
            <InfographicStep num="01" icon={<Settings size={28} />} title="Global Setup" desc="Configure department geofences and define base salaries in Rs." />
            <div className="hidden lg:flex items-center justify-center text-slate-600 bg-slate-900 px-2 z-10"><ArrowRight size={32} /></div>
            <InfographicStep num="02" icon={<RefreshCw size={28} />} title="Live Sync" desc="Staff clock-in via GPS. Data hits the cloud instantaneously." />
            <div className="hidden lg:flex items-center justify-center text-slate-600 bg-slate-900 px-2 z-10"><ArrowRight size={32} /></div>
            <InfographicStep num="03" icon={<Calculator size={28} />} title="Logic Engine" desc="System calculates active minutes, absences, and real-time liabilities." />
            <div className="hidden lg:flex items-center justify-center text-slate-600 bg-slate-900 px-2 z-10"><ArrowRight size={32} /></div>
            <InfographicStep num="04" icon={<Wallet size={28} />} title="Disbursement" desc="Generate precise PKR salary slips with a single click at month-end." />
          </div>
        </div>
      </section>

      {/* 5️⃣ FEATURE: GPS LIVE PUNCH */}
      <section id="features" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <motion.div {...slideInLeft as any} className="flex-1 space-y-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><MapPin size={32} /></div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Verified <br/><span className="text-blue-600">Live Punch.</span></h2>
            <p className="text-slate-500 text-lg italic leading-relaxed">
              Eliminate proxy attendance. AttendX utilizes device location APIs to ensure staff are physically present at the office coordinates before allowing a clock-in. The red/blue visual cues provide instant status recognition.
            </p>
          </motion.div>
          <motion.div {...slideInRight as any} className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
              <img src="/MobileLivePunch.jpg" alt="Mobile Live Punch" className="relative w-[320px] rounded-[40px] shadow-[0_35px_60px_-15px_rgba(37,99,235,0.3)] border-8 border-slate-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ FEATURE: MASTER DASHBOARD */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
          <motion.div {...slideInRight as any} className="flex-1 space-y-6">
            <div className="w-16 h-16 bg-slate-900 text-blue-500 rounded-2xl flex items-center justify-center mb-6"><LayoutDashboard size={32} /></div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">Command <br/><span className="text-blue-600">Center.</span></h2>
            <p className="text-slate-500 text-lg italic leading-relaxed">
              The owner's view. Get a bird's-eye perspective of your entire workforce. Track active staff, missing members, and real-time financial liability dynamically updating throughout the day.
            </p>
          </motion.div>
          <motion.div {...slideInLeft as any} className="flex-1">
            <img src="/Capture10.JPG" alt="Master Dashboard" className="rounded-3xl shadow-2xl border border-slate-200 w-full" />
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ FEATURE: THE PAYROLL ENGINE */}
      <section id="payroll" className="py-32 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div {...fadeInUp as any} className="max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"><Calculator size={32} /></div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">Automated <br/><span className="text-blue-600">Payroll Logic.</span></h2>
            <p className="text-slate-500 text-lg italic leading-relaxed">
              No more spreadsheets. AttendX calculates base salaries, tracks present days down to the minute, and outputs exact net payments in PKR. Generate professional slips with a single click.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp as any} className="relative">
            <div className="bg-slate-50 p-4 rounded-[32px] shadow-inner border border-slate-200 inline-block w-full overflow-x-auto">
               <img src="/Capture15.JPG" alt="Payroll Table View" className="w-full min-w-[800px] rounded-[20px] object-contain shadow-sm" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                <img src="/Capture12.JPG" alt="Payroll Overview" className="rounded-3xl shadow-xl border border-slate-200" />
                <img src="/Capture14.JPG" alt="Mobile Payroll" className="rounded-3xl shadow-xl border border-slate-200 w-[280px] mx-auto md:ml-auto md:mr-0 object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ FEATURE: MOBILE PORTAL */}
      <section className="py-32 px-6 overflow-hidden bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <motion.div {...slideInLeft as any} className="flex-1 space-y-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Smartphone size={32} /></div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Employee <br/><span className="text-blue-600">Empowerment.</span></h2>
            <p className="text-slate-500 text-lg italic leading-relaxed">
              Staff members get their own dedicated interface. They can monitor their attendance history via the visual calendar, track their shift logs, and manage their professional profiles seamlessly from their phones.
            </p>
          </motion.div>
          <motion.div {...slideInRight as any} className="flex-1 flex gap-6 justify-center">
            <img src="/Capture17.JPG" alt="Mobile Calendar" className="w-[260px] rounded-[32px] shadow-2xl border-4 border-white -translate-y-8" />
            <img src="/Capture18.JPG" alt="Mobile Profile" className="w-[260px] rounded-[32px] shadow-2xl border-4 border-white translate-y-8 hidden md:block" />
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ CORE ARCHITECTURE & INSTALLATION */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-[60px] mx-4 my-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp as any} className="text-center mb-20">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Tech <span className="text-blue-500">Architecture.</span></h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">Built for scale and security</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <SolutionCard icon={<Fingerprint />} title="Role Based Access" desc="Distinct routing and database access for Owners vs Staff members." />
            <SolutionCard icon={<Zap />} title="Instant App Access" desc="Install directly to your phone's home screen without going through the App Store." />
            <SolutionCard icon={<Database />} title="Cloud Native" desc="Data synced across all platforms in real-time without manual refreshes." />
          </div>

          <motion.div {...fadeInUp as any} className="max-w-4xl mx-auto text-center border-t border-slate-800 pt-20">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-10">Install The <span className="text-blue-500 underline">Instant App</span></h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Step num="01" title="Launch" desc="Open attendx-3bih.vercel.app in your mobile browser." />
              <Step num="02" title="Menu" desc="Tap the browser options (share icon or three dots)." />
              <Step num="03" title="Install" desc="Select 'Add to Home Screen' for native feel." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔟 CONTACT US & FEEDBACK */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp as any} className="text-center mb-16">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Connect with the <span className="text-blue-600">Architect.</span></h2>
            <p className="text-slate-500 font-medium italic text-lg">Have a feature request, feedback, or business query? Drop a message directly.</p>
          </motion.div>

          <motion.div {...fadeInUp as any} className="bg-slate-50 border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><MessageSquare size={20} /></div>
                <div>
                  <p className="font-black italic uppercase text-sm">Direct Support</p>
                  <p className="text-slate-500 text-xs font-medium italic">Available for system upgrades</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center"><Mail size={20} /></div>
                <div>
                  <p className="font-black italic uppercase text-sm">Email Address</p>
                  <p className="text-slate-500 text-xs font-medium italic">attendx.info@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex-[2] bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              
              {/* Formspree Form Added Here */}
              <form action="https://formspree.io/f/xnjwwpye" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="name" required placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-sm transition-colors" />
                  <input type="email" name="email" required placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-sm transition-colors" />
                </div>
                <input type="text" name="subject" required placeholder="Subject (e.g., Feature Request)" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-sm transition-colors" />
                <textarea name="message" required placeholder="Type your message here..." rows={4} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 font-medium text-sm transition-colors resize-none"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white font-black italic uppercase tracking-widest text-xs py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors">
                  <Send size={16} /> Dispatch Message
                </button>
              </form>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1️⃣1️⃣ ELITE FOOTER */}
      <footer className="pt-24 pb-12 px-6 border-t border-slate-100 text-center bg-slate-50">
        <motion.div {...fadeInUp as any} className="max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-white font-black italic text-3xl">A</span>
          </div>
          <h3 className="text-2xl font-black italic uppercase mb-8 tracking-tighter">The New Standard of Work.</h3>
          
          <div className="inline-flex items-center gap-6 p-1 border border-slate-200 rounded-full pr-6 bg-white shadow-sm mb-16">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black italic uppercase">AA</div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Architect</p>
              <p className="text-sm font-black italic tracking-tight text-slate-900 leading-none">Aliyan Asif</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
             <p>© 2026 AttendX Portal</p>
             <p>Next.js 15 Engineered</p>
             <p>Karachi, Pakistan</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

// --- REUSABLE COMPONENTS ---

function Stat({ item, label }: { item: string, label: string }) {
  return (
    <div className="space-y-1">
      <p className="text-4xl font-black italic tracking-tighter text-blue-600">{item}</p>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
    </div>
  );
}

function InfographicStep({ num, icon, title, desc }: any) {
  return (
    <div className="flex-1 bg-slate-800 p-8 rounded-3xl border border-slate-700 relative text-left hover:-translate-y-2 transition-transform duration-300 w-full z-10">
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white font-black italic flex items-center justify-center rounded-xl shadow-lg">{num}</div>
      <div className="text-blue-400 mb-6 mt-2">{icon}</div>
      <h3 className="text-lg font-black italic uppercase tracking-tighter mb-2 text-white">{title}</h3>
      <p className="text-slate-400 font-medium italic text-sm">{desc}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div variants={fadeInUp as any} initial="initial" whileInView="whileInView" className="p-8 rounded-[32px] bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors text-left">
      <div className="text-blue-500 mb-6">{icon}</div>
      <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2 text-white">{title}</h3>
      <p className="text-slate-400 italic font-medium text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Step({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 shadow-sm text-center md:text-left">
      <p className="text-5xl font-black italic text-blue-500/20 mb-4">{num}</p>
      <h4 className="font-black italic uppercase mb-2 text-white">{title}</h4>
      <p className="text-sm text-slate-400 font-medium italic">{desc}</p>
    </div>
  );
}