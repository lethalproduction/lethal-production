import { motion } from "framer-motion";
import CustomRequest from "@/components/CustomRequest";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// To embed real videos: set `embedUrl` to a YouTube embed URL like
// "https://www.youtube.com/embed/VIDEO_ID"
// Or set `image` to a thumbnail URL for a static preview.

type VideoSample = {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  gradient: string;
  embedUrl?: string;
  image?: string;
};

const VIDEO_SAMPLES: VideoSample[] = [
  {
    id: "v1",
    title: "Cinematic Gaming Intro",
    category: "Intro",
    duration: "0:15",
    description: "High-impact opening sequence with particle effects and dramatic camera work.",
    gradient: "linear-gradient(135deg, #1a0000 0%, #3a0a00 60%, #1a0000 100%)",
  },
  {
    id: "v2",
    title: "Fragmovie Edit",
    category: "Montage",
    duration: "2:30",
    description: "Precision-cut PvP highlight reel with sync beats and colour grading.",
    gradient: "linear-gradient(135deg, #0a0010 0%, #1a0030 60%, #0a0010 100%)",
  },
  {
    id: "v3",
    title: "Lofi Chill Short",
    category: "Short",
    duration: "0:30",
    description: "Relaxed ambient edit with smooth transitions and soft colour palette.",
    gradient: "linear-gradient(135deg, #00100a 0%, #001a10 60%, #00100a 100%)",
  },
  {
    id: "v4",
    title: "Anime-Style Intro",
    category: "Intro",
    duration: "0:20",
    description: "Fast-paced anime-inspired opener with speed lines and glitch effects.",
    gradient: "linear-gradient(135deg, #1a0010 0%, #300020 60%, #1a0010 100%)",
  },
  {
    id: "v5",
    title: "Minecraft Timelapse",
    category: "Edit",
    duration: "1:45",
    description: "Cinematic build timelapse with sweeping drone-style camera angles.",
    gradient: "linear-gradient(135deg, #001000 0%, #002800 60%, #001000 100%)",
  },
  {
    id: "v6",
    title: "Dark Cinematic Reel",
    category: "Reel",
    duration: "1:10",
    description: "Moody, atmospheric edit with volumetric light leaks and heavy colour grading.",
    gradient: "linear-gradient(135deg, #050505 0%, #120505 60%, #050505 100%)",
  },
  {
    id: "v7",
    title: "Hype Outro",
    category: "Outro",
    duration: "0:10",
    description: "Punchy subscribe-and-follow outro with motion graphics and sound design.",
    gradient: "linear-gradient(135deg, #100a00 0%, #281500 60%, #100a00 100%)",
  },
  {
    id: "v8",
    title: "IRL Vlog Edit",
    category: "Edit",
    duration: "3:20",
    description: "Warm, dynamic vlog-style cut with natural transitions and upbeat pacing.",
    gradient: "linear-gradient(135deg, #00080a 0%, #001018 60%, #00080a 100%)",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Intro:    "#ff003c",
  Montage:  "#a78bfa",
  Short:    "#34d399",
  Edit:     "#60a5fa",
  Reel:     "#fb923c",
  Outro:    "#facc15",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function VideoCard({ sample }: { sample: VideoSample }) {
  const catColor = CATEGORY_COLORS[sample.category] ?? "#ff003c";

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
      {/* Preview */}
      <div className="relative aspect-video overflow-hidden">
        {sample.embedUrl ? (
          <iframe
            src={sample.embedUrl}
            title={sample.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : sample.image ? (
          <img
            src={sample.image}
            alt={sample.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{ background: sample.gradient }}
          >
            <span className="font-display font-black text-3xl opacity-10 tracking-widest select-none" style={{ color: catColor }}>
              LP
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

        {/* Play button */}
        {!sample.embedUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,0,60,0.85)", boxShadow: "0 0 24px rgba(255,0,60,0.5)" }}
            >
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Duration badge */}
        <div
          className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-sans font-bold tracking-wide"
          style={{ background: "rgba(0,0,0,0.75)", color: "rgba(255,255,255,0.7)" }}
        >
          {sample.duration}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
        {/* Category chip */}
        <span
          className="text-[10px] font-sans font-bold uppercase tracking-widest w-fit px-2 py-0.5 rounded-full"
          style={{ background: `${catColor}18`, color: catColor }}
        >
          {sample.category}
        </span>

        <h4 className="text-white font-display font-bold text-sm sm:text-base tracking-wide leading-snug">
          {sample.title}
        </h4>
        <p className="text-white/40 font-sans text-xs leading-relaxed flex-1">
          {sample.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function VideoEditing() {
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
          className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[65vw] h-[28vw] rounded-full blur-[130px] opacity-20 mix-blend-screen"
          style={{ background: "rgba(255,0,60,0.25)" }}
        />
        <div
          className="absolute bottom-0 right-[-8%] w-[42vw] h-[42vw] rounded-full blur-[160px] opacity-15 mix-blend-screen"
          style={{ background: "rgba(139,92,246,0.3)" }}
        />
      </div>

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-white/25 text-[10px] uppercase tracking-[0.55em] mb-3 font-sans">
            Lethal Production
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white leading-tight mb-4">
            Video{" "}
            <span style={{ color: "#ff003c", textShadow: "0 0 28px rgba(255,0,60,0.55)" }}>
              Editing
            </span>
          </h1>
          <p className="text-white/40 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
            Intros, montages, short-form edits, and full video productions — crafted with cinematic precision and built to stand out.
          </p>

          {/* Divider */}
          <div
            className="mt-8 h-[1px] w-full"
            style={{ background: "linear-gradient(90deg, rgba(255,0,60,0.5), rgba(139,92,246,0.2), transparent)" }}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20"
        >
          {VIDEO_SAMPLES.map((sample) => (
            <VideoCard key={sample.id} sample={sample} />
          ))}
        </motion.div>

        {/* Custom Request */}
        <CustomRequest
          heading="Want a custom intro or video?"
          body="Tell us what you need — genre, mood, length, references. We'll produce something that's unmistakably you."
          primaryLabel="Submit via Google Form"
          secondaryLabel="Contact via Discord"
        />
      </div>
    </div>
  );
}
