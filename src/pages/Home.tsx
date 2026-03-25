import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030303] overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-lighten bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/dark-texture.png')` }}
      />
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] rounded-full bg-neon-red-dim blur-[140px] opacity-30 mix-blend-screen" />
      <div className="absolute bottom-[5%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-neon-red-dim blur-[160px] opacity-20 mix-blend-screen" />
      <div className="absolute bottom-[15%] right-[-8%] w-[38vw] h-[38vw] rounded-full bg-neon-red-dim blur-[130px] opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_10%,transparent_100%)]" />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 flex flex-col items-center">

        {/* Pre-title label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="text-white/30 text-[10px] sm:text-xs uppercase tracking-[0.45em] mb-8 font-sans font-medium"
        >
          Est. 2024 &nbsp;·&nbsp; Content &amp; Production
        </motion.p>

        {/* Main title — "LETHAL" */}
        <div className="relative">
          {/* Ambient glow behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[80%] h-[60%] bg-neon-red/10 blur-[80px] rounded-full" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative font-display font-black uppercase leading-none tracking-[-0.02em] select-none"
          >
            <span
              className="block text-[clamp(4rem,15vw,13rem)] text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.4) 100%)",
              }}
            >
              Lethal
            </span>
          </motion.h1>

          {/* "PRODUCTION" — delayed, neon red glow */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mt-2 sm:-mt-4 md:-mt-6"
          >
            <span
              className="block font-display font-black uppercase leading-none tracking-[0.06em] text-[clamp(1.6rem,5.5vw,5.2rem)]"
              style={{
                color: "#ff003c",
                textShadow: "0 0 30px rgba(255,0,60,0.8), 0 0 80px rgba(255,0,60,0.4), 0 0 160px rgba(255,0,60,0.15)",
              }}
            >
              Production
            </span>
          </motion.div>
        </div>

        {/* Glowing divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.0, ease: "easeInOut" }}
          className="w-full max-w-xs sm:max-w-sm h-[1px] mt-10 relative"
          style={{ background: "linear-gradient(90deg, transparent, #ff003c, transparent)" }}
        >
          <div className="absolute inset-0 blur-[6px]" style={{ background: "linear-gradient(90deg, transparent, #ff003c, transparent)", opacity: 0.8 }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="mt-8 text-white/45 text-xs sm:text-sm tracking-[0.35em] uppercase font-sans font-medium"
        >
          Gaming &nbsp;·&nbsp; Entertainment &nbsp;·&nbsp; Digital Media
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-[10px] font-sans tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-[1px] h-10"
            style={{ background: "linear-gradient(to bottom, #ff003c99, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const FoundersSection = () => {
  const founders = [
    { name: "Himank Singh", initials: "HS" },
    { name: "Shubh Barman", initials: "SB" },
    { name: "Nehith", initials: "N" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center"
        >
          <p className="text-white/30 text-[10px] uppercase tracking-[0.5em] mb-4 font-sans">The People Behind It</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-wide mb-5">
            Founders
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-red" />
            <div className="w-1.5 h-1.5 rounded-full bg-neon-red" style={{ boxShadow: "0 0 8px #ff003c" }} />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-red" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.28, ease: "easeOut" } }}
              className="group relative"
            >
              {/* Outer glow on hover */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(255,0,60,0.35), transparent 60%)", filter: "blur(1px)" }}
              />

              {/* Card */}
              <div
                className="relative rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center overflow-hidden transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,0,60,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255,0,60,0.1), inset 0 0 40px rgba(255,0,60,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top gradient sheen */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-t-2xl" />

                {/* Avatar */}
                <div className="relative mb-7">
                  <div className="absolute inset-0 rounded-full blur-[22px] opacity-0 group-hover:opacity-70 transition-opacity duration-500" style={{ background: "rgba(255,0,60,0.5)" }} />
                  <div
                    className="w-[88px] h-[88px] rounded-full flex items-center justify-center relative z-10 transition-all duration-400"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: "1.5px solid rgba(255,0,60,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.border = "1.5px solid rgba(255,0,60,0.9)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255,0,60,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.border = "1.5px solid rgba(255,0,60,0.35)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <span className="font-display font-bold text-xl text-white/90 tracking-wider">
                      {founder.initials}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 tracking-wide">
                  {founder.name}
                </h3>
                <p
                  className="text-xs uppercase tracking-[0.3em] font-semibold font-sans"
                  style={{ color: "#ff003c", textShadow: "0 0 12px rgba(255,0,60,0.6)" }}
                >
                  Founder
                </p>

                {/* Corner accents */}
                <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-white/15 rounded-tl-sm" />
                <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-white/15 rounded-tr-sm" />
                <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-white/15 rounded-bl-sm" />
                <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-white/15 rounded-br-sm" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-28 md:py-40 px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[75vh]">
      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto relative w-full">

        {/* Neon left border accent */}
        <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[2px] rounded-full" style={{ background: "#ff003c", boxShadow: "0 0 16px rgba(255,0,60,0.7), 0 0 40px rgba(255,0,60,0.3)" }} />
        <div className="hidden md:block absolute left-0 top-4 w-6 h-[2px] rounded-full bg-neon-red" />
        <div className="hidden md:block absolute left-0 bottom-4 w-6 h-[2px] rounded-full bg-neon-red" />

        <div className="md:pl-14 relative">
          {/* Giant quote watermark */}
          <span className="absolute -top-12 -left-2 md:-left-6 text-[8rem] md:text-[11rem] font-display font-black leading-none pointer-events-none select-none"
            style={{ color: "rgba(255,255,255,0.025)" }}>
            "
          </span>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white/80 leading-relaxed md:leading-relaxed">
            Lethal Production is more than a brand —{" "}
            <span className="text-white font-semibold">it's a statement.</span> Born from raw passion and an unyielding drive to create, we are a versatile, high-energy content production house operating across{" "}
            <span className="text-white font-semibold">gaming, entertainment, digital media, and creative storytelling.</span> We push boundaries, craft content that truly resonates, nurture a thriving creator community, and deliver impactful projects that leave a lasting mark.
          </p>

          <div className="mt-10 h-[1px] w-24 rounded-full" style={{ background: "linear-gradient(90deg, rgba(255,0,60,0.8), transparent)" }} />

          <p
            className="mt-8 text-lg sm:text-xl md:text-2xl font-display font-bold uppercase tracking-widest"
            style={{ color: "#ff003c", textShadow: "0 0 24px rgba(255,0,60,0.6), 0 0 60px rgba(255,0,60,0.2)" }}
          >
            This is not just production.<br className="hidden sm:block" /> This is war on mediocrity.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 relative z-10 mt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-black text-lg tracking-[0.15em] uppercase">
          Lethal{" "}
          <span style={{ color: "#ff003c", textShadow: "0 0 14px rgba(255,0,60,0.6)" }}>
            Production
          </span>
        </div>
        <p className="text-white/25 text-xs font-sans tracking-wider">
          © {new Date().getFullYear()} Lethal Production. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-neon-red/80 selection:text-white relative">
      <Background />
      <HeroSection />
      <FoundersSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
