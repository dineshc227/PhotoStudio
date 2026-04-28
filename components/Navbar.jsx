import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function Navbar({ onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    onScrollTo(id.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: "0 5vw",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.glassBorder}` : "none",
        transition: "all 0.4s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            border: `1px solid ${COLORS.gold}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: COLORS.gold,
              fontSize: 14,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            P
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontWeight: 300,
            letterSpacing: 3,
            color: COLORS.white,
          }}
        >
          PHOTO<span style={{ color: COLORS.gold }}>STUDIO</span>
        </span>
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            className="nav-link"
            onClick={() => handleNav(link)}
            style={{ display: "none" }}
          >
            {link}
          </a>
        ))}

        {/* Desktop links visible */}
        <div
          style={{
            display: "flex",
            gap: 36,
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={`d-${link}`}
              className="nav-link"
              onClick={() => handleNav(link)}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="btn-gold"
          onClick={() => onScrollTo("contact")}
          style={{ padding: "10px 24px", fontSize: 10, letterSpacing: 2 }}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
