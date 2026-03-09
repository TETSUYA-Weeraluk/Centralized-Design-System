import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/main-layout.tsx", [
    index("routes/home.tsx"),
    route("settings/team", "pages/settings/TeamPage.tsx"),
    route("settings/privacy", "pages/settings/PrivacyPage.tsx"),
    route("marketing", "pages/test/MarketingPage.tsx"),
  ]),
  // จับ URL ที่ไม่มี route (เช่น /.well-known/appspecific/com.chrome.devtools.json จาก Chrome DevTools) ให้เป็น 404 แทน crash
  route("*", "routes/catch-all.tsx"),
] satisfies RouteConfig;
