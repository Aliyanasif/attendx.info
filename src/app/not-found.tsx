export default function NotFound() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
  
        <div className="text-center">
  
          <p className="text-blue-600 uppercase tracking-[0.4em] font-black text-xs mb-4">
            Error 404
          </p>
  
          <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tight text-slate-900">
            Lost?
          </h1>
  
          <p className="text-slate-500 mt-6 text-lg max-w-md mx-auto">
            The page you are looking for does not exist or may have been moved.
          </p>
  
          <a
            href="/"
            className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold"
          >
            Return Home
          </a>
  
        </div>
  
      </main>
    );
  }