import { DATA } from "@/data/resume";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full backdrop-blur-xs">
      <nav className="mx-auto w-[85%]">
        <div className="flex h-14 items-center justify-between">
          <div className="flex w-1/3 items-center justify-start">
            <Link href="/" prefetch={false}>
              <MyLogo />
              <span className="sr-only">Acme Inc</span>
            </Link>
          </div>
          <nav className="hidden w-1/3 justify-center gap-5 md:flex">
            {DATA.navbar.map((item, index) => {
              return (
                <Link
                  key={String(index) + "nav_links_navbar"}
                  href={item.path}
                  prefetch={false}
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex w-1/3 items-center justify-end gap-4">
            <div className="hidden items-center justify-center space-x-4 md:flex">
              <ModeToggle />
              <Link href={"/contact"}>
                <Button size="sm">Hire Me</Button>
              </Link>
            </div>
            <div className="block md:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MyLogo() {
  return (
    <svg
      className="rounded-md bg-primary dark:bg-transparent"
      width="24"
      height="24"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background transparent */}
      <rect width="100" height="100" fill="none" />

      {/* Top red rectangle */}
      <rect x="10" y="10" width="40" height="17" fill="#fff" />

      {/* Bottom red rectangle */}
      <rect x="50" y="70" width="40" height="17" fill="#fff" />

      {/* Diagonal red rectangle */}
      <polygon points="10,70 90,10 90,30 10,90" fill="#fff" />
    </svg>
  );
}
