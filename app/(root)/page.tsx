import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, GitBranch, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featurePanels = [
  {
    icon: Sparkles,
    title: "Smart Autocomplete",
    description:
      "Context-aware suggestions as you type, powered by real-time analysis of your codebase.",
  },
  {
    icon: Zap,
    title: "Live Debugging",
    description:
      "Set breakpoints, inspect variables, and step through execution without leaving the editor.",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description:
      "Stage, commit, and push directly from the sidebar — no terminal required.",
  },
];

export default function Home() {
  return (
    <div
      className={cn(
        "z-20 flex flex-col items-center justify-start min-h-screen py-8 mt-6 px-4",
        "bg-[#3a6ea5] dark:bg-[#1a1a1a]",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
      )}
    >
      {/* Hero window — titlebar-style top, sunken pane below */}
      <div
        className={`
          w-full max-w-3xl
          bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
          dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
          border-2 border-t-[#3593ff] border-l-[#3593ff] border-r-[#00136c] border-b-[#00136c]
          dark:border-t-[#6e6e6e] dark:border-l-[#6e6e6e] dark:border-r-[#000000] dark:border-b-[#000000]
          shadow-[2px_2px_10px_rgba(0,0,0,0.5)]
          rounded-t-[8px]
          px-4 py-1.5
          font-[Tahoma,Verdana,sans-serif]
        `}
      >
        <p
          className="text-xs font-bold text-white dark:text-[#e8e8e8]"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
        >
          VibeCode Editor — Welcome
        </p>
      </div>

      <div
        className={`
          w-full max-w-3xl
          bg-[#ece9d8] dark:bg-[#2b2b2b]
          border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64]
          dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-[#000000] dark:border-b-[#000000]
          shadow-[2px_2px_10px_rgba(0,0,0,0.4)]
          rounded-b-[4px]
          px-6 py-8
          flex flex-col items-center
          font-[Tahoma,Verdana,sans-serif]
        `}
      >
        <div className="flex flex-col justify-center items-center my-3">
          <Image
            src={"/hero.svg"}
            alt="Hero-Section"
            height={280}
            width={280}
          />

          <h1
            className="z-20 text-4xl mt-4 font-bold text-center text-[#003399] dark:text-[#a9d4ff] tracking-tight leading-[1.3]"
            style={{ textShadow: "1px 1px 0 rgba(255,255,255,0.6)" }}
          >
            Vibe Code With with Intelligence
          </h1>
        </div>

        <p className="mt-2 text-sm text-center text-[#333333] dark:text-[#c8c8c8] px-5 py-6 max-w-2xl leading-relaxed">
          VibeCode Editor is a powerful and intelligent code editor that
          enhances your coding experience with advanced features and seamless
          integration. It is designed to help you write, debug, and optimize
          your code efficiently.
        </p>

        <Link href={"/dashboard"}>
          <Button
            variant={"brand"}
            size={"lg"}
            className={cn(
              "mb-2",
              "bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff]",
              "dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a]",
              "hover:from-[#fffbdc] hover:via-[#ffe89a] hover:to-[#ffc94d]",
              "dark:hover:from-[#6e6e6e] dark:hover:via-[#525252] dark:hover:to-[#383838]",
              "border border-[#0058e6] dark:border-[#787878]",
              "text-[#003399] dark:text-[#d8d8d8] font-semibold",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
              "active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]",
              "rounded-[3px]"
            )}
          >
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>

      {/* Feature panel grid */}
      <div className="w-full max-w-4xl mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 font-[Tahoma,Verdana,sans-serif]">
        {featurePanels.map((panel) => {
          const Icon = panel.icon;
          return (
            <div key={panel.title} className="flex flex-col">
              <div
                className={`
                  bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
                  dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
                  border-2 border-t-[#3593ff] border-l-[#3593ff] border-r-[#00136c] border-b-[#00136c]
                  dark:border-t-[#6e6e6e] dark:border-l-[#6e6e6e] dark:border-r-[#000000] dark:border-b-[#000000]
                  shadow-[2px_2px_8px_rgba(0,0,0,0.4)]
                  rounded-t-[6px]
                  px-3 py-1
                `}
              >
                <p
                  className="text-[11px] font-bold text-white dark:text-[#e8e8e8]"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
                >
                  {panel.title}
                </p>
              </div>
              <div
                className={`
                  flex-1
                  bg-[#ece9d8] dark:bg-[#2b2b2b]
                  border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64]
                  dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-[#000000] dark:border-b-[#000000]
                  shadow-[2px_2px_8px_rgba(0,0,0,0.3)]
                  rounded-b-[3px]
                  px-4 py-5
                  flex flex-col gap-2
                `}
              >
                <div
                  className={`
                    w-9 h-9 rounded-[3px]
                    bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff]
                    dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a]
                    border border-[#0058e6] dark:border-[#787878]
                    flex items-center justify-center
                  `}
                >
                  <Icon
                    className="w-4.5 h-4.5 text-[#003399] dark:text-[#d8d8d8]"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm text-[#333333] dark:text-[#c8c8c8] leading-relaxed">
                  {panel.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Code snippet panel */}
        <div className="flex flex-col">
          <div
            className={`
              bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
              dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
              border-2 border-t-[#3593ff] border-l-[#3593ff] border-r-[#00136c] border-b-[#00136c]
              dark:border-t-[#6e6e6e] dark:border-l-[#6e6e6e] dark:border-r-[#000000] dark:border-b-[#000000]
              shadow-[2px_2px_8px_rgba(0,0,0,0.4)]
              rounded-t-[6px]
              px-3 py-1
            `}
          >
            <p
              className="text-[11px] font-bold text-white dark:text-[#e8e8e8]"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
            >
              main.ts
            </p>
          </div>
          <div
            className={`
              flex-1
              bg-[#1e1e1e] dark:bg-[#161616]
              border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64]
              dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-[#000000] dark:border-b-[#000000]
              shadow-[2px_2px_8px_rgba(0,0,0,0.3)]
              rounded-b-[3px]
              px-4 py-4
            `}
          >
            <pre className="text-[11px] leading-relaxed font-mono overflow-x-auto">
              <code>
                <span className="text-[#c586c0]">function</span>{" "}
                <span className="text-[#dcdcaa]">optimize</span>
                <span className="text-[#d4d4d4]">(code: </span>
                <span className="text-[#4ec9b0]">string</span>
                <span className="text-[#d4d4d4]">) {"{"}</span>
                {"\n  "}
                <span className="text-[#c586c0]">const</span>{" "}
                <span className="text-[#9cdcfe]">result</span>
                <span className="text-[#d4d4d4]"> = </span>
                <span className="text-[#dcdcaa]">analyze</span>
                <span className="text-[#d4d4d4]">(code);</span>
                {"\n  "}
                <span className="text-[#c586c0]">return</span>{" "}
                <span className="text-[#9cdcfe]">result</span>
                <span className="text-[#d4d4d4]">.</span>
                <span className="text-[#dcdcaa]">apply</span>
                <span className="text-[#d4d4d4]">();</span>
                {"\n"}
                <span className="text-[#d4d4d4]">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
