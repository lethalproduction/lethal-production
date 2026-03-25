import { motion } from "framer-motion";

// ─── CONFIG — update these with real links ────────────────────────────────────
const INSTAGRAM_URL = "https://www.instagram.com/lethalproduction01?igsh=MnQ5Mjd2b2Eya3Jw";
const DISCORD_URL   = "https://discord.gg/jkceYXj4T9";
const GMAIL_URL     = "mailto:LethalProduction01@gmail.com";

const CONTACTS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@lethalproduction01",
    href: INSTAGRAM_URL,
    description: "Follow for behind-the-scenes, updates, and drops.",
    color: "#e1306c",
    glow: "rgba(225,48,108,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "discord",
    label: "Discord",
    handle: "Join our Server",
    href: DISCORD_URL,
    description: "Chat with the team, share your work, and collaborate directly.",
    color: "#5865f2",
    glow: "rgba(88,101,242,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    id: "gmail",
    label: "Gmail",
    handle: "LethalProduction01@gmail.com",
    href: GMAIL_URL,
    description: "For business inquiries, collabs, and project proposals.",
    color: "#ea4335",
    glow: "rgba(234,67,53,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
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
          className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-[140px] opacity-20 mix-blend-screen"
          style={{ background: "rgba(255,0,60,0.2)" }}
        />
      </div>

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] mb-4 font-sans">Get in Touch</p>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide text-white leading-tight mb-4">
            Lethal{" "}
            <span style={{ color: "#ff003c", textShadow: "0 0 32px rgba(255,0,60,0.6)" }}>
              Production
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-neon-red/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-neon-red" style={{ boxShadow: "0 0 8px rgba(255,0,60,0.8)" }} />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-neon-red/50" />
          </div>

          <p className="text-white/40 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Whether it's a collab, a project idea, or just a shoutout — we're always open to connect. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {CONTACTS.map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.href}
              target={contact.id === "gmail" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ x: 6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group relative rounded-2xl overflow-hidden flex items-center gap-5 sm:gap-7 px-6 sm:px-8 py-6 sm:py-7 cursor-pointer transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = `${contact.glow.replace("0.35", "0.06")}`;
                el.style.border = `1px solid ${contact.color}55`;
                el.style.boxShadow = `0 0 40px ${contact.glow.replace("0.35", "0.1")}, 0 8px 32px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.border = "1px solid rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Hover left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: contact.color, boxShadow: `0 0 12px ${contact.color}` }}
              />

              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: `${contact.glow.replace("0.35", "0.1")}`,
                  color: contact.color,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${contact.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {contact.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base sm:text-lg text-white tracking-wide">
                    {contact.label}
                  </span>
                  <span
                    className="text-[10px] font-sans font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ background: `${contact.glow.replace("0.35", "0.12")}`, color: contact.color }}
                  >
                    {contact.id === "gmail" ? "Email" : contact.id === "discord" ? "Chat" : "Social"}
                  </span>
                </div>
                <span className="text-white/50 font-sans text-xs sm:text-sm truncate">{contact.handle}</span>
                <span className="text-white/30 font-sans text-xs mt-0.5 leading-relaxed hidden sm:block">
                  {contact.description}
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center text-white/20 font-sans text-xs mt-14 tracking-wider"
        >
          We typically respond within 24–48 hours &nbsp;·&nbsp; Lethal Production © {new Date().getFullYear()}
        </motion.p>
      </div>
    </div>
  );
}
