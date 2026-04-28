import { useState } from "react";
import { RevealSection, GoldLine, GoldTag } from "@/components/ui";
import { GALLERY_ITEMS } from "@/lib/data";
import { COLORS } from "@/lib/theme";

const CATEGORIES = ["All", ...new Set(GALLERY_ITEMS.map((g) => g.cat))];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.cat === activeFilter);

  return (
    <section id="portfolio" style={{ padding: "120px 5vw" }}>
      <RevealSection>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <GoldTag>Our Work</GoldTag>
          <GoldLine />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            The{" "}
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
              Portfolio
            </span>
          </h2>

          {/* Filter buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Masonry grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          columns: "3 280px",
          gap: 12,
        }}
      >
        {filtered.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="gallery-item"
            style={{
              marginBottom: 12,
              height: item.h,
              breakInside: "avoid",
              display: "block",
            }}
          >
            <div
              className="gallery-img"
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                display: "flex",
                alignItems: "flex-end",
                padding: 20,
              }}
            >
              <div
                style={{ borderLeft: `2px solid ${item.accent}`, paddingLeft: 12 }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 3,
                    color: item.accent,
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {item.cat}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    color: COLORS.white,
                  }}
                >
                  {item.label}
                </div>
              </div>
            </div>
            <div className="gallery-overlay">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  color: COLORS.gold,
                  letterSpacing: 2,
                }}
              >
                View Project
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
