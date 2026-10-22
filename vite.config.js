import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss()],
    envPrefix: ['VITE_', 'WEBHOOK'],
    define: {
      'process.env.WEBHOOK_URL': JSON.stringify(env.WEBHOOK_URL || env.VITE_WEBHOOK_URL || env.WEBHOOK || env.VITE_WEBHOOK || ''),
    },
  }
})
