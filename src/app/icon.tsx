import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background:
            "linear-gradient(135deg, #0e2f3e 0%, #a4193d 55%, #fe6014 100%)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth={2.2}
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
