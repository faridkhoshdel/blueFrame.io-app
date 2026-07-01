import React from 'react';
import { Rocket, Shield, Cpu, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans">
      {/* Navbar / Blueframe */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://via.placeholder.com/40/3B82F6/FFFFFF?text=AI" alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold text-blue-400">blueframeAI</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Welcome to blueframeAI
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          The future of artificial intelligence is here.
        </p>
        <button className="bg-blue-600 px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-blue-500 transition-all">
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <FeatureCard icon={<Cpu />} title="Neural Core" desc="Advanced processing power." />
        <FeatureCard icon={<Shield />} title="Secure" desc="Top-tier encryption." />
        <FeatureCard icon={<Rocket />} title="Fast" desc="Instant deployment." />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 transition-all">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}
