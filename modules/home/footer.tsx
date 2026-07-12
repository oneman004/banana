import Link from "next/link";
// import { Github as LucideGithub } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      href: "#",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full font-[Tahoma,Verdana,sans-serif]">
      <div className="flex items-center justify-center w-full flex-col">
        <div
          className={`
                        flex flex-col items-center
                        bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
                        dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
                        border-2 border-t-[#3593ff] border-l-[#3593ff] border-r-[#00136c] border-b-[#00136c]
                        dark:border-t-[#6e6e6e] dark:border-l-[#6e6e6e] dark:border-r-[#000000] dark:border-b-[#000000]
                        shadow-[2px_2px_6px_rgba(0,0,0,0.4),inset_1px_1px_0_rgba(255,255,255,0.4)]
                        dark:shadow-[2px_2px_6px_rgba(0,0,0,0.7),inset_1px_1px_0_rgba(255,255,255,0.15)]
                        w-full 
                        px-2 py-1
                        rounded-b-[8px]
                        px-4 py-3
                        relative
                        transition-colors duration-200
                    `}
        >
          <div className="relative z-10 flex flex-col items-center space-y-3 w-full">
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex items-center justify-center
                    h-6 w-6
                    rounded-[2px]
                    bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff]
                    dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a]
                    hover:from-[#fffbdc] hover:via-[#ffe89a] hover:to-[#ffc94d]
                    dark:hover:from-[#6e6e6e] dark:hover:via-[#525252] dark:hover:to-[#383838]
                    border border-[#0058e6] dark:border-[#787878]
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                    dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
                    active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]
                    text-[#003399] dark:text-[#d8d8d8]
                    transition-colors
                  "
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            {/* Copyright Notice */}
            <p
              className="text-xs font-semibold text-white dark:text-[#e8e8e8]"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
            >
              &copy; {new Date().getFullYear()} oneman004. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
