export const metadata = {
    title: "AttendX Blog | Attendance, Payroll & Workforce Management",
    description:
      "Read AttendX insights about attendance management, payroll software, employee tracking, workforce automation, and business productivity in Pakistan.",
    alternates: {
      canonical: "https://attendx.info/blog",
    },
  };


export default function BlogPage() {
  const blog = [
    {
      title: "Best Attendance Management Software in Pakistan",
      slug: "best-attendance-management-software-pakistan",
      description:
        "Discover how modern businesses in Pakistan are automating attendance and payroll operations.",
    },
  
    {
      title: "how payroll software reduces salary errors",
      slug: "how-payroll-software-reduces-salary-errors",
      description:
        "Learn how payroll automation helps businesses improve salary accuracy and workforce efficiency.",
    },
  
    {
      title: "Why Employee Attendance Tracking Matters for Modern Companies",
      slug: "employee-attendance-tracking-modern-companies",
      description:
        "Explore why attendance tracking is essential for productivity, workforce visibility, and operations.",
    },
  
    {
      title: "Manual Attendance vs Digital Attendance Systems",
      slug: "manual-vs-digital-attendance-system",
      description:
        "Compare traditional attendance methods with modern digital workforce management systems.",
    },
  
    {
      title: "Benefits of GPS-Based Attendance Tracking",
      slug: "benefits-of-gps-attendance-tracking",
      description:
        "Discover how GPS-enabled attendance systems improve workforce transparency and accountability.",
    },
  
    {
      title: "How Small Businesses Can Automate Payroll Management",
      slug: "small-business-payroll-automation",
      description:
        "Learn how small businesses in Pakistan can automate payroll and reduce administrative workload.",
    },
  
    {
      title: "Best HR & Payroll Solutions for Pakistani Businesses",
      slug: "best-hr-payroll-solutions-pakistan",
      description:
        "Explore modern HR and payroll software solutions designed for growing businesses in Pakistan.",
    },
  
    {
      title: "Why Workforce Management Software Is Important in 2026",
      slug: "workforce-management-software-importance-2026",
      description:
        "Understand why workforce automation and attendance systems are becoming essential in 2026.",
    },
  ];
  
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
  
            <p className="text-slate-500 text-lg italic max-w-2xl mx-auto">
              Insights about attendance systems, payroll management, workforce automation, and business productivity.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
            {blog.map((post, index) => (
              <a
                key={index}
                href={`/blog/${post.slug}`}
                className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4">
                  Blog Article
                </p>
  
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-tight">
                  {post.title}
                </h2>
  
                <p className="text-slate-500 italic leading-relaxed">
                  {post.description}
                </p>
              </a>
            ))}
  
          </div>
  
        </div>
      </main>
    );
  }