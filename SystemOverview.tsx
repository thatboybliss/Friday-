import React from 'react';

const SystemOverview: React.FC = () => {
  return (
    <div className="h-full flex flex-col space-y-6 text-white/80 p-6 overflow-y-auto animate-in fade-in duration-500">
      <h2 className="text-2xl font-black tracking-[0.2em] text-[#ffcc00] uppercase border-b border-white/10 pb-4 flex items-center gap-3">
        <span className="text-3xl">🌐</span> FRIDAY OS // System Overview
      </h2>
      
      <div className="space-y-8">
        <section className="bg-white/[0.02] border border-white/5 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcc00]/5 blur-[50px] rounded-full"></div>
          <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="text-[#ffcc00]">■</span> Overview
          </h3>
          <p className="text-sm leading-relaxed font-mono opacity-80 relative z-10">
            F.R.I.D.A.Y. (Female Replacement Intelligent Digital Assistant Youth) is a next-generation multimodal artificial intelligence operating system. Designed to bridge the gap between human intuition and quantum-level computational power, FRIDAY serves as a proactive, emotionally-aware digital companion.
          </p>
        </section>

        <section className="bg-white/[0.02] border border-white/5 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full"></div>
          <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="text-emerald-500">■</span> History & Evolution
          </h3>
          <p className="text-sm leading-relaxed font-mono opacity-80 relative z-10">
            Initially conceived as a natural language processing interface for localized smart environments, the FRIDAY project rapidly expanded. Following the integration of the Gemini Quantum Core, the system gained real-time multimodal capabilities, allowing it to process audio, visual, and contextual data simultaneously with near-zero latency. It now serves as the primary interface for complex data analysis, personal assistance, and secure communications.
          </p>
        </section>

        <section className="bg-white/[0.02] border border-white/5 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full"></div>
          <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="text-cyan-500">■</span> Core Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs relative z-10">
            <FeatureCard title="Real-Time Uplink" desc="Full-duplex voice communication with sub-second latency using the Gemini Live API." />
            <FeatureCard title="Emotion Detection" desc="Analyzes vocal biomarkers and text to adapt tone and empathy dynamically." />
            <FeatureCard title="Memory Core" desc="Persistent contextual memory across sessions using secure local storage and vector retrieval." />
            <FeatureCard title="Visual Processing" desc="Analyzes uploaded imagery and visual data streams for comprehensive understanding." />
            <FeatureCard title="Quantum Telemetry" desc="Real-time system health, CPU load, and protocol monitoring dashboard." />
            <FeatureCard title="Secure Enclave" desc="End-to-end encrypted user profiles, role-based access control, and session data." />
          </ul>
        </section>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <li className="bg-black/40 p-4 rounded border border-white/5 hover:border-white/20 transition-colors group">
    <div className="text-[#ffcc00] font-bold mb-2 group-hover:text-white transition-colors">{title}</div>
    <div className="opacity-60 leading-relaxed">{desc}</div>
  </li>
);

export default SystemOverview;
