import { RevealSection, SectionHeading } from "@/components/ui";
import { PACKAGES } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function PricingSection({ onScrollTo }) {
  return (
    <section
      id="pricing"
      style={{ padding: "120px 5vw", background: "rgba(255,255,255,0.01)" }}
    >
      <RevealSection>
        <SectionHeading tag="Investment">
          Choose Your{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            Package
          </span>
        </SectionHeading>
      </RevealSection>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {PACKAGES.map((pkg, i) => (
          <RevealSection key={pkg.name} delay={i * 100}>
            <div
              className="pkg-card"
              style={{
                background: pkg.color,
                border: `1px solid ${pkg.border}`,
                padding: "48px 36px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: COLORS.gold,
                    color: COLORS.black,
                    fontSize: 9,
                    letterSpacing: 3,
                    padding: "6px 20px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  letterSpacing: 4,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {pkg.name}
              </div>

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 52,
                  color: COLORS.gold,
                  fontWeight: 300,
                  marginBottom: 8,
                }}
              >
                {pkg.price}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: 2,
                  marginBottom: 36,
                }}
              >
                STARTING FROM
              </div>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: COLORS.glassBorder,
                  marginBottom: 32,
                }}
              />

              <ul style={{ listStyle: "none", marginBottom: 40 }}>
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.65)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: COLORS.gold, fontSize: 10 }}>◆</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={pkg.featured ? "btn-gold" : "btn-outline"}
                style={{ width: "100%" }}
                onClick={() => onScrollTo("contact")}
              >
                Get Started
              </button>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
