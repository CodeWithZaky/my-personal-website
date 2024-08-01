import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DATA } from "@/data/resume";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col justify-start items-end gap-10 md:hidden mt-11">
          <ModeToggle />
          {DATA.navbar.map((item, index) => {
            return (
              <Link
                key={String(index) + "nav_links_sidebar"}
                href={item.path}
                prefetch={false}
                className="flex items-center font-medium text-sm hover:underline transition-colors"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
