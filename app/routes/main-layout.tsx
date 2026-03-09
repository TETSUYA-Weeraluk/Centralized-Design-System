import { Outlet, useMatches } from "react-router";
import MainLayout from "@/pages/home/HomePage";

export default function MainLayoutRoute() {
  const matches = useMatches();
  const lastMatch = matches.at(-1);
  const title = (lastMatch?.handle as { title?: string } | undefined)?.title ?? "Home";

  return (
    <MainLayout title={title}>
      <Outlet />
    </MainLayout>
  );
}
