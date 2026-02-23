import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // cacheComponents: true,   enabled sometimes don´t open the modal that was opened once.
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
