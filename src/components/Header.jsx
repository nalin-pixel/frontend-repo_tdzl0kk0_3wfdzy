import { Github, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-slate-700/50 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <div>
            <h1 className="text-white font-semibold leading-5">Portfolio Apps</h1>
            <p className="text-xs text-blue-200/80">Karya aplikasi pilihan</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm">
            <Mail size={16} /> Kontak
          </a>
          <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm">
            <Github size={16} /> Github
          </a>
        </div>
      </div>
    </header>
  );
}
