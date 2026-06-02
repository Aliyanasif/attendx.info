import Link from "next/link";

export const metadata = {
  title: "AttendX Blog | Attendance, Payroll & Workforce Management",
  description:
    "Read AttendX insights about attendance management, payroll software, employee tracking, workforce automation, and business productivity in Pakistan.",
  alternates: {
    canonical: "https://attendx.info/blog",
  },
};

const blogs = [
  {
    title: "Best Attendance Management Software in Pakistan",
    slug: "best-attendance-management-software-pakistan",
    description:
      "Discover how modern businesses in Pakistan are automating attendance, payroll, GPS punch tracking, and workforce operations.",
    category: "Attendance Management",
  },
  {
    title: "Why Businesses Need Employee Attendance Tracking",
    slug: "employee-attendance-tracking",
    description:
      "Learn why employee attendance tracking is essential for productivity, payroll accuracy, and staff management.",
    category: "Employee Tracking",
  },
  {
    title: "Why Employee Attendance Tracking Matters for Modern Companies",
    slug: "employee-attendance-tracking-modern-companies",
    description:
      "Explore why modern companies need attendance visibility, workforce control, and accurate employee records.",
    category: "Workforce Management",
  },
  {
    title: "How Payroll Software Helps Businesses Reduce Salary Errors",
    slug: "how-payroll-software-reduces-salary-errors",
    description:
      "Learn how payroll software helps businesses reduce salary mistakes, automate calculations, and improve employee trust.",
    category: "Payroll Management",
  },
  {
    title: "How Payroll Management Systems Reduce Salary Errors",
    slug: "payroll-management-system-benefits",
    description:
      "Understand how payroll management systems improve salary accuracy, automate deductions, and reduce manual workload.",
    category: "Payroll Management",
  },
  {
    title: "GPS Attendance Tracking App in Pakistan",
    slug: "gps-attendance-tracking-app-pakistan",
    description:
      "Discover how GPS attendance tracking helps Pakistani businesses verify employee locations, reduce fake check-ins, and improve workforce transparency.",
    category: "GPS Attendance",
  },
  {
    title: "How Small Businesses Can Automate Payroll Management",
    slug: "small-business-payroll-automation",
    description:
      "Learn how small businesses can automate payroll, reduce salary mistakes, track overtime, and save admin time.",
    category: "Payroll Automation",
  },
  {
    title: "Digital Attendance vs Manual Register",
    slug: "digital-attendance-vs-manual-register",
    description:
      "Compare digital attendance systems with manual registers and learn why businesses are moving to automated workforce tracking.",
    category: "Attendance Management",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-4 md:px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-blue-600 font-black uppercase tracking-[0.35em] text-xs mb-4">
            AttendX Insights
          </p>

          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
            Workforce <span className="text-blue-600">Blog.</span>
          </h1>

          <p className="text-slate-500 text-lg italic max-w-2xl mx-auto leading-relaxed">
            Insights about attendance systems, payroll management, workforce
            automation, and business productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                {post.category}
              </p>

              <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>

              <p className="text-slate-500 italic leading-relaxed">
                {post.description}
              </p>

              <div className="mt-8 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-blue-600 transition-colors">
                Read Article →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}