import { useState } from "react";
import { RevealSection, GoldLine, GoldTag } from "@/components/ui";
import { CONTACT_INFO, SERVICES } from "@/lib/data";
import { COLORS } from "@/lib/theme";

const EMPTY_FORM = { name: "", phone: "", date: "", service: "", message: "" };

const INPUT_FIELDS = [
  { key: "name", label: "Full Name", type: "text", placeholder: "Your Name" },
  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
  { key: "date", label: "Event Date", type: "date", placeholder: "" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const update = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    alert("Booking request sent! We'll be in touch within 24 hours.");
    setFormData(EMPTY_FORM);
  };

  return (
    <section id="contact" style={{ padding: "120px 5vw" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
        }}
      >
        {/* Left: contact info */}
        <RevealSection>
          <GoldTag>Get In Touch</GoldTag>
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
            Let's Create
            <br />
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
              Something Beautiful
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.9,
              fontSize: 15,
              marginBottom: 48,
            }}
          >
            Every great story begins with a conversation. Tell us about your
            vision and we'll craft a bespoke visual experience that exceeds
            every expectation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <span style={{ color: COLORS.gold, fontSize: 18, marginTop: 2 }}>
                  {item.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: 2,
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>
                    {item.val}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </RevealSection>

        {/* Right: booking form */}
        <RevealSection delay={200}>
          <div
            style={{
              background: COLORS.glass,
              border: `1px solid ${COLORS.glassBorder}`,
              padding: 48,
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                marginBottom: 32,
                color: COLORS.gold,
              }}
            >
              Book Your Session
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {INPUT_FIELDS.map((field) => (
                <div key={field.key}>
                  <label
                    style={{
                      fontSize: 10,
                      letterSpacing: 2,
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    className="input-field"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={update(field.key)}
                  />
                </div>
              ))}

              {/* Service dropdown */}
              <div>
                <label
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Service Type
                </label>
                <select
                  className="input-field"
                  value={formData.service}
                  onChange={update("service")}
                >
                  <option value="">Select a Service</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Message
                </label>
                <textarea
                  className="input-field"
                  rows={4}
                  placeholder="Tell us about your vision..."
                  value={formData.message}
                  onChange={update("message")}
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                className="btn-gold"
                style={{ width: "100%", marginTop: 8 }}
                onClick={handleSubmit}
              >
                Send Booking Request
              </button>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* Map placeholder */}
      <RevealSection delay={300} style={{ marginTop: 80 }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: 300,
            background: "rgba(201,168,76,0.04)",
            border: `1px solid ${COLORS.glassBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 32, color: COLORS.gold, marginBottom: 12 }}>
              ◇
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Indiranagar, Bengaluru
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Karnataka, India — 560038
            </div>
            <a
              href="https://maps.google.com/?q=Indiranagar+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 16,
                fontSize: 10,
                letterSpacing: 2,
                color: COLORS.gold,
                textTransform: "uppercase",
                textDecoration: "none",
                border: `1px solid ${COLORS.gold}`,
                padding: "8px 20px",
              }}
            >
              Open in Maps
            </a>
          </div>

          {/* Grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }}
          />
        </div>
      </RevealSection>
    </section>
  );
}
