import React from 'react';
import { motion } from 'framer-motion';
import ApplicationModal from './ApplicationModal';

const CareersPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="pt-32 pb-20 min-h-screen">

            {/* SECTION 1: HERO / OPENING */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 relative">
                {/* Background Elements (Subtle) */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none -z-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                            d="M0,50 Q50,0 100,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.2"
                            className="text-cyan-500"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.path
                            d="M0,50 Q50,100 100,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.2"
                            className="text-blue-500"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
                        />
                    </svg>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-syncopate font-bold mb-8 leading-tight">
                        BUILD WHAT DEFINES <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">THE NEXT ERA</span>
                    </h1>
                    <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                        We don’t hire to fill roles. We bring in people who want to build systems that matter.
                    </p>
                </motion.div>
            </section>

            {/* SECTION 2: WELCOME / MISSION */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-b border-gray-200 dark:border-white/10 py-16"
                >
                    <h2 className="text-2xl font-syncopate font-bold mb-6">Welcome to Vatalique</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            Vatalique is where engineers, thinkers, creators, and operators come together to build AI systems that run inside real businesses.
                        </p>
                        <p>
                            We value clarity over chaos, ownership over shortcuts, and long-term impact over short-term noise.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: LEGACY STATEMENT */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative border border-cyan-500/20 bg-cyan-500/[0.02] rounded-2xl p-12 md:p-16 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 font-syncopate">
                        Do you want to be part of a <span className="text-cyan-600 dark:text-cyan-400">legacy?</span>
                    </h2>
                    <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light space-y-4 max-w-3xl mx-auto">
                        <p>If you’re looking for comfort, this may not be the place.</p>
                        <p>If you’re looking to learn fast, build real systems, and grow with responsibility — <span className="text-gray-900 dark:text-white font-medium">welcome.</span></p>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 4: OPPORTUNITIES */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <h2 className="text-3xl font-syncopate font-bold mb-12">Opportunities</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Internships */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-300"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 pointer-events-none">
                            <svg className="w-32 h-32 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                        </div>

                        <h3 className="text-xl font-bold mb-4 font-syncopate tracking-widest text-cyan-600 dark:text-cyan-400">INTERNSHIPS</h3>

                        <div className="space-y-6 text-gray-600 dark:text-gray-400">
                            <p className="leading-relaxed">
                                Hands-on exposure to real projects. Work directly with senior team members. Learn how production-grade AI systems are built, deployed, and scaled.
                            </p>
                            <div className="pt-4 border-t border-gray-200 dark:border-white/5">
                                <h4 className="font-bold uppercase text-xs tracking-widest mb-4 text-gray-900 dark:text-white">Roles</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-cyan-400 rounded-full"></span> AI / ML</span>
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-cyan-400 rounded-full"></span> Backend</span>
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-cyan-400 rounded-full"></span> Research</span>
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-cyan-400 rounded-full"></span> Design</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Full-Time Roles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl p-8 md:p-12 group hover:border-white/20 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-bold mb-4 font-syncopate tracking-widest">FULL-TIME POSITIONS</h3>

                        <div className="space-y-6 text-gray-600 dark:text-gray-400">
                            <p className="leading-relaxed">
                                For individuals ready to take ownership and grow with the company.
                            </p>
                            <div className="pt-4 border-t border-gray-200 dark:border-white/5">
                                <h4 className="font-bold uppercase text-xs tracking-widest mb-4 text-gray-900 dark:text-white">Domains</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-gray-400 rounded-full"></span> Engineering</span>
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-gray-400 rounded-full"></span> AI Systems</span>
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-gray-400 rounded-full"></span> Product</span>
                                    <span className="flex items-center gap-2 text-sm"><span className="w-1 h-1 bg-gray-400 rounded-full"></span> Marketing</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: CLOSE / CTA */}
            <section className="py-24 text-center px-6 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
                <h2 className="text-2xl md:text-3xl font-syncopate font-bold mb-12 leading-normal">
                    “If you believe <span className="text-cyan-600 dark:text-cyan-400">you belong here</span>,<br />
                    we’d love to hear from you.”
                </h2>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-black transition-colors rounded-full"
                >
                    Apply Now
                </button>
            </section>

            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default CareersPage;
