"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  MapPin, Fingerprint, ArrowDown, LayoutDashboard, Database, 
  Calculator, Smartphone, Zap, ArrowRight, Settings, 
  RefreshCw, Wallet, Mail, Send, MessageSquare, Clock 
} from 'lucide-react';

// --- ANIMATION VARIANTS (TS ERROR FIXED COMPLETELY) ---
const fadeInUp: any = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInLeft: any = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight: any = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Hero Section Stagger Animations
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* 1️⃣ NAVBAR (Floating Header with Padding & Radius) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-white/80 backdrop-blur-xl border border-slate-100 px-4 md:px-6 rounded-[24px] shadow-sm transition-all duration-300">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <span className="text-white font-black italic text-lg md:text-xl">A</span>
            </div>
            <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">Attend<span className="text-blue-600">X</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
            <a href="#workflow" className="hover:text-blue-600 transition-colors">Ecosystem</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#payroll" className="hover:text-blue-600 transition-colors">Payroll Engine</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact Architect</a>
          </div>

          <a href="https://attendx-3bih.vercel.app" target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-blue-600 transition-all shadow-md active:scale-95 text-center">
            Get App
          </a>
        </div>
      </nav>

      {/* 2️⃣ HERO SECTION */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-6 min-h-[90vh] md:min-h-screen flex items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-blue-50 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-pulse" />
        <div className="max-w-7xl mx-auto text-center z-10 w-full mt-10 md:mt-0">
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}>
            <motion.h1 
              variants={textItemVariants}
              className="text-5xl sm:text-7xl lg:text-[140px] font-black italic tracking-tighter leading-[1] lg:leading-[0.8] mb-6 md:mb-8 uppercase">
              Automate <br/> 
              <motion.span variants={textItemVariants} className="text-blue-600 inline-block mt-1 md:mt-2 lg:mt-0">
                Your Workspace
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={textItemVariants}
              className="max-w-3xl mx-auto text-slate-500 font-medium text-base md:text-xl italic mb-10 md:mb-12 leading-relaxed px-2">
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
                className="bg-blue-600 text-white px-8 md:px-12 py-5 md:py-6 rounded-[24px] font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-blue-200 hover:bg-slate-900 transition-colors flex items-center gap-3"
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
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100 px-4 md:px-6">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <Stat item="100%" label="GPS Accuracy" />
          <Stat item="0.0s" label="Sync Latency" />
          <Stat item="Auto" label="PKR Payroll" />
          <Stat item="Instant" label="App Install" />
        </motion.div>
      </section>

      {/* 4️⃣ INFOGRAPHIC: THE ECOSYSTEM FLOW */}
      <section id="workflow" className="py-20 md:py-32 px-4 md:px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">The <span className="text-blue-500">Ecosystem</span> Flow.</h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">How AttendX automates your agency</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
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
      <section id="features" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <motion.div {...slideInLeft} className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto lg:mx-0"><MapPin size={32} /></div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Verified <br className="hidden md:block"/><span className="text-blue-600">Live Punch.</span></h2>
            <p className="text-slate-500 text-base md:text-lg italic leading-relaxed">
              Eliminate proxy attendance. AttendX utilizes device location APIs to ensure staff are physically present at the office coordinates before allowing a clock-in. The red/blue visual cues provide instant status recognition.
            </p>
          </motion.div>
          <motion.div {...slideInRight} className="flex-1 flex justify-center w-full">
            <div className="relative w-full flex justify-center">
              <div className="absolute inset-0 bg-blue-600/20 blur-2xl md:blur-3xl rounded-full" />
              <img src="/capture16.JPG" alt="Mobile Live Punch" className="relative w-full max-w-[280px] md:max-w-[320px] rounded-[30px] md:rounded-[40px] shadow-[0_35px_60px_-15px_rgba(37,99,235,0.3)] border-4 md:border-8 border-slate-50 object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ FEATURE: MASTER DASHBOARD */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-20">
          <motion.div {...slideInRight} className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 text-blue-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto lg:mx-0"><LayoutDashboard size={32} /></div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">Command <br className="hidden md:block"/><span className="text-blue-600">Center.</span></h2>
            <p className="text-slate-500 text-base md:text-lg italic leading-relaxed">
              The owner's view. Get a bird's-eye perspective of your entire workforce. Track active staff, missing members, and real-time financial liability dynamically updating throughout the day.
            </p>
          </motion.div>
          <motion.div {...slideInLeft} className="flex-1 w-full">
            <img src="/Capture10.JPG" alt="Master Dashboard" className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-slate-200 w-full object-contain" />
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ NEW FEATURE: SMART ATTENDANCE & TIMESHEETS */}
      <section id="attendance" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <motion.div {...slideInLeft} className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto lg:mx-0"><Clock size={32} /></div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Smart <br className="hidden md:block"/><span className="text-blue-600">Timesheets.</span></h2>
            <p className="text-slate-500 text-base md:text-lg italic leading-relaxed">
              Monitor daily check-ins, late arrivals, and absences with pinpoint accuracy. AttendX automatically transforms raw punch data into structured, easy-to-read attendance logs and actionable reports.
            </p>
          </motion.div>
          <motion.div {...slideInRight} className="flex-1 flex justify-center w-full">
            <div className="relative w-full flex justify-center max-w-md mx-auto">
              {/* Custom Coded UI Card for Attendance Log */}
              <div className="bg-slate-900 p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-800 w-full relative z-10 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-4">
                  <div>
                    <p className="font-black italic uppercase text-lg md:text-xl text-white">Attendance Log</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">March 2026 Record</p>
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-xs font-black italic uppercase border border-blue-500/30">
                    Live Status
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { date: "Mar 12, Tue", in: "09:00 AM", out: "06:05 PM", status: "On Time", statusColor: "text-green-400", bg: "bg-slate-800" },
                    { date: "Mar 13, Wed", in: "09:15 AM", out: "06:00 PM", status: "Late", statusColor: "text-amber-400", bg: "bg-slate-800" },
                    { date: "Mar 14, Thu", in: "--:-- AM", out: "--:-- PM", status: "Absent", statusColor: "text-red-400", bg: "bg-slate-800/50" },
                  ].map((log, i) => (
                    <div key={i} className={`flex justify-between items-center p-4 rounded-2xl border border-slate-700/50 ${log.bg}`}>
                      <div>
                        <p className="font-bold text-sm text-slate-200">{log.date}</p>
                        <p className="text-[11px] text-slate-400 font-medium italic mt-1">In: {log.in} <span className="mx-1">|</span> Out: {log.out}</p>
                      </div>
                      <span className={`font-black italic uppercase text-xs tracking-wider ${log.statusColor}`}>{log.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ FEATURE: THE PAYROLL ENGINE */}
      <section id="payroll" className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto"><Calculator size={32} /></div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4 md:mb-6">Automated <br className="hidden md:block"/><span className="text-blue-600">Payroll Logic.</span></h2>
            <p className="text-slate-500 text-base md:text-lg italic leading-relaxed">
              No more spreadsheets. AttendX calculates base salaries, tracks present days down to the minute, and outputs exact net payments in PKR (Rs). Generate professional slips with a single click.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} className="relative w-full">
            <div className="bg-white p-2 md:p-4 rounded-[20px] md:rounded-[32px] shadow-sm border border-slate-200 block w-full overflow-x-auto">
               <div className="min-w-[600px] md:min-w-[800px] w-full">
                 <img src="/Capture15.JPG" alt="Payroll Table View" className="w-full rounded-[12px] md:rounded-[20px] object-contain shadow-sm" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 max-w-5xl mx-auto">
                <img src="/Capture12.JPG" alt="Payroll Overview" className="rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-200 w-full object-contain" />
                <img src="/Capture14.JPG" alt="Mobile Payroll" className="rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-200 w-full max-w-[280px] mx-auto md:ml-auto md:mr-0 object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ FEATURE: MOBILE PORTAL */}
      <section className="py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <motion.div {...slideInLeft} className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto lg:mx-0"><Smartphone size={32} /></div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Employee <br className="hidden md:block"/><span className="text-blue-600">Empowerment.</span></h2>
            <p className="text-slate-500 text-base md:text-lg italic leading-relaxed">
              Staff members get their own dedicated interface. They can monitor their attendance history via the visual calendar, track their shift logs, and manage their professional profiles seamlessly from their phones.
            </p>
          </motion.div>
          <motion.div {...slideInRight} className="flex-1 flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <img src="/Capture17.JPG" alt="Mobile Calendar" className="w-full max-w-[260px] rounded-[30px] md:rounded-[32px] shadow-xl md:shadow-2xl border-4 border-white sm:-translate-y-4 md:-translate-y-8 object-contain" />
            <img src="/Capture18.JPG" alt="Mobile Profile" className="w-full max-w-[260px] rounded-[30px] md:rounded-[32px] shadow-xl md:shadow-2xl border-4 border-white sm:translate-y-4 md:translate-y-8 hidden sm:block object-contain" />
          </motion.div>
        </div>
      </section>

      {/* 🔟 CORE ARCHITECTURE & INSTALLATION */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-900 text-white md:rounded-[60px] mx-0 md:mx-4 my-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">Tech <span className="text-blue-500">Architecture.</span></h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">Built for scale and security</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
            <SolutionCard icon={<Fingerprint />} title="Role Based Access" desc="Distinct routing and database access for Owners vs Staff members." />
            <SolutionCard icon={<Zap />} title="Instant App Access" desc="Install directly to your phone's home screen without going through the App Store." />
            <SolutionCard icon={<Database />} title="Cloud Native" desc="Data synced across all platforms in real-time without manual refreshes." />
          </div>

          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center border-t border-slate-800 pt-16 md:pt-20">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-8 md:mb-10">Install The <span className="text-blue-500 underline">Instant App</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <Step num="01" title="Launch" desc="Open attendx-3bih.vercel.app in your mobile browser." />
              <Step num="02" title="Menu" desc="Tap the browser options (share icon or three dots)." />
              <Step num="03" title="Install" desc="Select 'Add to Home Screen' for native feel." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1️⃣1️⃣ CONTACT US & FEEDBACK */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">Connect with the <span className="text-blue-600">Architect.</span></h2>
            <p className="text-slate-500 font-medium italic text-base md:text-lg">Have a feature request, feedback, or business query? Drop a message directly.</p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-slate-50 border border-slate-100 rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0"><MessageSquare size={20} /></div>
                <div>
                  <p className="font-black italic uppercase text-sm">Direct Support</p>
                  <p className="text-slate-500 text-xs font-medium italic">Available for system upgrades</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center shrink-0"><Mail size={20} /></div>
                <div className="break-all">
                  <p className="font-black italic uppercase text-sm">Email Address</p>
                  <p className="text-slate-500 text-xs font-medium italic">attendx.info@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex-[2] bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 w-full">
              <form action="https://formspree.io/f/xnjwwpye" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* 1️⃣2️⃣ ELITE FOOTER */}
      <footer className="pt-20 md:pt-24 pb-12 px-4 md:px-6 border-t border-slate-100 text-center bg-slate-50">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
            <span className="text-white font-black italic text-2xl md:text-3xl">A</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black italic uppercase mb-8 tracking-tighter">The New Standard of Work.</h3>
          
          <div className="inline-flex items-center gap-4 md:gap-6 p-1 border border-slate-200 rounded-full pr-4 md:pr-6 bg-white shadow-sm mb-12 md:mb-16">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black italic uppercase text-xs md:text-base">AA</div>
            <div className="text-left">
              <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Architect</p>
              <p className="text-xs md:text-sm font-black italic tracking-tight text-slate-900 leading-none">Aliyan Asif</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
             <p>© 2026 AttendX Portal</p>
             <p className="hidden sm:block">All Right Reserved</p>
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
      <p className="text-3xl md:text-4xl font-black italic tracking-tighter text-blue-600">{item}</p>
      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
    </div>
  );
}

function InfographicStep({ num, icon, title, desc }: any) {
  return (
    <div className="flex-1 bg-slate-800 p-6 md:p-8 rounded-[24px] md:rounded-3xl border border-slate-700 relative text-center lg:text-left hover:-translate-y-2 transition-transform duration-300 w-full z-10 shadow-xl">
      <div className="absolute -top-4 left-1/2 lg:-left-4 -translate-x-1/2 lg:translate-x-0 w-10 h-10 bg-blue-600 text-white font-black italic flex items-center justify-center rounded-xl shadow-lg">{num}</div>
      <div className="text-blue-400 mb-4 md:mb-6 mt-4 lg:mt-2 flex justify-center lg:justify-start">{icon}</div>
      <h3 className="text-base md:text-lg font-black italic uppercase tracking-tighter mb-2 text-white">{title}</h3>
      <p className="text-slate-400 font-medium italic text-xs md:text-sm">{desc}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors text-center md:text-left">
      <div className="text-blue-500 mb-4 md:mb-6 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tighter mb-2 text-white">{title}</h3>
      <p className="text-slate-400 italic font-medium text-xs md:text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Step({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="p-6 md:p-8 bg-slate-800 rounded-[24px] md:rounded-3xl border border-slate-700 shadow-sm text-center sm:text-left">
      <p className="text-4xl md:text-5xl font-black italic text-blue-500/20 mb-3 md:mb-4">{num}</p>
      <h4 className="text-base md:text-lg font-black italic uppercase mb-2 text-white">{title}</h4>
      <p className="text-xs md:text-sm text-slate-400 font-medium italic">{desc}</p>
    </div>
  );
}
