import { COLORS } from "@/lib/theme";

const CORNER_STYLES = [
  { top: "32px", left: "5vw" },
  { top: "32px", right: "5vw", transform: "scaleX(-1)" },
  { bottom: "32px", left: "5vw", transform: "scaleY(-1)" },
  { bottom: "32px", right: "5vw", transform: "scale(-1)" },
];

export default function HeroSection({ onScrollTo }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Cinematic background */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a08 0%, #0f0c04 40%, #080808 100%)
          `,
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative rings */}
      {[600, 800].map((size) => (
        <div
          key={size}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            border: `1px solid rgba(201,168,76,${size === 600 ? 0.08 : 0.04})`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      ))}

      {/* Corner brackets */}
      {CORNER_STYLES.map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 60,
            height: 60,
            ...style,
            borderTop: `1px solid ${COLORS.gold}`,
            borderLeft: `1px solid ${COLORS.gold}`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: 900,
          padding: "0 5vw",
        }}
      >
        <div
          className="fade-in-up"
          style={{ marginBottom: 24, animationDelay: "0.2s" }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: 4,
              color: COLORS.gold,
              textTransform: "uppercase",
            }}
          >
            Bengaluru's Premier Visual Studio
          </span>
        </div>

        <h1
          className="fade-in-up"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(48px, 8vw, 100px)",
            lineHeight: 1.05,
            letterSpacing: -1,
            animationDelay: "0.4s",
          }}
        >
          Capturing{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            Moments,
          </span>
          <br />
          Creating <span style={{ fontStyle: "italic" }}>Memories</span>
        </h1>

        {/* Gold divider */}
        <div
          style={{
            width: 80,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
            margin: "16px auto",
          }}
        />

        <p
          className="fade-in-up"
          style={{
            fontSize: 15,
            letterSpacing: 2,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            marginBottom: 48,
            animationDelay: "0.6s",
          }}
        >
          WEDDING · CINEMATIC · DRONE · EVENTS · PRODUCT
        </p>

        <div
          className="fade-in-up"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            animationDelay: "0.8s",
          }}
        >
          <button className="btn-gold" onClick={() => onScrollTo("contact")}>
            Book a Shoot
          </button>
          <button
            className="btn-outline"
            onClick={() => onScrollTo("portfolio")}
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: 3,
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="shimmer"
          style={{
            width: 1,
            height: 50,
            background: `linear-gradient(${COLORS.gold}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
