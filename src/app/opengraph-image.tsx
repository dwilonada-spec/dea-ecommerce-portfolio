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
          background: "#080a0d",
          color: "white",
          padding: "70px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ color: "#6ee7b7", fontSize: 28, fontWeight: 700 }}>Evidence-led ecommerce operations portfolio</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: 1.04, fontWeight: 700, maxWidth: 980 }}>
            Dea Annisa Wilona
          </div>
          <div style={{ marginTop: 28, fontSize: 34, lineHeight: 1.32, color: "#d4d4d8", maxWidth: 900 }}>
            Real dashboards, SOP systems, seller-center proof, KPI trackers, and marketplace operations.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#a1a1aa" }}>
          <span>2,000+ SKUs</span>
          <span>50,000+ orders</span>
          <span>100+ SOPs</span>
        </div>
      </div>
    ),
    size,
  );
}
