import React from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

// --- VISUAL COMPONENTS (Abstract System Visuals) ---

const VisualAutomation = () => (
    <div className="relative w-full h-full rounded-xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] group hover:border-cyan-500/30 transition-all duration-500">
        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />

        {/* AI Automation System Image */}
        <img
            src="/vatalique_automation_system.png"
            alt="AI Business Automation System"
            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-0 border border-white/10 rounded-xl z-40" />
    </div>
);

const VisualVoice = () => (
    <div className="relative w-full h-full rounded-xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] group hover:border-purple-500/30 transition-all duration-500">
        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />

        {/* AI Voice Agent Image */}
        <img
            src="/vatalique_voice_agent.png"
            alt="AI Voice & Calling Agents"
            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-0 border border-white/10 rounded-xl z-40" />
    </div>
);

const VisualCustomAI = () => (
    <div className="relative w-full h-full rounded-xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] group hover:border-emerald-500/30 transition-all duration-500">
        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />

        {/* Custom AI Agent Image */}
        <img
            src="/vatalique_custom_ai.png"
            alt="Custom AI & Agent Development"
            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-0 border border-white/10 rounded-xl z-40" />
    </div>
);

const VisualWebsites = () => (
    <div className="relative w-full h-full rounded-xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] group hover:border-blue-500/30 transition-all duration-500">
        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />

        {/* AI Websites & Apps Image */}
        <img
            src="/vatalique_ai_websites.png"
            alt="AI-Powered Websites & Applications"
            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-0 border border-white/10 rounded-xl z-40" />
    </div>
);

const VisualUX = () => (
    <div className="relative w-full h-full rounded-xl border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] group hover:border-orange-500/30 transition-all duration-500">
        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />

        {/* AI UX & Interface Image */}
        <img
            src="/vatalique_ai_ux.png"
            alt="AI-Native UX & Interfaces"
            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-0 border border-white/10 rounded-xl z-40" />
    </div>
);


const SERVICES = [
    {
        name: "AI AUTOMATION SYSTEMS",
        positioning: "End-to-end automation systems that operate workflows autonomously.",
        solves: ["Manual operations", "Repetitive tasks", "Process bottlenecks"],
        build: ["Workflow automation engines", "Logic-driven execution systems", "Event-based intelligence layers"],
        usedFor: ["Operations", "Support", "Sales workflows", "Internal processes"],
        visual: <VisualAutomation />,
        accent: "text-cyan-400"
    },
    {
        name: "AI VOICE & CALLING AGENTS",
        positioning: "Human-like voice agents that communicate, coordinate, and act without human involvement.",
        solves: ["Manual calling", "Support overload", "Appointment handling"],
        build: ["Natural voice agents", "Multilingual calling systems", "Context-aware conversations"],
        usedFor: ["Customer support", "Sales calls", "Booking & follow-ups"],
        visual: <VisualVoice />,
        accent: "text-purple-400"
    },
    {
        name: "CUSTOM AI & AGENT DEVELOPMENT",
        positioning: "AI agents designed around your exact business logic.",
        solves: ["Generic AI limitations", "Rigid SaaS tools", "Non-scalable workflows"],
        build: ["Custom reasoning agents", "Decision-making intelligence", "Learning & adaptation logic"],
        usedFor: ["CRM", "Internal tools", "Decision automation", "Data intelligence"],
        visual: <VisualCustomAI />,
        accent: "text-emerald-400"
    },
    {
        name: "AI-POWERED WEBSITES & APPLICATIONS",
        positioning: "Websites and apps that think, respond, and adapt.",
        solves: ["Static websites", "Manual user flows", "Non-adaptive applications"],
        build: ["AI-driven websites", "Intelligent dashboards", "Integrated automation layers"],
        usedFor: ["Business websites", "Internal platforms", "Client-facing systems"],
        visual: <VisualWebsites />,
        accent: "text-blue-400"
    },
    {
        name: "AI-NATIVE UX & INTERFACES",
        positioning: "Interfaces designed for AI-first interaction.",
        solves: ["Static UX", "One-size-fits-all experiences", "Slow user flows"],
        build: ["Personalized AI UX", "Adaptive interfaces", "Rapid interaction layers"],
        usedFor: ["AI products", "SaaS platforms", "Internal systems"],
        visual: <VisualUX />,
        accent: "text-orange-400"
    }
];

const ServicesPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="pt-32 pb-20 min-h-screen">

            {/* SECTION 1: OPENING STATEMENT */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-7xl font-syncopate font-bold text-white mb-8 leading-tight">
                        AI Systems That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Run Businesses</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl text-xl md:text-2xl font-light leading-relaxed">
                        We design and deploy production-grade AI systems that replace manual work across operations, sales, support, and decision-making.
                    </p>
                </motion.div>
            </section>

            {/* SECTION 2: HOW WE THINK */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <div className="border-t border-b border-white/10 py-16">
                    <h2 className="text-2xl font-syncopate font-bold text-white mb-6">We Don’t Build Tools. We Build Systems.</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-gray-400">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Tools assist humans
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Systems replace manual effort
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Every service is designed to operate autonomously
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Custom-built around business logic
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 3: SERVICE BREAKDOWN */}
            <div className="space-y-40 mb-40">
                {SERVICES.map((service, index) => (
                    <section key={index} className="px-6 md:px-12 max-w-7xl mx-auto">
                        <div className={`flex flex-col gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                            {/* LEFT: CONTENT */}
                            <div className="flex-1 space-y-8">
                                <h3 className="text-3xl md:text-4xl font-syncopate font-bold text-white">{service.name}</h3>
                                <p className={`text-lg font-bold uppercase tracking-widest ${service.accent}`}>{service.positioning}</p>

                                <div className="space-y-8 pt-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Solves</h4>
                                        <ul className="space-y-2">
                                            {service.solves.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                                    <span className="w-1 h-1 rounded-full bg-red-500/50" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">We Build</h4>
                                        <ul className="space-y-2">
                                            {service.build.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-white text-sm">
                                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Used For</h4>
                                        <ul className="space-y-2">
                                            {service.usedFor.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: VISUAL */}
                            <div className="flex-1 min-h-[400px]">
                                {service.visual}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* SECTION 4: CONNECTION */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 text-center">
                <h2 className="text-3xl font-syncopate font-bold text-white mb-12">Everything Works Together</h2>
                <div className="relative h-20 overflow-hidden flex items-center justify-center gap-4 opacity-50">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                </div>
                <p className="text-gray-500 text-sm mt-4 uppercase tracking-widest">Unified Architecture</p>
            </section>

            {/* SECTION 5: CLOSE */}
            <section className="py-24 text-center px-6 border-t border-white/5 bg-white/[0.02]">
                <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white max-w-4xl mx-auto leading-normal mb-12">
                    “If you want AI experiments, we’re not for you.<br />
                    <span className="text-cyan-400">If you want AI systems that run your business, we are.”</span>
                </h2>

                {/* Reuse existing CTA flow logic later if generic button needed, but user specifically asked for 'BOOK CALL' text button existing flow */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-colors rounded-full"
                >
                    Book Call
                </button>
            </section>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
};

export default ServicesPage;
