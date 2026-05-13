import Link from "next/link";
import { ArrowLeft, Lock, Database, UserCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-400 hover:text-blue-600 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <section className="rounded-[40px] bg-slate-900 text-white px-6 md:px-14 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-blue-600/30 blur-[90px] rounded-full" />

          <div className="relative z-10">
            <p className="text-blue-400 font-black uppercase tracking-[0.35em] text-xs mb-4">
              Legal Center
            </p>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Privacy <span className="text-blue-500">Policy.</span>
            </h1>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card icon={<Lock />} title="Protected Data" />
          <Card icon={<Database />} title="Secure Processing" />
          <Card icon={<UserCheck />} title="Authorized Access" />
        </section>

        <section className="mt-12 bg-slate-50 border border-slate-100 rounded-[32px] p-6 md:p-10 space-y-6 text-slate-600 text-base md:text-lg italic leading-relaxed">
          <p>
            AttendX values your privacy and is committed to protecting business, employee, attendance, and payroll-related information.
          </p>
          <p>
            We collect only the information required to operate and improve AttendX, including employee records, attendance logs, payroll details, contact information, and system usage data provided by authorized users.
          </p>
          <p>
            AttendX does not sell user data to third parties. Information is used to provide workforce management, reporting, payroll calculation, and platform support.
          </p>
          <p>
            Users are responsible for ensuring that only authorized personnel access their AttendX account and company data.
          </p>
          <p>
            For privacy-related questions, users can contact AttendX through the official contact form available on the website.
          </p>
        </section>
      </div>
    </main>
  );
}

function Card({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[28px] p-6">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-black italic uppercase tracking-tighter">{title}</h3>
    </div>
  );
}