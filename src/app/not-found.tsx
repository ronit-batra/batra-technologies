import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-display font-bold text-gold-500 mb-4">404</p>
        <h1 className="text-3xl font-display font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-dark-400 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-950 px-8 py-4 rounded-xl font-semibold inline-block transition-all hover:shadow-lg hover:shadow-gold-500/20">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
