import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Thumbnails", href: "/thumbnails" },
  { label: "MC Animations", href: "/minecraft-animations" },
  { label: "Video Editing", href: "/video-editing" },
  { label: "Ambassadors", href: "/brand-ambassadors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-16"
      style={{
        background: "rgba(3,3,3,0.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Logo wordmark */}
      <Link href="/">
        <span className="font-display font-black text-sm sm:text-base tracking-[0.15em] uppercase cursor-pointer select-none">
          Lethal{" "}
          <span style={{ color: "#ff003c", textShadow: "0 0 10px rgba(255,0,60,0.6)" }}>
            Production
          </span>
        </span>
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-1 sm:gap-2">
        {NAV_LINKS.map((link) => {
          const isActive = location === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <span
                className="relative px-4 py-2 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase cursor-pointer transition-colors duration-200"
                style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)" }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px]"
                    style={{ background: "#ff003c", boxShadow: "0 0 8px rgba(255,0,60,0.8)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
              </span>
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
