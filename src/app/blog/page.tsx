export default function BlogPage() {
    const posts = [
      {
        title: "Best Attendance Management Software in Pakistan",
        slug: "best-attendance-management-software-pakistan",
        description:
          "Discover how modern attendance software helps Pakistani businesses automate workforce management.",
      },
  
      {
        title: "How Payroll Management Systems Reduce Salary Errors",
        slug: "payroll-management-system-benefits",
        description:
          "Learn how payroll automation improves salary accuracy and saves business time.",
      },
  
      {
        title: "Why Businesses Need Employee Attendance Tracking",
        slug: "employee-attendance-tracking",
        description:
          "Understand why attendance tracking is essential for modern organizations.",
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
  
            {posts.map((post, index) => (
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