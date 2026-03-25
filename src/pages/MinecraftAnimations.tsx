import { motion } from "framer-motion";
import CustomRequest from "@/components/CustomRequest";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// To add real preview images, set `image` to a URL or public path.
// Styles are fully editable below.

type AnimStyle = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
};

const ANIM_STYLES: AnimStyle[] = [
  {
    id: "a1",
    title: "Cinematic Intro",
    description: "Epic slow-motion reveal of your character with dynamic camera work and particle effects.",
    tags: ["Cinematic", "Intro"],
    gradient: "linear-gradient(135deg, #0a0a00 0%, #1a1a00 40%, #2a2000 100%)",
  },
  {
    id: "a2",
    title: "PvP Montage",
    description: "Fast-cut action sequence showcasing your skin in intense combat with hit-effects.",
    tags: ["Action", "Hype"],
    gradient: "linear-gradient(135deg, #1a0000 0%, #3a0a00 40%, #1a0000 100%)",
  },
  {
    id: "a3",
    title: "Chill Lofi Walk",
    description: "Smooth looping animation of your character exploring a cozy Minecraft world.",
    tags: ["Chill", "Loop"],
    gradient: "linear-gradient(135deg, #000a0a 0%, #001a1a 40%, #002020 100%)",
  },
  {
    id: "a4",
    title: "Speedrun Sequence",
    description: "Hyper-speed animation run from spawn to end portal with split-second edits.",
    tags: ["Hype", "Speed"],
    gradient: "linear-gradient(135deg, #0a000a 0%, #1a001a 40%, #300030 100%)",
  },
  {
    id: "a5",
    title: "Dark Cinematic",
    description: "Moody, atmospheric animation with volumetric lighting and nether-themed visuals.",
    tags: ["Dark", "Cinematic"],
    gradient: "linear-gradient(135deg, #050505 0%, #100505 40%, #1a0808 100%)",
  },
  {
    id: "a6",
    title: "Funny Moments",
    description: "Comedic slapstick animation — perfect for highlight reels and YouTube intros.",
    tags: ["Funny", "Viral"],
    gradient: "linear-gradient(135deg, #001a00 0%, #002a00 40%, #003000 100%)",
  },
  {
    id: "a7",
    title: "MLG Clutch",
    description: "Frame-by-frame recreation of clutch moments — water bucket, pearl, TNT and more.",
    tags: ["Action", "Epic"],
    gradient: "linear-gradient(135deg, #1a0800 0%, #2a1000 40%, #1a0800 100%)",
  },
  {
    id: "a8",
    title: "Channel Banner Anim",
    description: "Looping animated banner featuring your skin — ready for YouTube or Twitch.",
    tags: ["Cinematic", "Loop"],
    gradient: "linear-gradient(135deg, #00001a 0%, #00002a 40%, #000030 100%)",
  },
];

// Tag colours
const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Cinematic: { bg: "rgba(139,92,246,0.15)", text: "#a78bfa" },
  Intro:     { bg: "rgba(59,130,246,0.13)", text: "#60a5fa" },
  Action:    { bg: "rgba(255,0,60,0.13)",   text: "#ff4d6d" },
  Hype:      { bg: "rgba(249,115,22,0.13)", text: "#fb923c" },
  Chill:     { bg: "rgba(16,185,129,0.12)", text: "#34d399" },
  Loop:      { bg: "rgba(96,165,250,0.12)", text: "#93c5fd" },
  Speed:     { bg: "rgba(250,204,21,0.12)", text: "#facc15" },
  Dark:      { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.55)" },
  Funny:     { bg: "rgba(250,204,21,0.12)", text: "#facc15" },
  Viral:     { bg: "rgba(236,72,153,0.13)", text: "#f472b6" },
  Epic:      { bg: "rgba(255,0,60,0.13)",   text: "#ff003c" },
};

function Tag({ label }: { label: string }) {
  const c = TAG_COLORS[label] ?? { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.5)" };
  return (
    <span
      className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full tracking-wide"
      style={{ background: c.bg, color: c.text }}
    >
      {label}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function AnimCard({ style }: { style: AnimStyle }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.22, ease: "easeOut" } }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = "1px solid rgba(255,0,60,0.4)";
        el.style.boxShadow = "0 0 32px rgba(255,0,60,0.1), 0 12px 40px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.border = "1px solid rgba(255,255,255,0.07)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Preview area */}
      <div className="relative aspect-video overflow-hidden">
        {style.image ? (
          <img
            src={style.image}
            alt={style.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105 relative"
            style={{ background: style.gradient }}
          >
            {/* Minecraft pixel watermark */}
            <div className="relative select-none">
              {/* Pixel-art style "MC" */}
              <div className="grid grid-cols-8 gap-[2px] opacity-20">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-[1px]"
                    style={{
                      background: [0,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,31].includes(i)
                        ? "#5a9e2f"
                        : "transparent",
                    }}
                  />
                ))}
              </div>
            </div>
            <span
              className="font-display font-black text-2xl opacity-15 tracking-widest"
              style={{ color: "#5a9e2f" }}
            >
              MC ANIM
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Play icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,0,60,0.85)", boxShadow: "0 0 24px rgba(255,0,60,0.5)" }}
          >
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-1">
        <h4 className="text-white font-display font-bold text-sm sm:text-base tracking-wide">
          {style.title}
        </h4>
        <p className="text-white/45 font-sans text-xs leading-relaxed flex-1">
          {style.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {style.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
    </motion.div>
  );
}

export default function MinecraftAnimations() {
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
        {/* Green Minecraft-tinted glow up top, red accent bottom */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] rounded-full blur-[130px] opacity-15 mix-blend-screen"
          style={{ background: "rgba(90,158,47,0.4)" }}
        />
        <div
          className="absolute bottom-[5%] right-[-5%] w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-15 mix-blend-screen"
          style={{ background: "rgba(255,0,60,0.3)" }}
        />
      </div>

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="text-white/25 text-[10px] uppercase tracking-[0.55em] mb-3 font-sans">
            Lethal Production
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white leading-tight mb-4">
            Minecraft{" "}
            <span
              style={{
                color: "#5a9e2f",
                textShadow: "0 0 28px rgba(90,158,47,0.6), 0 0 60px rgba(90,158,47,0.2)",
              }}
            >
              Animations
            </span>
          </h1>

          {/* Dedicated section notice */}
          <div
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-6"
            style={{
              background: "rgba(90,158,47,0.07)",
              border: "1px solid rgba(90,158,47,0.25)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#5a9e2f", boxShadow: "0 0 8px rgba(90,158,47,0.8)" }}
            />
            <p className="text-white/70 font-sans text-xs sm:text-sm font-medium">
              This section is dedicated <span className="text-white font-semibold">only</span> to Minecraft Animations
            </p>
          </div>

          <p className="text-white/40 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Browse our animation styles below. Pick a vibe that matches your vision — your character skin will be used to{" "}
            <span className="text-white/70 font-medium">recreate the same animation with your identity</span>. Every piece is built from scratch, frame by frame.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full h-[1px] mb-14"
          style={{ background: "linear-gradient(90deg, rgba(90,158,47,0.5), rgba(255,0,60,0.3), transparent)" }}
        />

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { step: "01", label: "Choose a Style", desc: "Browse the animations below and pick one that matches your vision." },
            { step: "02", label: "Send Your Skin", desc: "Submit your Minecraft skin or IGN via the request form." },
            { step: "03", label: "Receive Your Anim", desc: "We recreate the animation with your character — delivered to you." },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-xl p-5 flex flex-col gap-2"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="font-display font-black text-2xl"
                style={{ color: "rgba(255,0,60,0.5)" }}
              >
                {item.step}
              </span>
              <p className="text-white font-sans font-semibold text-sm">{item.label}</p>
              <p className="text-white/35 font-sans text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Animation styles grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-widest text-white">
            Animation Styles
          </h2>
          <div
            className="flex-1 h-[1px]"
            style={{ background: "linear-gradient(90deg, rgba(90,158,47,0.4), transparent)" }}
          />
          <span className="text-white/20 text-xs font-sans tabular-nums">{ANIM_STYLES.length}</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20"
        >
          {ANIM_STYLES.map((style) => (
            <AnimCard key={style.id} style={style} />
          ))}
        </motion.div>

        {/* ── Custom Request ── */}
        <CustomRequest
          heading="Want your own custom animation?"
          body="Pick a style above, drop your skin or IGN, and share any references. We'll build a one-of-a-kind Minecraft animation just for you."
          primaryLabel="Submit Animation Request"
          secondaryLabel="Join our Discord"
        />
      </div>
    </div>
  );
}
