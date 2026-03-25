import { motion } from "framer-motion";

// ─── CREATORS ─────────────────────────────────────────────────────────────────
// Set `avatar` to a custom image URL if you have one.
// YouTube channel avatars cannot be loaded directly due to browser CORS restrictions,
// so styled initials-based avatars are used by default.

type Creator = {
  id: string;
  name: string;
  channelUrl: string;
  description: string;
  initials: string;
  accentColor: string;
  glowColor: string;
  avatar?: string;
};

const CREATORS: Creator[] = [
  {
    id: "mr-trap",
    name: "Mr Trap",
    channelUrl: "https://www.youtube.com/channel/UCduDn-LMmTNsBRjCI0xopeQ",
    description:
      "A dynamic content creator known for engaging content and strong audience connection. Consistently delivering high-energy videos that keep viewers hooked.",
    initials: "MT",
    accentColor: "#ff003c",
    glowColor: "rgba(255,0,60,0.45)",
  },
  {
    id: "ruim-pirate",
    name: "Ruim Pirate",
    channelUrl: "https://www.youtube.com/channel/UCDofWxFAnXPcvz2Ijdzq3FA",
    description:
      "A creative and entertaining creator bringing unique style and energy to the community. Known for bold storytelling and a fearless approach to content.",
    initials: "RP",
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.45)",
  },
];

// YouTube play icon SVG
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-3xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Animated glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${creator.glowColor.replace("0.45", "0.12")} 0%, transparent 70%)`,
          border: `1px solid ${creator.accentColor}40`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${creator.accentColor}, transparent)`,
          boxShadow: `0 0 20px ${creator.accentColor}`,
        }}
      />

      <div className="relative z-10 p-8 sm:p-10 flex flex-col items-center text-center gap-6">

        {/* Avatar */}
        <div className="relative">
          {creator.avatar ? (
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-28 h-28 rounded-full object-cover"
              style={{
                border: `2px solid ${creator.accentColor}55`,
                boxShadow: `0 0 30px ${creator.glowColor}`,
              }}
            />
          ) : (
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center font-display font-black text-3xl relative"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${creator.accentColor}30, ${creator.accentColor}08)`,
                border: `2px solid ${creator.accentColor}40`,
                color: creator.accentColor,
                boxShadow: `0 0 0 1px ${creator.accentColor}20, 0 0 40px ${creator.glowColor.replace("0.45", "0.2")}`,
              }}
            >
              <span style={{ textShadow: `0 0 20px ${creator.accentColor}` }}>
                {creator.initials}
              </span>
            </div>
          )}

          {/* Animated ring */}
          <motion.div
            className="absolute -inset-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
            style={{ border: `1px solid ${creator.accentColor}35` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* YouTube badge */}
          <div
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "#ff0000", boxShadow: "0 0 12px rgba(255,0,0,0.5)" }}
          >
            <YouTubeIcon className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <h3
            className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide"
            style={{
              color: "#fff",
              textShadow: `0 0 0 transparent`,
            }}
          >
            <span
              className="group-hover:text-shadow-glow transition-all duration-300"
              style={{ color: creator.accentColor, textShadow: `0 0 0 transparent` }}
              onMouseEnter={() => {}}
            >
              {creator.name}
            </span>
          </h3>
          <div
            className="inline-flex items-center gap-1.5 mx-auto px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest"
            style={{
              background: `${creator.accentColor}12`,
              color: creator.accentColor,
              border: `1px solid ${creator.accentColor}25`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: creator.accentColor, boxShadow: `0 0 6px ${creator.accentColor}` }}
            />
            Brand Ambassador
          </div>
        </div>

        {/* Description */}
        <p className="text-white/45 font-sans text-sm sm:text-base leading-relaxed max-w-sm">
          {creator.description}
        </p>

        {/* Divider */}
        <div
          className="w-full h-[1px] opacity-30"
          style={{ background: `linear-gradient(90deg, transparent, ${creator.accentColor}, transparent)` }}
        />

        {/* CTA */}
        <a href={creator.channelUrl} target="_blank" rel="noopener noreferrer" className="w-full">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-sans font-bold text-sm uppercase tracking-widest transition-all duration-300"
            style={{
              background: `${creator.accentColor}18`,
              color: creator.accentColor,
              border: `1px solid ${creator.accentColor}35`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = creator.accentColor;
              el.style.color = "#fff";
              el.style.boxShadow = `0 0 32px ${creator.glowColor}`;
              el.style.border = `1px solid ${creator.accentColor}`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = `${creator.accentColor}18`;
              el.style.color = creator.accentColor;
              el.style.boxShadow = "none";
              el.style.border = `1px solid ${creator.accentColor}35`;
            }}
          >
            <YouTubeIcon className="w-4 h-4" />
            Visit Channel
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}

export default function BrandAmbassadors() {
  return (
    <div
      className="min-h-screen text-white selection:bg-neon-red/80 selection:text-white relative"
      style={{ background: "#030303" }}
    >
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.1] mix-blend-lighten bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/dark-texture.png')` }}
        />
        <div
          className="absolute top-[-5%] left-[20%] w-[50vw] h-[30vw] rounded-full blur-[140px] opacity-20 mix-blend-screen"
          style={{ background: "rgba(255,0,60,0.3)" }}
        />
        <div
          className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full blur-[150px] opacity-15 mix-blend-screen"
          style={{ background: "rgba(168,85,247,0.3)" }}
        />
      </div>

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] mb-4 font-sans">
            Lethal Production
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white leading-tight mb-4">
            Brand{" "}
            <span style={{ color: "#ff003c", textShadow: "0 0 32px rgba(255,0,60,0.6)" }}>
              Ambassadors
            </span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-neon-red/50" />
            <div
              className="w-1.5 h-1.5 rounded-full bg-neon-red"
              style={{ boxShadow: "0 0 8px rgba(255,0,60,0.8)" }}
            />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-neon-red/50" />
          </div>

          <p className="text-white/40 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            These creators represent the Lethal Production brand. They embody our values — quality content, bold creativity, and relentless energy.
          </p>
        </motion.div>

        {/* Creator cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {CREATORS.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-center text-white/18 font-sans text-xs mt-16 tracking-wider"
        >
          Interested in becoming a brand ambassador? Reach out via the{" "}
          <a href="/contact" className="text-neon-red/50 hover:text-neon-red transition-colors duration-200 underline underline-offset-2">
            Contact
          </a>{" "}
          page.
        </motion.p>
      </div>
    </div>
  );
}
