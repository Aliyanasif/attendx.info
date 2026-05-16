import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How Small Businesses Can Automate Payroll Management | AttendX",
  description:
    "Learn how small businesses in Pakistan can automate payroll management, reduce salary mistakes, track attendance, calculate overtime, and save administrative time.",
  keywords: [
    "small business payroll automation",
    "payroll software pakistan",
    "payroll management system",
    "attendance payroll software",
    "salary automation pakistan",
    "AttendX",
  ],
  alternates: {
    canonical:
      "https://attendx.info/blog/small-business-payroll-automation",
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-400 hover:text-blue-600 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <article>
          <p className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs mb-4">
            Payroll Automation
          </p>

          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
            How Small Businesses Can Automate Payroll Management
          </h1>

          <p className="text-slate-500 text-lg italic leading-relaxed mb-10">
            Small businesses often manage salaries through registers, Excel
            sheets, and manual attendance records. As the team grows, this
            creates payroll mistakes, delayed payments, and unnecessary admin
            workload.
          </p>

          <Section
            title="Why Manual Payroll Becomes a Problem"
            text="Manual payroll depends on accurate attendance, overtime, deductions, leaves, and working hours. If any record is missing or incorrect, salary calculations become unreliable and employees may lose trust in the process."
          />

          <Section
            title="What Payroll Automation Means"
            text="Payroll automation uses attendance data, employee salary records, overtime hours, and absence details to calculate salaries faster and more accurately. It reduces repetitive manual calculations and saves management time."
          />

          <div className="bg-slate-900 text-white rounded-[32px] p-8 md:p-10 my-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">
              Benefits For Small Businesses
            </h2>

            <ul className="space-y-4">
              {[
                "Faster monthly salary processing",
                "Reduced salary calculation mistakes",
                "Attendance-based payroll records",
                "Overtime and deduction tracking",
                "Clear employee salary history",
                "Less dependency on spreadsheets",
                "Better business financial control",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 italic">
                  <CheckCircle
                    className="text-blue-500 shrink-0 mt-0.5"
                    size={20}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Section
            title="Attendance And Payroll Should Work Together"
            text="Payroll becomes more accurate when it connects directly with attendance tracking. Businesses can calculate salaries using present days, absences, overtime, late arrivals, and approved leaves from one system."
          />

          <Section
            title="Why Small Businesses Need Simple Software"
            text="Small businesses do not need complicated enterprise tools. They need a simple system that is easy to use, mobile-friendly, affordable, and practical for daily operations."
          />

          <Section
            title="How AttendX Helps"
            text="AttendX helps small businesses manage employee attendance, GPS punch tracking, payroll records, overtime, leave requests, and workforce reports from one centralized dashboard."
          />

          <div className="bg-blue-600 text-white rounded-[32px] p-8 md:p-10 my-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
              Explore AttendX
            </h2>

            <p className="text-blue-100 italic leading-relaxed mb-6">
              Automate payroll, attendance, and workforce operations with
              AttendX.
            </p>

            <a
              href="https://attendx.info"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest"
            >
              Visit AttendX
            </a>
          </div>

          <Section
            title="Final Thoughts"
            text="Payroll automation helps small businesses save time, reduce salary disputes, and build a more reliable workforce management process. For growing teams, it becomes a necessary operational system."
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

      <p className="text-slate-600 text-lg italic leading-relaxed">{text}</p>
    </section>
  );
}