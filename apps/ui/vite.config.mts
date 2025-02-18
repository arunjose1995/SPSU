import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/public/app-icons/android/android-launchericon-144-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/public/app-icons/android/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        screenshots: [
          {
            src: "/public/app-icons/screenshots/mobile.png",
            sizes: "503x642",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/public/app-icons/screenshots/desktop.png",
            sizes: "1359x700",
            type: "image/png",
            form_factor: "wide",
          }
        ],
      },
    }),
  ],
});
