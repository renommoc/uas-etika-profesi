import {
  AsteriskIcon,
  BookOpenIcon,
  BriefcaseIcon,
  HouseIcon,
  LightbulbIcon,
  LightningIcon,
  ListIcon,
  QuestionIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { Link, useLocation } from "react-router";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Beranda", href: "/", icon: HouseIcon },
  { title: "Landasan Teori", href: "/theory", icon: BookOpenIcon },
  { title: "Studi Kasus", href: "/cases", icon: BriefcaseIcon },
  { title: "Dampak Teknologi", href: "/impact", icon: LightningIcon },
  { title: "Solusi & Regulasi", href: "/solutions", icon: LightbulbIcon },
  { title: "Quiz", href: "/quiz", icon: QuestionIcon },
];

const DesktopNav = () => {
  const location = useLocation();

  return (
    <NavigationMenu className="hidden w-full justify-start md:justify-center lg:block">
      <NavigationMenuList className="flex flex-col gap-1 border-0 bg-transparent md:flex-row">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <NavigationMenuItem key={item.title}>
              <Link
                to={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-foreground text-xs transition-all duration-200 hover:bg-foreground/10 hover:text-foreground focus:bg-foreground/10",
                  isActive && "bg-foreground/10 font-medium",
                )}
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = () => {
  const location = useLocation();
  const mobileMenuItems = [...menuItems, { title: "Tim", href: "/team", icon: UsersIcon }];

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button
          type="button"
          className="flex h-8 items-center gap-2 rounded-sm bg-foreground/15 px-3 transition hover:bg-foreground/25 focus:outline-none lg:hidden"
        >
          <ListIcon weight="duotone" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Menu Navigasi</DrawerTitle>
          <DrawerDescription>Pilih halaman yang ingin Anda kunjungi</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-2 pt-2 pb-6">
          {mobileMenuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.title}
                to={item.href}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2.5 font-medium text-sm transition-all duration-200 focus:outline-none",
                  isActive
                    ? "bg-foreground/10 font-medium text-foreground"
                    : "text-foreground/50 hover:bg-foreground/10 hover:text-foreground",
                )}
              >
                <IconComponent size={18} weight="duotone" className="shrink-0" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export const Navbar = () => {
  const location = useLocation();
  const isAnggotaActive = location.pathname === "/anggota";

  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="mx-auto flex h-12 max-w-[90%] items-center justify-between rounded-md border border-foreground/10 bg-foreground/5 px-2 shadow-xl backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-sm bg-foreground/15 text-foreground">
            <AsteriskIcon weight="duotone" className="size-5" />
          </div>
          <span className="font-heading font-semibold text-foreground text-xs">Kelompok 9</span>
        </div>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <Link
            to="/team"
            className={cn(
              "hidden h-8 items-center gap-2 rounded-sm bg-foreground/15 px-3 text-foreground transition hover:bg-foreground/25 focus:outline-none lg:flex",
              isAnggotaActive && "bg-foreground/25 font-medium",
            )}
          >
            <UsersIcon weight="duotone" className="size-4" />
            <span className="text-xs">Tim</span>
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};
