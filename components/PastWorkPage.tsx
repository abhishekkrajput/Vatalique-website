import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
    {
        name: "KHANDARKAR",
        industry: "Matrimonial Platform",
        website: "https://khandarkar.com/explore",
        context: "A large-scale matrimonial platform with complex user journeys and heavy manual operational processes.",
        problem: [
            "Manual workflow handling",
            "Operational friction at scale",
            "Lack of intelligent automation"
        ],
        built: [
            "Automated workflow systems",
            "Intelligent process handling",
            "Scalable backend logic"
        ],
        outcome: [
            "Reduced manual effort",
            "Smoother user experience",
            "Systems that scaled with growth"
        ],
        action: "Visit Site",
        gradient: "from-pink-500/20 to-rose-500/5",
        accent: "text-rose-400"
    },
    {
        name: "ZAMMERNOW",
        industry: "Fashion Quick Commerce",
        website: "https://zammernow.com/",
        context: "A fast-moving fashion commerce platform where speed and operational reliability are critical.",
        problem: [
            "High operational load",
            "Manual coordination",
            "Growth bottlenecks"
        ],
        built: [
            "Automation-first operational systems",
            "Intelligent workflow handling",
            "Reliability-focused execution logic"
        ],
        outcome: [
            "Faster operations",
            "Reduced human dependency",
            "Stable, growth-ready systems"
        ],
        action: "Visit Site",
        gradient: "from-purple-500/20 to-indigo-500/5",
        accent: "text-purple-400"
    },
    {
        name: "ZILO",
        industry: "Quick Commerce & Fashion Tech",
        website: "https://zilo.one/",
        context: "A rapid fashion delivery platform delivering premium fashion from 250+ brands in under 60 minutes with AI-powered styling recommendations.",
        problem: [
            "Long fashion delivery times",
            "No try-before-buy options",
            "Poor styling recommendations"
        ],
        built: [
            "60-minute delivery logistics engine",
            "30-minute home trial system",
            "AI-powered style matching algorithm"
        ],
        outcome: [
            "Fashion delivered in under 60 minutes",
            "Risk-free try-at-home experience",
            "Personalized styling at scale"
        ],
        action: "Visit Platform",
        gradient: "from-violet-500/20 to-purple-500/5",
        accent: "text-violet-400"
    },
    {
        name: "CHANNEL3",
        industry: "Commerce Infrastructure & API",
        website: "https://trychannel3.com/",
        context: "A universal product database and API that makes every product on the internet discoverable for AI agents and developers.",
        problem: [
            "Fragmented product data across web",
            "No unified API for commerce",
            "Complex affiliate deal management"
        ],
        built: [
            "Universal product graph with 50M+ products",
            "Real-time catalog API for developers",
            "Multimodal AI for product extraction"
        ],
        outcome: [
            "Any product searchable via single API",
            "5% commission on sales, zero setup",
            "Powering 100s of AI shopping agents"
        ],
        action: "Explore API",
        gradient: "from-green-500/20 to-emerald-500/5",
        accent: "text-green-400"
    },
    {
        name: "PLAYABLY",
        industry: "E-commerce Gamification",
        website: "https://playably.ai/",
        context: "A gamification platform that transforms e-commerce touchpoints into interactive mini-games, quizzes, and shoppable experiences.",
        problem: [
            "Low customer engagement rates",
            "High cart abandonment",
            "Poor email/SMS opt-in rates"
        ],
        built: [
            "Shoppable mini-game engine",
            "AI-integrated quiz builder",
            "Gamified rebates system"
        ],
        outcome: [
            "30% higher sales than traditional discounts",
            "40% increase in email sign-ups",
            "47% boost in engagement"
        ],
        action: "See Platform",
        gradient: "from-orange-500/20 to-amber-500/5",
        accent: "text-orange-400"
    },
    {
        name: "GANTAVYAM",
        industry: "Night Taxi Service for Women",
        website: "https://www.gantavyam.site/",
        context: "A safety-focused mobility platform operating at night, where trust and reliability are essential.",
        problem: [
            "Manual monitoring",
            "Safety-critical workflows",
            "Operational unpredictability"
        ],
        built: [
            "Reliable automation systems",
            "Structured operational intelligence",
            "Predictable execution flows"
        ],
        outcome: [
            "Improved operational confidence",
            "Safer execution",
            "Scalable foundation"
        ],
        action: "Visit Site",
        gradient: "from-emerald-500/20 to-teal-500/5",
        accent: "text-emerald-400"
    },
    {
        name: "PATENT TOOL (PATFACE)",
        industry: "Patent Intelligence",
        detail: "Delivered For: Sitabience IP | Recipient: Bikas Lohia",
        website: "https://www.patface.com/",
        context: "A system designed to draft patents based on structured user instructions.",
        problem: [
            "Manual drafting complexity",
            "Time-intensive workflows",
            "Inconsistent output"
        ],
        built: [
            "Instruction-driven AI patent system",
            "Structured intelligence logic",
            "Reliable output pipeline"
        ],
        outcome: [
            "Faster drafting",
            "Reduced complexity",
            "Consistent, repeatable results"
        ],
        action: "See Work",
        gradient: "from-blue-500/20 to-cyan-500/5",
        accent: "text-blue-400"
    }
];

const VisualWorkflow = ({ color }: { color: string }) => {
    // Extract color name (e.g. text-rose-400 -> rose-400) or just use current color context
    // We will use currentColor and apply the class to the container
    return (
        <div className={`relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden group hover:border-white/20 transition-colors ${color}`}>
            {/* Nodes and Flow */}
            <svg className="w-full h-full p-4" viewBox="0 0 100 100">
                <motion.path
                    d="M 20 80 C 20 50 80 50 80 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeOpacity="0.2"
                />
                <motion.circle cx="20" cy="80" r="3" fill="currentColor" />
                <motion.circle cx="80" cy="20" r="3" fill="currentColor" />

                <motion.circle
                    r="4"
                    fill="currentColor"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1
                    }}
                    style={{ offsetPath: 'path("M 20 80 C 20 50 80 50 80 20")' } as any}
                />
            </svg>
        </div>
    );
};

const VisualModules = ({ color }: { color: string }) => {
    return (
        <div className={`relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 overflow-hidden group hover:border-white/20 transition-colors ${color}`}>
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="w-12 h-3 bg-current rounded-sm opacity-40"
                    animate={{
                        scaleX: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

const VisualIntelligence = ({ color }: { color: string }) => {
    return (
        <div className={`relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden group hover:border-white/20 transition-colors ${color}`}>
            <div className="relative flex items-center justify-center">
                <motion.div
                    className="absolute w-16 h-16 border border-current rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="w-4 h-4 bg-current rounded-full shadow-[0_0_15px_currentColor]"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-current rounded-full"
                        initial={{ x: 0, y: 0 }}
                        animate={{
                            x: Math.cos(i * 2.09) * 20,
                            y: Math.sin(i * 2.09) * 20
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const VisualScale = ({ color }: { color: string }) => {
    return (
        <div className={`relative w-full h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden group hover:border-white/20 transition-colors ${color}`}>
            <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-current rounded-full opacity-30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: (i % 3 + Math.floor(i / 3)) * 0.2
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const PastWorkPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">

            {/* SECTION 1: INTRO */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-syncopate font-bold text-white mb-6 leading-tight">
                        Work That Runs <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">In Production</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg md:text-xl font-light">
                        Real systems built for real businesses — designed to operate, scale, and last.
                    </p>
                </motion.div>
            </section>

            {/* SECTION 2: CLIENT SHOWCASE */}
            <div className="space-y-32">
                {CLIENTS.map((client, index) => (
                    <section key={index} className="px-6 md:px-12 max-w-7xl mx-auto">
                        <div className={`flex flex-col gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                            {/* CONTENT LEFT */}
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h2 className="text-3xl font-syncopate font-bold text-white mb-2">{client.name}</h2>
                                    <div className={`text-sm font-bold uppercase tracking-widest ${client.accent} mb-1`}>{client.industry}</div>
                                    {client.detail && <div className="text-xs text-gray-500">{client.detail}</div>}
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                                    {client.context}
                                </p>

                                <div className="grid grid-cols-1 gap-8 pt-4">
                                    {/* Problem */}
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">The Problem</h4>
                                        <ul className="space-y-2">
                                            {client.problem.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Built */}
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-3">What We Built</h4>
                                        <ul className="space-y-2">
                                            {client.built.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-white text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outcome */}
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-3">The Outcome</h4>
                                        <ul className="space-y-2">
                                            {client.outcome.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <a
                                        href={client.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors group"
                                    >
                                        {client.action}
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* VISUAL RIGHT */}
                            <div className="flex-1 min-h-[400px] relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
                                {/* Conditional Rendering: Image for KHANDARKAR, Abstract for others */}
                                {client.name === "KHANDARKAR" ? (
                                    <div className="relative w-full h-full group hover:border-rose-500/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(244,63,94,0.1)]">
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />
                                        <img
                                            src="/vatalique_khandarkar.png"
                                            alt="Intelligent Matchmaking Engine"
                                            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 via-transparent to-transparent z-30 pointer-events-none" />
                                        <div className="absolute inset-0 border border-white/10 rounded-3xl z-40" />
                                    </div>
                                ) : client.name === "ZAMMERNOW" ? (
                                    <div className="relative w-full h-full group hover:border-purple-500/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.1)]">
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />
                                        <img
                                            src="/vatalique_zammernow.png"
                                            alt="Fashion Quick Commerce Logistics"
                                            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-transparent z-30 pointer-events-none" />
                                        <div className="absolute inset-0 border border-white/10 rounded-3xl z-40" />
                                    </div>
                                ) : client.name === "GANTAVYAM" ? (
                                    <div className="relative w-full h-full group hover:border-emerald-500/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />
                                        <img
                                            src="/vatalique_gantavyam.png"
                                            alt="Safety-First Mobility Platform"
                                            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-transparent z-30 pointer-events-none" />
                                        <div className="absolute inset-0 border border-white/10 rounded-3xl z-40" />
                                    </div>
                                ) : client.name === "PATENT TOOL (PATFACE)" ? (
                                    <div className="relative w-full h-full group hover:border-blue-500/30 transition-all duration-500 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />
                                        <img
                                            src="/vatalique_patface.png"
                                            alt="Patent Intelligence & Legal AI"
                                            className="relative w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-20 mix-blend-screen"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent z-30 pointer-events-none" />
                                        <div className="absolute inset-0 border border-white/10 rounded-3xl z-40" />
                                    </div>
                                ) : (
                                    <>
                                        {/* Abstract visual background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-20`} />
                                        <div className="absolute inset-0 backdrop-blur-3xl" />

                                        {/* Animated abstract nodes */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative w-full h-full p-6 md:p-12 grid grid-cols-2 gap-4 md:gap-6 z-10 w-full">
                                                <VisualWorkflow color={client.accent} />
                                                <VisualModules color={client.accent} />
                                                <VisualIntelligence color={client.accent} />
                                                <VisualScale color={client.accent} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                    </section>
                ))}
            </div>

            {/* SECTION 3: CLOSING */}
            <section className="py-32 text-center px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-4xl font-syncopate font-bold text-white max-w-3xl mx-auto leading-normal">
                        “We don’t showcase ideas.<br />
                        <span className="text-gray-500">We showcase systems that run.”</span>
                    </h2>
                </motion.div>
            </section>

        </div>
    );
};

export default PastWorkPage;
