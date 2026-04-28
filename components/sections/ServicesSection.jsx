import { RevealSection, SectionHeading } from "@/components/ui";
import { SERVICES } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 5vw",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <RevealSection>
        <SectionHeading tag="What We Offer">
          Premium{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
            Services
          </span>
        </SectionHeading>
      </RevealSection>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {SERVICES.map((service, i) => (
          <RevealSection key={service.title} delay={i * 80}>
            <div className="service-card">
              <div style={{ fontSize: 28, color: COLORS.gold, marginBottom: 20 }}>
                {service.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24,
                  fontWeight: 400,
                  marginBottom: 12,
                }}
              >
                {service.title}
              </h3>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: COLORS.gold,
                  marginBottom: 16,
                  opacity: 0.5,
                }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  fontSize: 14,
                }}
              >
                {service.desc}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
