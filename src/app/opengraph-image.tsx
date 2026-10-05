import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f7fb",
          color: "#0f172a",
          padding: "70px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center", color: "#4040c7", fontSize: 28, fontWeight: 700 }}>
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#6161ff",
              display: "block",
            }}
          />
          E-commerce & Marketplace Operations Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: 1.04, fontWeight: 700, maxWidth: 980 }}>
            Dea Annisa Wilona
          </div>
          <div style={{ marginTop: 28, fontSize: 34, lineHeight: 1.32, color: "#475569", maxWidth: 900 }}>
            Marketplace execution, pricing, inventory, fulfillment, SOPs, KPIs, and AI-assisted operations.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#0f172a" }}>
          {["2,000+ SKUs", "50,000+ orders", "100+ SOPs"].map((item, index) => (
            <span
              key={item}
              style={{
                border: "1px solid #dbe1f1",
                background: index === 1 ? "#6161ff" : "white",
                color: index === 1 ? "white" : "#0f172a",
                borderRadius: 8,
                padding: "14px 18px",
                fontWeight: 700,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
