import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Why Businesses Need Employee Attendance Tracking | AttendX",
  description:
    "Learn why employee attendance tracking is important for businesses, payroll accuracy, productivity, workforce control, and better staff management.",
  alternates: {
    canonical: "https://attendx.info/blog/employee-attendance-tracking",
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-400 hover:text-blue-600 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <article>
          <p className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs mb-4">
            Employee Tracking
          </p>

          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Why Businesses Need Employee Attendance Tracking
          </h1>

          <p className="text-slate-500 text-lg italic leading-relaxed mb-10">
            Employee attendance tracking helps businesses understand when staff arrive, leave, work overtime, or remain absent. For growing companies, this data is essential for payroll accuracy, productivity, and workforce control.
          </p>

          <Section
            title="What Is Employee Attendance Tracking?"
            text="Employee attendance tracking is the process of recording staff check-ins, check-outs, working hours, late arrivals, absences, and overtime. A digital system makes this information easier to manage and review."
          />

          <Section
            title="Why Manual Tracking Creates Problems"
            text="Manual registers and spreadsheets can lead to missing records, fake attendance, incorrect working hours, and salary disputes. These issues become bigger as the team grows."
          />

          <Section
            title="How Attendance Tracking Improves Payroll"
            text="Payroll depends on accurate attendance data. When attendance is tracked digitally, salary calculations become more reliable because working days, overtime, absences, and late marks are easier to verify."
          />

          <div className="bg-slate-900 text-white rounded-[32px] p-8 md:p-10 my-10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">
              Benefits of Attendance Tracking
            </h2>

            <ul className="space-y-4">
              {[
                "Better workforce visibility",
                "Reduced payroll mistakes",
                "Improved employee accountability",
                "Clear attendance history",
                "Faster monthly reporting",
                "Less dependency on manual records",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 italic">
                  <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Section
            title="Why AttendX Helps"
            text="AttendX gives businesses a clean system to manage attendance, payroll, staff records, and reports from one platform. It helps owners reduce manual workload and monitor workforce activity more clearly."
          />

          <Section
            title="Final Thoughts"
            text="Employee attendance tracking is not just about marking presence. It is about building a reliable workforce management system that supports accurate payroll, better discipline, and smarter business decisions."
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