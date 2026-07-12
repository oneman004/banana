import { cn } from "@/lib/utils";
import { Footer } from "@/modules/home/footer";
import { Header } from "@/modules/home/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "VibeCode - Editor ",
    default: "Code Editor For VibeCoders - VibeCode",
  },
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* XP teal desktop background instead of neutral grid */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "bg-[#3a6ea5] dark:bg-[#1a1a1a]",
          "[background-size:24px_24px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-[#3a6ea5] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#1a1a1a]" />
      <main className="z-20 relative w-full pt-0">{children}</main>
      <Footer />
    </>
  );
}