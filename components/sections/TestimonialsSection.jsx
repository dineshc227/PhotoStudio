import { useState, useEffect } from "react";
import { RevealSection, SectionHeading } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length),
      4500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" style={{ padding: "120px 5vw" }}>
      <RevealSection>
        <SectionHeading tag="Client Stories">
          Voices of{" "}
          <span style={{ color: COLORS.gold, fontStyle: "italic" }}>Trust</span>
        </SectionHeading>
      </RevealSection>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        {/* Slides */}
        <div style={{ position: "relative", minHeight: 200 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-slide"
              style={{
                position: "absolute",
                inset: 0,
                opacity: current === i ? 1 : 0,
                transform: current === i ? "translateY(0)" : "translateY(20px)",
                pointerEvents: current === i ? "auto" : "none",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  color: COLORS.gold,
                  opacity: 0.2,
                  fontFamily: "serif",
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 2.5vw, 26px)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: 32,
                  fontStyle: "italic",
                }}
              >
                {t.text}
              </p>
              <div
                style={{
                  color: COLORS.gold,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {t.role}
              </div>
            </div>
          ))}
        </div>

        {/* Dot progress bar */}
        <div
          style={{
            marginTop: 220,
            display: "flex",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 32 : 8,
                height: 1,
                border: "none",
                background:
                  i === current ? COLORS.gold : "rgba(255,255,255,0.2)",
                transition: "all 0.4s",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
