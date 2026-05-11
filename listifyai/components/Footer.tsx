import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-black"
            style={{ background: "var(--accent)" }}
          >
            L
          </span>
          <span>
            Listify<span style={{ color: "var(--accent)" }}>AI</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800 transition-colors">
            Home
          </Link>
          <Link href="/tool" className="hover:text-gray-800 transition-colors">
            Tool
          </Link>
          <Link href="/pricing" className="hover:text-gray-800 transition-colors">
            Pricing
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ListifyAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
