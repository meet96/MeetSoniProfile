import type {NextConfig} from "next";

// Static export: `next build` emits plain HTML/CSS/JS into ./out,
// which Netlify serves directly from its CDN (no server runtime needed).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {unoptimized: true}
};

export default nextConfig;
