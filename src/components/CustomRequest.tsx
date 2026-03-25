import { motion } from "framer-motion";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Replace these with your actual links
export const CUSTOM_REQUEST_LINK = "https://forms.google.com/";        // Google Form URL
export const DISCORD_INVITE_LINK = "https://discord.gg/jkceYXj4T9";   // Discord invite

interface CustomRequestProps {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CustomRequest({
  heading = "Want something made just for you?",
  body = "Tell us your idea, drop a reference, or describe the vibe — we'll handle the rest.",
  primaryLabel = "Submit via Google Form",
  primaryHref = CUSTOM_REQUEST_LINK,
  secondaryLabel = "Join our Discord",
  secondaryHref = DISCORD_INVITE_LINK,
}: CustomRequestProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-8 mb-4 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,0,60,0.04)",
        border: "1px solid rgba(255,0,60,0.18)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,0,60,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-neon-red/30" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neon-red/30" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-neon-red/30" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-neon-red/30" />

      <div className="relative z-10 px-6 sm:px-12 py-10 sm:py-14 flex flex-col items-center text-center gap-5">
        {/* Label */}
        <p className="text-[10px] uppercase tracking-[0.55em] font-sans text-white/30">
          Custom Request
        </p>

        {/* Heading */}
        <h3
          className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-white leading-tight"
        >
          {heading.split(" ").slice(0, -2).join(" ")}{" "}
          <span
            style={{
              color: "#ff003c",
              textShadow: "0 0 20px rgba(255,0,60,0.6)",
            }}
          >
            {heading.split(" ").slice(-2).join(" ")}
          </span>
        </h3>

        {/* Body */}
        <p className="text-white/45 font-sans text-sm sm:text-base max-w-lg leading-relaxed">
          {body}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a href={primaryHref} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl text-sm font-sans font-bold uppercase tracking-widest transition-all duration-200"
              style={{
                background: "#ff003c",
                color: "#fff",
                boxShadow: "0 0 24px rgba(255,0,60,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 40px rgba(255,0,60,0.65)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px rgba(255,0,60,0.4)";
              }}
            >
              {primaryLabel}
            </motion.button>
          </a>

          <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl text-sm font-sans font-semibold uppercase tracking-widest transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.65)";
              }}
            >
              {secondaryLabel}
            </motion.button>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
