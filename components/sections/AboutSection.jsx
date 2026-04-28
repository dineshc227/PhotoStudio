import { RevealSection, GoldLine, GoldTag } from "@/components/ui";
import { STATS } from "@/lib/data";
import { COLORS } from "@/lib/theme";

const ABOUT_GRID = [
  { bg: "linear-gradient(135deg,#1a1208,#0f0c04)", label: "10+ Years" },
  { bg: "linear-gradient(135deg,#080f1a,#040810)", label: "4K Cinema" },
  { bg: "linear-gradient(135deg,#0f0a18,#080510)", label: "500+ Weddings" },
  { bg: "linear-gradient(135deg,#0a150f,#050c07)", label: "Awards Won" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ padding: "120px 5vw", position: "relative" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Visual collage */}
        <RevealSection>
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: `rgba(201,168,76,0.06)`,
                border: `1px solid ${COLORS.glassBorder}`,
                padding: 40,
                aspectRatio: "4/5",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  height: "100%",
                }}
              >
                {ABOUT_GRID.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: item.bg,
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 16,
                      border: "1px solid rgba(201,168,76,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: COLORS.gold,
                        fontSize: 13,
                        letterSpacing: 2,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative offset square */}
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 120,
                height: 120,
                border: `1px solid ${COLORS.gold}`,
                opacity: 0.2,
              }}
            />
          </div>
        </RevealSection>

        {/* Text content */}
        <RevealSection delay={200}>
          <GoldTag>Our Story</GoldTag>
          <GoldLine />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Where{" "}
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
              Art
            </span>{" "}
            Meets
            <br />
            Photography
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.9,
              fontSize: 15,
              marginBottom: 20,
            }}
          >
            Founded in the heart of Bengaluru, PhotoStudio was born from a
            singular obsession — to elevate visual storytelling beyond the
            ordinary. For over a decade, we've wielded cameras like paintbrushes,
            turning fleeting instants into timeless art.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.9,
              fontSize: 15,
              marginBottom: 40,
            }}
          >
            Our team of award-winning photographers and cinematographers brings
            Hollywood-grade production values to every shoot — from intimate
            pre-wedding portraits to grand corporate productions.
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {STATS.map(([number, label]) => (
              <div
                key={label}
                style={{
                  borderLeft: `1px solid ${COLORS.gold}`,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 36,
                    fontWeight: 300,
                    color: COLORS.gold,
                  }}
                >
                  {number}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
