import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: "Jamee",
    role: "Khandarkar • Matrimonial",
    quote: "“Vatalique helped us automate critical workflows that were previously handled manually. The system they built didn’t just work — it scaled with our users and reduced operational friction significantly.”",
    image: "/vatalique_face_1.jpg",
    link: "https://khandarkar.com/explore",
    btn: "Visit Site"
  },
  {
    name: "Darshan",
    role: "Zammernow • Fashion QC",
    quote: "“We needed automation that could keep up with speed, volume, and growth. Vatalique delivered systems that run reliably without constant oversight. This wasn’t a demo — it was real execution.”",
    image: "/vatalique_face_2.jpg",
    link: "https://zammernow.com/",
    btn: "Visit Site"
  },
  {
    name: "Narayan",
    role: "Shipsarthi • Logistics",
    quote: "“Our operations involved too much manual coordination. Vatalique designed intelligent systems that streamlined decision-making and removed operational bottlenecks completely.”",
    image: "/vatalique_face_3.jpg",
    link: "https://shipsarthi.com/",
    btn: "Visit Site"
  },
  {
    name: "Siddhart",
    role: "Gantavyam • Mobility",
    quote: "“Building for safety requires reliability and trust. Vatalique approached our system with that seriousness. The automation they delivered made our operations more predictable and scalable.”",
    image: "/vatalique_face_4.jpg",
    link: "https://www.gantavyam.site/",
    btn: "Visit Site"
  },
  {
    name: "Bikas Lohia",
    role: "Sitabience IP • Legal Tech",
    quote: "“The system Vatalique built transformed how patents are drafted. Clear inputs, structured intelligence, and reliable outputs. It saved time, reduced complexity, and delivered consistent results.”",
    image: "/vatalique_face_5.jpg",
    link: "https://www.patface.com/",
    btn: "See Work"
  }
];

const InteractiveDashboard: React.FC = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  // Removed isMeasured state to ensure visibility

  useEffect(() => {
    if (containerRef.current) {
      const measure = () => {
        if (containerRef.current) {
          // Total width of 3 sets. One set = total / 3
          const singleSetWidth = containerRef.current.scrollWidth / 3;
          setWidth(singleSetWidth);
          // Set initial position to -singleSetWidth (showing Set 2)
          // This ensures we have buffer on left (Set 1) and right (Set 3)
          x.set(-singleSetWidth);
        }
      };
      measure();
      // Force a remeasure after a short delay to ensure DOM is ready
      setTimeout(measure, 100);
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (!width) return;

    let moveBy = 0;

    // Auto-scroll if not interacting
    if (!isHovered && !isDragging) {
      moveBy = -0.5 * (delta / 16); // Constant calm speed
    }

    // Apply movement
    let currentX = x.get() + moveBy;

    // Wrap Logic (Bi-directional)
    // We are viewing [Set 1][Set 2][Set 3]
    // "Center" is Set 2, at position -width.
    // If we drift left to -2*width (Start of Set 3), jump back to -width.
    // If we drift right to 0 (Start of Set 1), jump back to -width.

    if (currentX <= -width * 2) {
      currentX += width;
    } else if (currentX >= 0) {
      currentX -= width;
    }

    x.set(currentX);
  });

  return (
    <section id="proof" className="relative z-10 px-6 max-w-7xl mx-auto py-32 overflow-hidden">
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-syncopate font-bold mb-4 text-white">Whom We’ve Built For</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Founders who trusted Vatalique to replace manual work with real intelligence.</p>
        </div>

        {/* MASK CONTAINER */}
        <div className="relative w-full overflow-hidden mask-fade-sides">
          {/*
               We render 3 sets.
               Set 1: Initial view
               Set 2: The seamless follower
               Set 3: Buffer for drag
            */}
          <motion.div
            ref={containerRef}
            className="flex flex-nowrap gap-6 w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -100000, right: 100000 }} // Effectively infinite
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
              <div key={idx} className="w-[300px] md:w-[350px] flex-shrink-0 flex-grow-0 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-cyan-500/30 transition-colors flex flex-col justify-between h-auto select-none group">
                <div className="mb-6 pointer-events-none"> {/* Disable pointer events on text to prevent text selection while dragging */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden shrink-0 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.name}</h4>
                      <p className="text-xs text-cyan-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white hover:text-cyan-400 flex items-center gap-2 transition-colors mt-auto w-max pointer-events-auto" onPointerDown={(e) => e.stopPropagation()}>
                  {item.btn} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default InteractiveDashboard;
