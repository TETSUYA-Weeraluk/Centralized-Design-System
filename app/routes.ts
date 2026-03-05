 import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // จับ URL ที่ไม่มี route (เช่น /.well-known/appspecific/com.chrome.devtools.json จาก Chrome DevTools) ให้เป็น 404 แทน crash
  route("*", "routes/catch-all.tsx"),
] satisfies RouteConfig;
