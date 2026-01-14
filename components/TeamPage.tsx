import React from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

// --- DATA ---
const TEAM = [
    {
        name: "Abhishek Rajput",
        role: "Head of Operations",
        responsibility: "Leads system architecture, strategy, and overall execution.",
        initials: "AR",
        accent: "text-cyan-400",
        image: "https://pbs.twimg.com/media/G-oxf0_bMAAH394?format=jpg&name=small"
    },
    {
        name: "Uddit",
        role: "Head of Development",
        responsibility: "Owns engineering, system reliability, and production execution.",
        initials: "UD",
        accent: "text-blue-400",
        image: "https://pbs.twimg.com/media/G-orW9WbIAAIK5k?format=jpg&name=small"
    },
    {
        name: "Abhishek Gupta",
        role: "Head of Marketing",
        responsibility: "Drives positioning, messaging, and go-to-market clarity.",
        initials: "AG",
        accent: "text-purple-400",
        image: "https://pbs.twimg.com/media/G-orSj0bIAA5xOw?format=jpg&name=small"
    },
    {
        name: "Khushi",
        role: "Head of HR",
        responsibility: "Manages people operations, culture, and team alignment.",
        initials: "KH",
        accent: "text-rose-400",
        image: "https://pbs.twimg.com/media/G-oraxNaIAAyV43?format=jpg&name=small"
    },
    {
        name: "Ishani",
        role: "Head of Research",
        responsibility: "Focuses on AI research, intelligence systems, and experimentation.",
        initials: "IS",
        accent: "text-emerald-400",
        image: "https://pbs.twimg.com/media/G-ordoFaUAA6Rm6?format=jpg&name=small"
    },
    {
        name: "Dhanraj",
        role: "Head of Creative",
        responsibility: "Leads visual systems, brand execution, and creative direction.",
        initials: "DH",
        accent: "text-orange-400",
        image: "https://pbs.twimg.com/media/G-oqa6xbgAAUKVG?format=jpg&name=small"
    }
];

const PlaceholderAvatar = ({ initials, accent, image }: { initials: string, accent: string, image?: string }) => (
    <div className="w-full h-full bg-white/5 flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
        {/* Animated Background (Always Active) */}
        <div className="absolute inset-0 opacity-20 z-0"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
        />

        {/* Profile Image with Glassmorphism & Opacity */}
        {image && (
            <div className="absolute inset-0 z-10 p-4">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:border-white/40 transition-all duration-500">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-full h-full object-cover object-[center_15%] opacity-75 group-hover:opacity-85 transition-opacity duration-500 scale-100 group-hover:scale-[1.02]"
                    />
                    {/* Glass Overlay/Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
            </div>
        )}

        {/* Fallback Initials (Only if no image, though all have images now) */}
        {!image && <div className={`text-2xl font-syncopate font-bold ${accent} opacity-50 z-10`}>{initials}</div>}

    </div>
);

const TeamPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="pt-32 pb-20 min-h-screen">

            {/* SECTION 1: OPENING STATEMENT */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-syncopate font-bold text-white mb-6 leading-tight">
                        The People <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Behind the Systems</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed mx-auto md:mx-0">
                        Vatalique is built by a multidisciplinary team focused on execution, intelligence, and scale.
                    </p>
                </motion.div>
            </section>

            {/* SECTION 2: TEAM GRID */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
                        >
                            {/* Avatar Area */}
                            <div className="aspect-square w-full border-b border-white/5">
                                <PlaceholderAvatar initials={member.initials} accent={member.accent} image={member.image} />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 space-y-4">
                                <div>
                                    <h3 className="text-xl font-syncopate font-bold text-white group-hover:text-cyan-50 transition-colors duration-300">{member.name}</h3>
                                    <p className={`text-xs font-bold uppercase tracking-widest ${member.accent} mt-1 group-hover:tracking-[0.25em] transition-all duration-300`}>{member.role}</p>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-cyan-500/50 transition-colors duration-300">
                                    {member.responsibility}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: PHILOSOPHY */}
            <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32 text-center">
                <div className="border border-white/10 bg-white/[0.01] rounded-3xl p-12 md:p-16">
                    <h2 className="text-2xl font-syncopate font-bold text-white mb-6">Built Like a System</h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        We operate as a tightly aligned team — engineering, intelligence, design, and execution working together as one system.
                    </p>
                </div>
            </section>

            {/* SECTION 4: CLOSE */}
            <section className="py-24 text-center px-6">
                <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white max-w-4xl mx-auto leading-normal mb-12">
                    “You’re not hiring individuals.<br />
                    <span className="text-cyan-400">You’re hiring a system.”</span>
                </h2>

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

export default TeamPage;
