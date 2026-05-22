import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  Calculator,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About AttendX | Attendance & Payroll Software in Pakistan",
  description:
    "Learn about AttendX, a modern attendance and payroll management software built for Pakistani businesses to manage staff, GPS attendance, leaves, and payroll.",
  alternates: {
    canonical: "https://attendx.info/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <section className="py-16 text-center">
          <p className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs mb-4">
            About AttendX
          </p>

          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Modern Workforce <span className="text-blue-600">Management.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-500 text-lg italic leading-relaxed">
            AttendX is a smart attendance and payroll management system built
            for Pakistani businesses that want to replace manual registers,
            spreadsheets, and outdated attendance workflows.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Feature
            icon={<Clock />}
            title="Attendance Tracking"
            text="Track employee clock-in, clock-out, daily status, and attendance history from one clean dashboard."
          />
          <Feature
            icon={<MapPin />}
            title="GPS Punch"
            text="Verify employee location during punch-in and punch-out for better workforce transparency."
          />
          <Feature
            icon={<Calculator />}
            title="Payroll Management"
            text="Manage salary records, present days, tracked time, and payroll calculations in PKR."
          />
        </section>

        <section className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-5">
                Why AttendX Exists
              </h2>

              <p className="text-slate-300 italic leading-relaxed mb-5">
                Many small and growing businesses still manage attendance and
                payroll manually. This creates missing records, salary mistakes,
                fake attendance, late payroll, and unnecessary management
                pressure.
              </p>

              <p className="text-slate-300 italic leading-relaxed">
                AttendX solves this by connecting employee attendance, GPS
                verification, leave requests, staff records, and payroll into
                one simple system.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-7">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-6">
                Built For
              </h3>

              <ul className="space-y-4 text-slate-300 italic">
                {[
                  "Small businesses",
                  "Agencies and offices",
                  "Schools and institutes",
                  "Service-based teams",
                  "Growing Pakistani companies",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8 text-center">
            What AttendX <span className="text-blue-600">Helps With</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Benefit title="Reduce Manual Work" />
            <Benefit title="Improve Attendance Accuracy" />
            <Benefit title="Minimize Payroll Errors" />
            <Benefit title="Track Staff Activity" />
            <Benefit title="Manage Leaves Digitally" />
            <Benefit title="Build Better Workforce Control" />
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-[40px] p-8 md:p-12 text-center">
          <Users className="mx-auto mb-5" size={46} />

          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-5">
            Ready To Automate Your Workforce?
          </h2>

          <p className="text-blue-100 italic max-w-2xl mx-auto mb-8">
            Explore AttendX and simplify attendance, payroll, GPS tracking, and
            staff management from one modern platform.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em]"
          >
            Explore AttendX <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-7">
      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3">
        {title}
      </h3>

      <p className="text-slate-500 italic leading-relaxed">{text}</p>
    </div>
  );
}

function Benefit({ title }: { title: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-sm flex items-center gap-4">
      <ShieldCheck className="text-blue-600 shrink-0" size={24} />
      <p className="font-black italic uppercase tracking-tighter text-lg">
        {title}
      </p>
    </div>
  );
}