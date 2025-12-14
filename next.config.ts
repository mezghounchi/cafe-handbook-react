import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

// این خط رو اضافه می‌کنیم تا withPWA رو بگیریم
const withPWA = withPWAInit({
  dest: "public", // فایل‌های PWA رو توی پوشه‌ی public می‌سازه
  register: true, // سرویس ورکر رو خودکار ثبت (register) می‌کنه
  // اون خط 'skipWaiting' رو از اینجا پاک کردیم چون پیش‌فرض شده
  // می‌تونی این خط رو فعال کنی تا PWA توی حالت توسعه (dev) کار نکنه
  // disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/, // همه روت‌ها و assetها
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: { maxEntries: 200 },
        },
      },
    ],
  }
  
});

const nextConfig: any = {
  // این خط باعث میشه موقع بیلد، ارورهای ESLint نادیده گرفته بشن
  eslint: {
    ignoreDuringBuilds: true,
  },
  // اگر تنظیمات دیگه مثل images داری اینجا اضافه کن
};


// اینجا کانفیگ خودت رو با کانفیگ PWA ترکیب می‌کنیم
export default withPWA(nextConfig);
