import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0e2f3e 0%, #a4193d 55%, #fe6014 100%)",
        }}
      >
        <svg
          width="104"
          height="104"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 6 3.2 10h11.6L21 6l-5.4 5-3.6-6-3.6 6L3 6Z" />
          <path d="M6 20h12" />
        </svg>
      </div>
    ),
    size
  );
}
