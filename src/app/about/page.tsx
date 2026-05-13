import Link from "next/link";
import { ArrowLeft, Clock, Wallet, ShieldCheck, BarChart3 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-400 hover:text-blue-600 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <section className="rounded-[40px] bg-slate-900 text-white px-6 md:px-14 py-16 md:py-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/30 blur-[100px] rounded-full" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-blue-400 font-black uppercase tracking-[0.35em] text-xs mb-4">
              About AttendX
            </p>

            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
              The New Standard of <span className="text-blue-500">Workforce</span> Management.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl italic leading-relaxed">
              AttendX is a smart attendance and payroll management system built for modern Pakistani businesses that want accurate attendance, clean payroll logic, employee records, and real-time workforce visibility from one platform.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <Feature icon={<Clock />} title="Attendance" desc="Track daily check-ins, late arrivals, absences, and working hours." />
          <Feature icon={<Wallet />} title="Payroll" desc="Calculate salaries, overtime, deductions, and monthly payroll in PKR." />
          <Feature icon={<ShieldCheck />} title="Control" desc="Role-based access for owners, managers, and employees." />
          <Feature icon={<BarChart3 />} title="Reports" desc="Turn workforce data into clean business reports." />
        </section>

        <section className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            Built for Pakistan First.
          </h2>
          <p className="text-slate-500 text-lg italic leading-relaxed">
            AttendX is starting with Pakistani businesses, offices, agencies, schools, factories, and teams. Our long-term goal is to grow into an international workforce management solution while keeping the experience simple, fast, and practical.
          </p>
        </section>
      </div>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[28px] p-6 hover:-translate-y-1 transition-transform">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="font-black italic uppercase tracking-tighter text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm italic leading-relaxed">{desc}</p>
    </div>
  );
}