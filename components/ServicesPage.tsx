import React from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

// --- VISUAL COMPONENTS (Abstract System Visuals) ---

const VisualAutomation = () => (
    <div className="relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
        {/* Abstract Workflow Engine */}
        <div className="relative w-64 h-48 flex flex-col justify-between">
            {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-4">
                    <motion.div
                        className="w-12 h-12 rounded-lg border border-cyan-500/30 bg-cyan-900/20"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    />
                    <div className="flex-1 h-0.5 bg-cyan-500/20 overflow-hidden">
                        <motion.div
                            className="w-full h-full bg-cyan-400"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                    <motion.div
                        className="w-8 h-8 rounded-full border border-white/10 bg-white/5"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1.1, 0.8] }}
                        transition={{ duration: 2, delay: i * 0.5 + 1, repeat: Infinity }}
                    />
                </div>
            ))}
        </div>
    </div>
);

const VisualVoice = () => (
    <div className="relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
        {/* Audio Waveform */}
        <div className="flex items-center gap-1 h-32">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 bg-purple-500/80 rounded-full"
                    animate={{ height: [20, Math.random() * 100 + 20, 20] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                />
            ))}
        </div>
    </div>
);

const VisualCustomAI = () => (
    <div className="relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
        {/* Neural Network / Brain */}
        <div className="relative w-64 h-64">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-emerald-400 rounded-full"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                >
                    <div className="absolute inset-0 bg-emerald-400 blur-sm" />
                </motion.div>
            ))}
            <svg className="absolute inset-0 w-full h-full">
                <motion.path
                    d="M32,32 Q128,128 224,32"
                    fill="none"
                    stroke="rgba(52, 211, 153, 0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                    d="M32,224 Q128,128 224,224"
                    fill="none"
                    stroke="rgba(52, 211, 153, 0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                />
            </svg>
        </div>
    </div>
);

const VisualWebsites = () => (
    <div className="relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
        {/* Grid / Layout Interface */}
        <div className="grid grid-cols-2 gap-4 w-64 h-48 rotate-3 skew-x-3 opacity-80">
            <motion.div className="col-span-2 h-16 rounded-lg bg-blue-500/20 border border-blue-500/30" />
            <motion.div className="h-28 rounded-lg bg-white/5 border border-white/10" />
            <div className="h-28 flex flex-col gap-2">
                <motion.div className="h-8 rounded-lg bg-white/5 border border-white/10" animate={{ width: ["100%", "80%", "100%"] }} transition={{ duration: 4, repeat: Infinity }} />
                <motion.div className="h-8 rounded-lg bg-white/5 border border-white/10" />
                <motion.div className="h-8 rounded-lg bg-white/5 border border-white/10" />
            </div>
        </div>
    </div>
);

const VisualUX = () => (
    <div className="relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
        {/* Interactive Elements */}
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Click Ripple */}
            <motion.div
                className="absolute w-20 h-20 rounded-full border border-orange-400"
                animate={{ scale: [0.5, 2], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-32 h-32 rounded-full border border-orange-400/50"
                animate={{ scale: [0.5, 2], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div className="w-4 h-4 rounded-full bg-orange-400" />
        </div>
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
                    <h1 className="text-5xl md:text-7xl font-syncopate font-bold text-white mb-8 leading-tight">
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
