import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import UserButton from "../auth/components/user-button";

export function Header() {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="w-full font-[Tahoma,Verdana,sans-serif]">
          <div className="flex items-center justify-center w-full flex-col">
            <div
              className={`
                            flex items-center justify-between
                            bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
                            dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
                            border-2 border-t-[#3593ff] border-l-[#3593ff] border-r-[#00136c] border-b-[#00136c]
                            dark:border-t-[#6e6e6e] dark:border-l-[#6e6e6e] dark:border-r-[#000000] dark:border-b-[#000000]
                            shadow-[2px_2px_6px_rgba(0,0,0,0.4),inset_1px_1px_0_rgba(255,255,255,0.4)]
                            dark:shadow-[2px_2px_6px_rgba(0,0,0,0.7),inset_1px_1px_0_rgba(255,255,255,0.15)]
                            w-full
px-2 py-1
                            rounded-t-[8px]
                            px-2 py-1
                            relative
                            transition-colors duration-200
                        `}
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* Logo Section with Navigation Links */}
                <div className="flex items-center gap-4 justify-center">
                  <Link
                    href="/"
                    className="flex items-center gap-2 justify-center"
                  >
                    <Image
                      src={"/logo.svg"}
                      alt="Logo"
                      height={28}
                      width={28}
                      className="drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]"
                    />

                    <span
                      className="hidden sm:block font-bold text-base text-white dark:text-[#e8e8e8]"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
                    >
                      VibeCode Editor
                    </span>
                  </Link>

                  {/* Desktop Navigation Links styled as XP toolbar buttons */}
                  <div className="hidden sm:flex items-center gap-1.5 ml-2">
                    <Link
                      href="/docs/components/background-paths"
                      className="text-xs font-semibold text-[#003399] dark:text-[#d8d8d8] bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff] dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a] hover:from-[#fffbdc] hover:via-[#ffe89a] hover:to-[#ffc94d] dark:hover:from-[#6e6e6e] dark:hover:via-[#525252] dark:hover:to-[#383838] border border-[#0058e6] dark:border-[#787878] rounded-[3px] px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] transition-colors"
                    >
                      Docs
                    </Link>
                    <Link
                      href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                      target="_blank"
                      className="text-xs font-semibold text-[#003399] dark:text-[#d8d8d8] bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff] dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a] hover:from-[#fffbdc] hover:via-[#ffe89a] hover:to-[#ffc94d] dark:hover:from-[#6e6e6e] dark:hover:via-[#525252] dark:hover:to-[#383838] border border-[#0058e6] dark:border-[#787878] rounded-[3px] px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] transition-colors flex items-center gap-1.5"
                    >
                      API
                      <span className="text-white bg-gradient-to-b from-[#6fd66f] to-[#2fa32f] dark:from-[#4a9d4a] dark:to-[#256b25] border border-[#1a7a1a] dark:border-[#1a5c1a] rounded-[2px] px-1 py-0 text-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        New
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right side items */}
                <div className="hidden sm:flex items-center gap-2">
                  <div className="bg-[#a9d4ff]/40 dark:bg-[#5c5c5c]/40 border border-[#003399]/40 dark:border-[#787878]/50 rounded-[3px] p-0.5">
                    <ThemeToggle />
                  </div>
                  <div className="bg-[#a9d4ff]/40 dark:bg-[#5c5c5c]/40 border border-[#003399]/40 dark:border-[#787878]/50 rounded-[3px] p-0.5">
                    <UserButton />
                  </div>
                </div>

                {/* Mobile Navigation remains unchanged */}
                <div className="flex sm:hidden items-center gap-2">
                  <Link
                    href="/docs/components/action-search-bar"
                    className="text-xs font-semibold text-[#003399] dark:text-[#d8d8d8] bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff] dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a] border border-[#0058e6] dark:border-[#787878] rounded-[3px] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-xs font-semibold text-[#003399] dark:text-[#d8d8d8] bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff] dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a] border border-[#0058e6] dark:border-[#787878] rounded-[3px] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  >
                    API
                  </Link>
                  <div className="bg-[#a9d4ff]/40 dark:bg-[#5c5c5c]/40 border border-[#003399]/40 dark:border-[#787878]/50 rounded-[3px] p-0.5">
                    <ThemeToggle />
                  </div>
                  <div className="bg-[#a9d4ff]/40 dark:bg-[#5c5c5c]/40 border border-[#003399]/40 dark:border-[#787878]/50 rounded-[3px] p-0.5">
                    <UserButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
