import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomRequest from "@/components/CustomRequest";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// Replace this URL with your actual Google Form link
const GOOGLE_FORM_URL = "https://forms.google.com/";

// Tag colour palette
const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Funny:      { bg: "rgba(250,204,21,0.12)",  text: "#facc15" },
  Cinematic:  { bg: "rgba(139,92,246,0.14)",  text: "#a78bfa" },
  Clickbait:  { bg: "rgba(255,0,60,0.13)",    text: "#ff4d6d" },
  Dark:       { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.6)" },
  Action:     { bg: "rgba(59,130,246,0.12)",  text: "#60a5fa" },
  Hype:       { bg: "rgba(249,115,22,0.13)",  text: "#fb923c" },
  Chill:      { bg: "rgba(16,185,129,0.12)",  text: "#34d399" },
  Viral:      { bg: "rgba(236,72,153,0.13)",  text: "#f472b6" },
  Emotional:  { bg: "rgba(96,165,250,0.12)",  text: "#93c5fd" },
  Epic:       { bg: "rgba(255,0,60,0.13)",    text: "#ff003c" },
};

// Gradient swatches for placeholder thumbnails
const GRADIENTS = [
  "linear-gradient(135deg, #1a0a0a 0%, #3d0b0b 50%, #1a0a0a 100%)",
  "linear-gradient(135deg, #0a0a1a 0%, #0b0b3d 50%, #0a0a1a 100%)",
  "linear-gradient(135deg, #0a1a0a 0%, #0b2e0b 50%, #0a1a0a 100%)",
  "linear-gradient(135deg, #1a0f00 0%, #3d2200 50%, #1a0f00 100%)",
  "linear-gradient(135deg, #1a001a 0%, #3d003d 50%, #1a001a 100%)",
  "linear-gradient(135deg, #001a1a 0%, #003d3d 50%, #001a1a 100%)",
];

// ─── THUMBNAIL DATA ───────────────────────────────────────────────────────────
// To add real thumbnail images, set `image` to a URL or import path.
// Tags are fully editable — see TAG_COLORS above for available tags.
type Thumbnail = {
  id: string;
  title: string;
  tags: string[];
  gradient: string;
  image?: string;
};

type Category = {
  id: string;
  label: string;
  thumbnails: Thumbnail[];
};

const CATEGORIES: Category[] = [
  {
    id: "gaming",
    label: "Gaming",
    thumbnails: [
      { id: "g1", title: "Clutch Moment",       tags: ["Cinematic", "Hype"],     gradient: GRADIENTS[0] },
      { id: "g2", title: "Solo Win",            tags: ["Clickbait", "Action"],   gradient: GRADIENTS[1] },
      { id: "g3", title: "100 Days Challenge",  tags: ["Funny", "Viral"],        gradient: GRADIENTS[2] },
      { id: "g4", title: "Boss Fight",          tags: ["Epic", "Dark"],          gradient: GRADIENTS[4] },
      { id: "g5", title: "Speed Run",           tags: ["Hype", "Action"],        gradient: GRADIENTS[0] },
      { id: "g6", title: "Final Zone",          tags: ["Cinematic", "Clickbait"],gradient: GRADIENTS[5] },
    ],
  },
  {
    id: "irl",
    label: "IRL",
    thumbnails: [
      { id: "i1", title: "Day in My Life",       tags: ["Chill", "Emotional"],   gradient: GRADIENTS[3] },
      { id: "i2", title: "Street Interview",     tags: ["Funny", "Viral"],       gradient: GRADIENTS[1] },
      { id: "i3", title: "Hidden Camera Prank",  tags: ["Funny", "Clickbait"],   gradient: GRADIENTS[2] },
      { id: "i4", title: "Midnight Drive",       tags: ["Cinematic", "Dark"],    gradient: GRADIENTS[5] },
    ],
  },
  {
    id: "streaming",
    label: "Streaming",
    thumbnails: [
      { id: "s1", title: "Sub Goal Hit",        tags: ["Hype", "Emotional"],    gradient: GRADIENTS[4] },
      { id: "s2", title: "Viewer Games Night",  tags: ["Funny", "Chill"],       gradient: GRADIENTS[1] },
      { id: "s3", title: "Late Night Stream",   tags: ["Dark", "Cinematic"],    gradient: GRADIENTS[0] },
      { id: "s4", title: "First Stream Ever",   tags: ["Emotional", "Viral"],   gradient: GRADIENTS[2] },
      { id: "s5", title: "10K Celebration",     tags: ["Hype", "Epic"],         gradient: GRADIENTS[3] },
    ],
  },
  {
    id: "other",
    label: "Other",
    thumbnails: [
      { id: "o1", title: "Brand Deal Reveal",   tags: ["Cinematic", "Viral"],   gradient: GRADIENTS[5] },
      { id: "o2", title: "Shorts Compilation",  tags: ["Funny", "Action"],      gradient: GRADIENTS[0] },
      { id: "o3", title: "Year in Review",      tags: ["Emotional", "Epic"],    gradient: GRADIENTS[3] },
    ],
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  const colors = TAG_COLORS[label] ?? { bg: "rgba(255,255,255,0.07)", text: "rgba(255,255,255,0.55)" };
  return (
    <span
      className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full tracking-wide"
      style={{ background: colors.bg, color: colors.text }}
    >
      {label}
    </span>
  );
}

function ThumbnailCard({ thumb }: { thumb: Thumbnail }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
      className="group relative rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,0,60,0.45)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(255,0,60,0.12), 0 8px 32px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Thumbnail image / placeholder */}
      <div className="relative aspect-video overflow-hidden">
        {thumb.image ? (
          <img
            src={thumb.image}
            alt={thumb.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{ background: thumb.gradient }}
          >
            {/* LP watermark */}
            <span
              className="font-display font-black text-3xl sm:text-4xl opacity-10 select-none"
              style={{ color: "#ff003c" }}
            >
              LP
            </span>
          </div>
        )}

        {/* Red glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(255,0,60,0.08) 100%)" }}
        />
      </div>

      {/* Card body */}
      <div className="p-3 sm:p-4 flex flex-col gap-2.5 flex-1">
        {/* Title */}
        <h4 className="text-white/90 font-sans font-semibold text-sm leading-snug line-clamp-2">
          {thumb.title}
        </h4>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {thumb.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Request Similar button */}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-2"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2 px-3 rounded-lg text-[11px] font-sans font-semibold uppercase tracking-widest transition-all duration-250"
            style={{
              background: "rgba(255,0,60,0.08)",
              border: "1px solid rgba(255,0,60,0.25)",
              color: "#ff4d6d",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,0,60,0.18)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,0,60,0.55)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(255,0,60,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,0,60,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,0,60,0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Request Similar
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}

function CategorySection({ category, query }: { category: Category; query: string }) {
  const filtered = useMemo(() => {
    if (!query.trim()) return category.thumbnails;
    const q = query.toLowerCase();
    return category.thumbnails.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [category.thumbnails, query]);

  if (filtered.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 sm:mb-20"
    >
      {/* Category heading */}
      <div className="flex items-center gap-4 mb-7">
        <h2 className="font-display font-black uppercase text-xl sm:text-2xl tracking-widest text-white">
          {category.label}
        </h2>
        <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(90deg, rgba(255,0,60,0.5), transparent)" }} />
        <span className="text-white/25 text-xs font-sans tabular-nums">{filtered.length}</span>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((thumb) => (
            <ThumbnailCard key={thumb.id} thumb={thumb} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Thumbnails() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const displayQuery = activeFilter
    ? activeFilter
    : query;

  const QUICK_FILTERS = ["Funny", "Cinematic", "Clickbait", "Dark", "Hype", "Epic"];

  const visibleCategories = CATEGORIES.filter((cat) =>
    cat.thumbnails.some((t) => {
      if (!displayQuery.trim()) return true;
      const q = displayQuery.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    })
  );

  return (
    <div
      className="min-h-screen text-white selection:bg-neon-red/80 selection:text-white relative"
      style={{ background: "#030303" }}
    >
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-lighten bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/dark-texture.png')` }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] rounded-full blur-[120px] opacity-20 mix-blend-screen" style={{ background: "rgba(255,0,60,0.2)" }} />
      </div>

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-white/25 text-[10px] uppercase tracking-[0.55em] mb-3 font-sans">Lethal Production</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white mb-2">
            Thumb<span style={{ color: "#ff003c", textShadow: "0 0 24px rgba(255,0,60,0.55)" }}>nails</span>
          </h1>
          <p className="text-white/35 text-sm font-sans max-w-lg mt-3">
            Browse our work across categories. Found a style you love? Hit "Request Similar" to submit a brief.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mb-5"
        >
          <div
            className="relative flex items-center rounded-xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            {/* Search icon */}
            <svg
              className="absolute left-4 w-4 h-4 text-white/30 pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveFilter(null); }}
              placeholder="Search thumbnails by title or tag…"
              className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm font-sans text-white placeholder-white/25 outline-none"
              style={{ caretColor: "#ff003c" }}
            />

            {(query || activeFilter) && (
              <button
                onClick={() => { setQuery(""); setActiveFilter(null); }}
                className="absolute right-4 text-white/30 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Quick-filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-12 sm:mb-16"
        >
          {QUICK_FILTERS.map((f) => {
            const isActive = activeFilter === f;
            const colors = TAG_COLORS[f] ?? { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.5)" };
            return (
              <button
                key={f}
                onClick={() => { setActiveFilter(isActive ? null : f); setQuery(""); }}
                className="text-[11px] font-sans font-semibold px-3 py-1.5 rounded-full tracking-wide transition-all duration-200"
                style={{
                  background: isActive ? colors.bg : "rgba(255,255,255,0.04)",
                  color: isActive ? colors.text : "rgba(255,255,255,0.35)",
                  border: isActive ? `1px solid ${colors.text}40` : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {f}
              </button>
            );
          })}
        </motion.div>

        {/* Category sections */}
        {visibleCategories.length > 0 ? (
          visibleCategories.map((cat) => (
            <CategorySection key={cat.id} category={cat} query={displayQuery} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-24 text-white/25 font-sans text-sm"
          >
            No thumbnails match your search.
          </motion.div>
        )}

        {/* ── Custom Request ── */}
        <CustomRequest
          heading="Want a thumbnail made just for you?"
          body="Have a specific idea, mood, or reference in mind? Submit a brief and we'll craft a custom thumbnail tailored to your content."
          primaryLabel="Submit via Google Form"
          secondaryLabel="Join our Discord"
        />
      </div>
    </div>
  );
}
