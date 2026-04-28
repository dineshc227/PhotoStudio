import { FOOTER_COLS } from "@/lib/data";
import { COLORS } from "@/lib/theme";

const SOCIALS = ["Instagram", "Facebook", "YouTube", "Pinterest"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: `1px solid ${COLORS.glassBorder}`,
        padding: "72px 5vw 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 60,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 300,
                letterSpacing: 4,
                marginBottom: 16,
              }}
            >
              PHOTO<span style={{ color: COLORS.gold }}>STUDIO</span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 13,
                lineHeight: 1.8,
                maxWidth: 280,
              }}
            >
              Bengaluru's most awarded photography & cinematography studio.
              Turning moments into masterpieces since 2014.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              {SOCIALS.map((name) => (
                <SocialIcon key={name} label={name} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  color: COLORS.gold,
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: "none" }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 12 }}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © 2025 PhotoStudio. All rights reserved. Crafted with passion in
            Bengaluru.
          </span>
          <span
            style={{
              fontSize: 10,
              letterSpacing: 2,
              color: COLORS.gold,
              opacity: 0.6,
            }}
          >
            CAPTURING MOMENTS · CREATING MEMORIES
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ label }) {
  return (
    <a
      href="#"
      style={{
        width: 36,
        height: 36,
        border: "1px solid rgba(201,168,76,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "rgba(255,255,255,0.4)",
        fontSize: 13,
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#C9A84C";
        e.currentTarget.style.color = "#C9A84C";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
        e.currentTarget.style.color = "rgba(255,255,255,0.4)";
      }}
      title={label}
    >
      {label[0]}
    </a>
  );
}

function FooterLink({ children }) {
  return (
    <a
      href="#"
      style={{
        color: "rgba(255,255,255,0.35)",
        textDecoration: "none",
        fontSize: 13,
        transition: "color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
    >
      {children}
    </a>
  );
}
