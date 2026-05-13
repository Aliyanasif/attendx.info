import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-400 hover:text-blue-600 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <article>
          <p className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs mb-4">
            Attendance Software
          </p>

          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Best Attendance Management Software in Pakistan
          </h1>

          <p className="text-slate-500 text-lg italic leading-relaxed mb-10">
            Attendance management is one of the most common problems for Pakistani businesses. Manual registers, Excel sheets, WhatsApp updates, and basic punch machines often create salary errors, late reporting, and weak employee accountability.
          </p>

          <Section
            title="Why Attendance Management Matters"
            text="A proper attendance system helps businesses track check-ins, late arrivals, absences, working hours, overtime, and payroll data in one place. This reduces manual work and improves decision-making for owners and managers."
          />

          <Section
            title="Common Problems in Manual Attendance"
            text="Many businesses still use registers or spreadsheets. This creates problems like fake attendance, missing records, payroll mistakes, delayed reporting, and lack of real-time visibility."
          />

          <Section
            title="What Makes a Good Attendance Software?"
            text="A good attendance management software should be simple, mobile-friendly, secure, and connected with payroll. It should help owners monitor staff, calculate working time, and reduce salary calculation errors."
          />

          <div className="bg-slate-900 text-white rounded-[32px] p-8 md:p-10 my-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">
              Key Features to Look For
            </h2>

            <ul className="space-y-4">
              {[
                "Employee attendance tracking",
                "Late arrival and absence monitoring",
                "Payroll calculation in PKR",
                "Mobile-friendly employee access",
                "Reports and analytics",
                "Owner and staff role-based access",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 italic">
                  <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Section
            title="Why AttendX is Built for Pakistani Businesses"
            text="AttendX is designed for businesses in Pakistan that need attendance tracking, payroll management, employee records, overtime handling, and reports from one smart system. It helps reduce spreadsheet dependency and gives owners better control over workforce operations."
          />

          <Section
            title="Final Thoughts"
            text="For growing businesses, attendance management software is not just a digital tool. It is a control system that saves time, improves salary accuracy, and creates better workforce transparency."
          />
        </article>
      </div>
    </main>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
        {title}
      </h2>
      <p className="text-slate-600 text-lg italic leading-relaxed">
        {text}
      </p>
    </section>
  );
}