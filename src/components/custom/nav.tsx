import { IconChevronLeft } from "@tabler/icons-react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { SideLink } from "@/data/sideLinks";
import useCheckActiveNav from "@/hooks/useCheckActiveNav";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
  links: SideLink[];
  closeNav: () => void;
}

export default function Nav({
  links,
  isCollapsed,
  className,
  closeNav,
}: NavProps) {
  const renderLink = ({ isBottom, ...rest }: SideLink) => {
    const key = `${rest.title}-${rest.href}`;

    if (isBottom) {
      return <NavLinkBottom {...rest} key={key} closeNav={closeNav} />;
    }

    return <NavLinkTop {...rest} key={key} closeNav={closeNav} />;
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        "group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none",
        className
      )}
    >
      <TooltipProvider delayDuration={0}>
        <nav className="grid group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map(renderLink)}
        </nav>
      </TooltipProvider>
    </div>
  );
}

interface NavLinkProps extends SideLink {
  subLink?: boolean;
  closeNav: () => void;
}

const NavLinkTop = ({
  title,
  href,
  sub,
  closeNav,
  subLink = false,
}: NavLinkProps) => {
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Link
      to={href}
      onClick={closeNav}
      className={cn(
        buttonVariants({ size: "sm" }),
        "h-12 justify-start text-wrap rounded-none pr-6 pl-3 shadow-none",
        subLink && "h-10 w-full px-2",
        checkActiveNav(href)
          ? "bg-gradient-to-r to-[#C2A6FF] from-[#905DFF] text-white rounded-tl-full rounded-bl-full"
          : "bg-transparent text-black"
      )}
      aria-current={checkActiveNav(href) ? "page" : undefined}
    >
      <div className="ml-2 border rounded-full w-2 h-2 border-black bg-transparent"></div>
      <p className="flex-1">{title}</p>
      {sub && <IconChevronLeft size={20} />}
    </Link>
  );
};

const NavLinkBottom = ({
  title,
  label,
  href,
  closeNav,
  subLink = false,
}: NavLinkProps) => {
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Link
      to={href}
      onClick={closeNav}
      className={cn(
        buttonVariants({ size: "sm" }),
        "h-12 justify-start text-wrap rounded-none pr-6 pl-3",
        subLink && "h-10 w-full border-l border-l-slate-500 px-2",
        "bg-gradient-to-r to-[#C2A6FF] from-[#905DFF] text-white"
      )}
      aria-current={checkActiveNav(href) ? "page" : undefined}
    >
      <div className="ml-2 border rounded-full w-2 h-2 border-black bg-white"></div>
      <p className="flex-1">{title}</p>
      {label && (
        <div className="ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground">
          {label}
        </div>
      )}
      <IconChevronLeft size={20} />
    </Link>
  );
};
