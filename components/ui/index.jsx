import { useScrollReveal } from "@/lib/useScrollReveal";
import { COLORS } from "@/lib/theme";

/* ── Animated section wrapper ── */
export function RevealSection({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Decorative gold line ── */
export function GoldLine({ margin = "16px auto" }) {
  return (
    <div
      style={{
        width: 80,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
        margin,
      }}
    />
  );
}

/* ── Small uppercase gold label ── */
export function GoldTag({ children }) {
  return (
    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 12,
        letterSpacing: 4,
        color: COLORS.gold,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

/* ── Section heading block (tag + line + h2) ── */
export function SectionHeading({ tag, children }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 72 }}>
      <GoldTag>{tag}</GoldTag>
      <GoldLine />
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 4vw, 56px)",
          fontWeight: 300,
        }}
      >
        {children}
      </h2>
    </div>
  );
}
