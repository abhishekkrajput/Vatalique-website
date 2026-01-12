import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TheVataliqueHouse: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax ONLY for the image
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    // Slow fade in for valid section entry
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="px-6 md:px-12 max-w-7xl mx-auto mb-20 flex flex-col items-center">

            {/* 1. SEPARATE TITLE HEADER */}
            <motion.div
                style={{ opacity }}
                className="mb-10 text-center z-10"
            >
                <h2 className="text-xl md:text-2xl font-syncopate font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    The Vatalique House
                </h2>
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mx-auto mt-4" />
            </motion.div>

            {/* 2. MAIN COMPONENT CONTAINER */}
            <div className="relative w-full h-[500px] md:h-[600px] group rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 backdrop-blur-sm">

                {/* LAYER A: IMAGE (SEMI-TRANSPARENT) */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-0">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-[-5%] w-[110%] h-[110%]"
                    >
                        <img
                            src="https://pbs.twimg.com/media/G-blMoSacAAYCiQ?format=jpg&name=small"
                            alt=""
                            className="w-full h-full object-cover filter grayscale-[100%] contrast-[1.2] brightness-[1.1] opacity-50 mix-blend-luminosity transition-all duration-700 ease-out"
                            style={{
                                objectPosition: 'center 35%',
                                transform: 'translateZ(0)',
                            }}
                        />

                        {/* Lighting Layers (Preserving Transparency) */}
                        <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />

                        {/* Clear Logo Mask (Radial Light) */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] mix-blend-overlay pointer-events-none" />

                        {/* Text Contrast Gradient (Strong Bottom) */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />

                        {/* Texture */}
                        <div
                            className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />
                    </motion.div>
                </div>

                {/* LAYER B: GLASS FRAME (STATIC, NO TRANSFORM) */}
                <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem]">
                    {/* 1. Main Border */}
                    <div className="absolute inset-0 border border-white/20 rounded-[2rem]" />
                    {/* 2. Inner Highlight (Top/Left) */}
                    <div className="absolute inset-0 border-t border-l border-white/20 rounded-[2rem] opacity-70" />
                    {/* 3. Inner Shadow (Depth) */}
                    <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]" />
                    {/* 4. Frost Edge Only */}
                    <div className="absolute inset-0 rounded-[2rem] border-[1px] border-transparent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" />
                </div>

                {/* LAYER C: TEXT CONTENT (FLOATING, NO TRANSFORM) */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end items-center text-center p-8 pb-10 pointer-events-none">
                    <div className="max-w-4xl space-y-5">
                        {/* Primary Sentence - Crystal Clear */}
                        <p className="text-white text-2xl md:text-3xl font-bold leading-snug tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)] subpixel-antialiased">
                            We are a small, focused team building systems that run inside real businesses.
                        </p>

                        {/* Secondary Sentence */}
                        <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] antialiased opacity-95">
                            Every agent, every workflow, every decision layer you see is designed, deployed, and owned by us — end to end.
                        </p>

                        {/* Signature Line */}
                        <div className="pt-8">
                            <div className="w-16 h-[1px] bg-white/40 mx-auto mb-5 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                            <p className="text-white text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,1)] antialiased">
                                No Templates · No Shortcuts · No Abstraction Without Accountability
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheVataliqueHouse;
