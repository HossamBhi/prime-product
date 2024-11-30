import { sideLinks } from "@/data/sideLinks";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Layout } from "./layout";
import Nav from "./nav";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  className,
  isCollapsed,
}: // setIsCollapsed,
SidebarProps) {
  const [navOpened, setNavOpened] = useState(false);

  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpened]);

  return (
    <aside
      className={cn(
        `fixed right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
          isCollapsed ? "md:w-14" : "md:w-64"
        }`,
        className
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${
          navOpened ? "h-svh opacity-50" : "h-0 opacity-0"
        } w-full bg-black md:hidden`}
      />

      <Layout fixed className={navOpened ? "h-svh" : ""}>
        {/* Header */}
        <Layout.Header
          sticky
          className="z-50 flex justify-between px-4 py-3 shadow-sm md:px-4 xl:justify-center"
        >
          <div
            className={`flex self-center items-center justify-center ${
              !isCollapsed ? "gap-2" : ""
            }`}
          >
            <img
              src="/logo.png"
              className="h-[60px] xl:h-[80px] items-center mb-10"
            />
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle Navigation"
            aria-controls="sidebar-menu"
            aria-expanded={navOpened}
            onClick={() => setNavOpened((prev) => !prev)}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </Layout.Header>

        {/* Navigation links */}
        <Nav
          id="sidebar-menu"
          className={`z-40 h-full flex-1 overflow-auto ${
            navOpened ? "max-h-screen" : "max-h-0 py-0 md:max-h-screen md:py-2"
          }`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sideLinks}
        />

        {/* Scrollbar width toggle button */}
        {/* <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size="icon"
          variant="outline"
          className="absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex"
        >
          <IconChevronsLeft
            stroke={1.5}
            className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </Button> */}
      </Layout>
    </aside>
  );
}
