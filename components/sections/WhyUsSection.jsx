import { RevealSection, SectionHeading } from "@/components/ui";
import { WHY_US } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function WhyUsSection() {
  return (
    <section
      style={{
        padding: "100px 5vw",
        background: `linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 100%)`,
        borderTop: `1px solid ${COLORS.glassBorder}`,
        borderBottom: `1px solid ${COLORS.glassBorder}`,
      }}
    >
      <RevealSection>
        <SectionHeading tag="Why PhotoStudio">
          The{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            Difference
          </span>{" "}
          Is Clear
        </SectionHeading>
      </RevealSection>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        {WHY_US.map((item, i) => (
          <RevealSection key={item.title} delay={i * 100} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 36, color: COLORS.gold, marginBottom: 16 }}>
              {item.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                marginBottom: 12,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </p>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
