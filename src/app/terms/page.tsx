import Link from "next/link";
import { ArrowLeft, FileCheck, ShieldAlert, Settings } from "lucide-react";

export default function TermsPage() {
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
              Usage Agreement
            </p>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Terms & <span className="text-blue-500">Conditions.</span>
            </h1>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card icon={<FileCheck />} title="Fair Usage" />
          <Card icon={<ShieldAlert />} title="No Abuse" />
          <Card icon={<Settings />} title="Service Updates" />
        </section>

        <section className="mt-12 bg-slate-50 border border-slate-100 rounded-[32px] p-6 md:p-10 space-y-6 text-slate-600 text-base md:text-lg italic leading-relaxed">
          <p>
            By accessing or using AttendX, users agree to follow these terms and conditions.
          </p>
          <p>
            AttendX provides workforce management features including attendance tracking, payroll processing, employee management, reporting, and related operational tools.
          </p>
          <p>
            Users are responsible for maintaining accurate company, employee, attendance, and payroll information inside the platform.
          </p>
          <p>
            Unauthorized access, misuse, reverse engineering, system abuse, or attempts to disrupt AttendX services are strictly prohibited.
          </p>
          <p>
            AttendX may update, improve, modify, or temporarily limit features as required for security, maintenance, or product development.
          </p>
          <p>
            Continued use of AttendX means the user accepts the latest version of these terms.
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