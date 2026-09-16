"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Menu,
  Boxes,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  aboutMenu,
  expertiseMenu,
  industriesMenu,
  productsMenu,
  projectsMenu,
} from "@/data/navigation";
import { MegaMenuData, MenuItem } from "@/types/navigation";
import ExpertiseMegaMenu from "./ExpertiseMegaMenu";

const megaMenus = [
  expertiseMenu,
  industriesMenu,
  productsMenu,
  projectsMenu,
  aboutMenu,
];

export default function MegaMenuHeader() {
  const pathname = usePathname();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleMenu = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-xl"
    >
      <div className="px-6 sm:px-8 md:px-8 lg:px-12">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 shrink-0"
            aria-label="Solvina India"
          >
            <Image
              src="./images/solvina-logo.png"
              alt="Solvina India"
              width={180}
              height={48}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {megaMenus.map((menu) => {
              const active = isActive(menu.href);
              const open = activeMenu === menu.label;

              return (
                <button
                  key={menu.label}
                  type="button"
                  onClick={() => toggleMenu(menu.label)}
                  className={`group relative flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 xl:px-3.5 ${
                    open || active
                      ? "text-[#B41448]"
                      : "text-[#252525] hover:text-[#B41448]"
                  }`}
                  aria-expanded={open}
                  aria-haspopup="true"
                >
                  {menu.label}

                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />

                  <span
                    className={`absolute right-3 bottom-0 left-3 h-[2px] rounded-full bg-[#E3A526] transition-all duration-300 ${
                      open || active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="h-11 rounded-md bg-[#B41448] px-5 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#9F103F] hover:shadow-md">
                Talk to an Engineer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-[#252525] hover:bg-black/5 hover:text-[#B41448] lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-l border-black/10 bg-white px-0 sm:!max-w-[400px] md:!max-w-[600px] lg:!max-w-[800px]"
            >
              <SheetHeader className="border-b border-black/10 px-6 py-5">
                <SheetTitle className="text-left">
                  <Image
                    src="./images/solvina-logo.png"
                    alt="Solvina India"
                    width={170}
                    height={46}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="px-6 pt-5 pb-8">
                {/* Mobile primary navigation */}
                <nav className="space-y-1">
                  {megaMenus.map((menu) => {
                    const expanded = mobileExpanded === menu.label;
                    const active = isActive(menu.href);
                    const Icon = menu.icon;

                    return (
                      <div
                        key={menu.label}
                        className="border-b border-black/[0.07]"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded(expanded ? null : menu.label)
                          }
                          className={`flex w-full items-center justify-between py-4 text-left ${
                            active ? "text-[#B41448]" : "text-[#252525]"
                          }`}
                        >
                          <span className="flex items-center gap-3 font-semibold">
                            <Icon className="h-4 w-4 text-[#B41448]" />
                            {menu.label}
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-7">
                                <Link
                                  href={menu.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="mb-2 block rounded-md bg-[#F7F7F7] px-4 py-3"
                                >
                                  <span className="text-sm font-semibold text-[#B41448]">
                                    Explore {menu.label}
                                  </span>

                                  <span className="mt-1 block text-xs leading-5 text-black/55">
                                    {menu.description}
                                  </span>
                                </Link>

                                <div className="space-y-1">
                                  {menu.items.map((item) => (
                                    <MobileMenuItem
                                      key={item.title}
                                      item={item}
                                      closeMenu={() => setMobileOpen(false)}
                                    />
                                  ))}
                                </div>

                                {menu.feature && (
                                  <Link
                                    href={menu.feature.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="mt-3 block rounded-md border border-[#E3A526]/40 bg-[#FFF9EC] p-4"
                                  >
                                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#B41448] uppercase">
                                      {menu.feature.eyebrow}
                                    </span>

                                    <span className="mt-1 block text-sm font-semibold text-[#252525]">
                                      {menu.feature.title}
                                    </span>

                                    <span className="mt-1 block text-xs leading-5 text-black/60">
                                      {menu.feature.description}
                                    </span>
                                  </Link>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-7 block"
                >
                  <Button className="h-12 w-full rounded-md bg-[#B41448] font-semibold text-white hover:bg-[#9F103F]">
                    Talk to an Engineer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <MegaMenuPanel
            menu={megaMenus.find((menu) => menu.label === activeMenu)!}
            closeMenu={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaMenuPanel({
  menu,
  closeMenu,
}: {
  menu: MegaMenuData;
  closeMenu: () => void;
}) {
  const isExpertise = menu.label === "Expertise";
  const isIndustries = menu.label === "Industries";
  const isProducts = menu.label === "Products";
  const isProjects = menu.label === "Projects & Case Studies";
  const isAbout = menu.label === "About";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="hidden border-t border-black/[0.06] bg-white lg:block"
    >
      <div className="px-5 pt-6 pb-7 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-black/[0.07] px-7 py-5">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase">
                  {menu.label}
                </span>
              </div>

              <p className="text-sm leading-6 text-black/60">
                {menu.description}
              </p>
            </div>

            <Link
              href={menu.href}
              onClick={closeMenu}
              className="group hidden items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors hover:text-[#8F103B] xl:flex"
            >
              Explore overview
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Navigation Grid */}
          {isExpertise && (
            <ExpertiseMegaMenu groups={menu.items} closeMenu={closeMenu} />
          )}

          {isIndustries && (
            <div className="grid min-h-[400px] grid-cols-4">
              {menu.items.map((item, index) => (
                <SimpleMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {isProducts && (
            <div className="grid min-h-[400px] grid-cols-2">
              {menu.items.map((item, index) => (
                <SimpleMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {isProjects && (
            <div className="grid min-h-[400px] grid-cols-2">
              {menu.items.map((item, index) => (
                <SimpleMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {isAbout && (
            <div className="grid min-h-[400px] grid-cols-3">
              {menu.items.map((item, index) => (
                <SimpleMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {/* Full-width Feature Footer */}
          {menu.feature && (
            <FeatureFooter feature={menu.feature} closeMenu={closeMenu} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MegaMenuColumn({
  group,
  index,
  closeMenu,
}: {
  group: MenuItem;
  index: number;
  closeMenu: () => void;
}) {
  const Icon = group.icon || Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.035,
        duration: 0.2,
      }}
      className="border-r border-black/[0.07] p-5 last:border-r-0"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#B41448]/[0.07]">
          <Icon className="h-3.5 w-3.5 text-[#B41448]" />
        </div>

        <h3 className="text-[11px] font-bold tracking-[0.1em] text-[#252525] uppercase">
          {group.title}
        </h3>
      </div>

      <div className="space-y-1">
        {group.children?.map((item) => (
          <MegaMenuLink key={item.title} item={item} closeMenu={closeMenu} />
        ))}
      </div>
    </motion.div>
  );
}

function MegaMenuLink({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) {
  // Items with children should NOT wrap everything in a Link.
  if (item.children) {
    return (
      <div className="rounded-lg px-2.5 py-2.5">
        {/* Parent capability */}
        <Link
          href={item.href}
          onClick={closeMenu}
          className="group block rounded-md transition-colors"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="text-[13px] leading-5 font-semibold text-[#252525] transition-colors group-hover:text-[#B41448]">
              {item.title}
            </span>

            <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-black/20 transition-all group-hover:translate-x-0.5 group-hover:text-[#B41448]" />
          </div>

          {item.description && (
            <p className="mt-1 text-[11px] leading-[1.55] text-black/50">
              {item.description}
            </p>
          )}
        </Link>

        {/* Child capabilities */}
        <div className="mt-2 border-l-2 border-[#E3A526]/50 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.title}
              href={child.href}
              onClick={closeMenu}
              className="group/child block rounded-md px-2 py-1.5 transition-colors hover:bg-black/[0.03]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-black/65 transition-colors group-hover/child:text-[#B41448]">
                  {child.title}
                </span>

                <ChevronRight className="h-3 w-3 text-black/20 transition-all group-hover/child:translate-x-0.5 group-hover/child:text-[#B41448]" />
              </div>

              {child.description && (
                <p className="mt-0.5 text-[10px] leading-4 text-black/40">
                  {child.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Normal single-level menu item
  return (
    <Link
      href={item.href}
      onClick={closeMenu}
      className="group block rounded-lg px-2.5 py-2.5 transition-colors hover:bg-[#F8F8F8]"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[13px] leading-5 font-semibold text-[#252525] transition-colors group-hover:text-[#B41448]">
          {item.title}
        </span>

        <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-black/20 transition-all group-hover:translate-x-0.5 group-hover:text-[#B41448]" />
      </div>

      {item.description && (
        <p className="mt-1 text-[11px] leading-[1.55] text-black/50">
          {item.description}
        </p>
      )}
    </Link>
  );
}

function SimpleMegaMenuItem({
  item,
  index,
  closeMenu,
}: {
  item: MenuItem;
  index: number;
  closeMenu: () => void;
}) {
  const Icon = item.icon || Boxes;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.035,
        duration: 0.2,
      }}
      className="border-r border-b border-black/[0.07] p-5"
    >
      <Link href={item.href} onClick={closeMenu} className="group block">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B41448]/[0.07] transition-colors group-hover:bg-[#B41448]">
            <Icon className="h-4 w-4 text-[#B41448] transition-colors group-hover:text-white" />
          </div>

          {item.badge && (
            <span className="rounded-full bg-[#FFF6DF] px-2 py-1 text-[9px] font-bold tracking-wider text-[#9A6D00] uppercase">
              {item.badge}
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm leading-5 font-semibold text-[#252525] transition-colors group-hover:text-[#B41448]">
            {item.title}
          </h3>

          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-black/20 transition-all group-hover:translate-x-1 group-hover:text-[#B41448]" />
        </div>

        {item.description && (
          <p className="mt-2 text-[11px] leading-[1.6] text-black/50">
            {item.description}
          </p>
        )}
      </Link>
    </motion.div>
  );
}

function FeatureFooter({
  feature,
  closeMenu,
}: {
  feature: NonNullable<MegaMenuData["feature"]>;
  closeMenu: () => void;
}) {
  return (
    <div className="relative overflow-hidden border-t border-black/[0.07] bg-[#191919]">
      {/* Decorative gold elements */}
      <div className="pointer-events-none absolute top-1/2 right-20 h-40 w-40 -translate-y-1/2 rounded-full border border-[#E3A526]/10" />

      <div className="pointer-events-none absolute top-1/2 right-10 h-24 w-24 -translate-y-1/2 rounded-full border border-[#E3A526]/10" />

      <div className="relative flex flex-col gap-5 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Content */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />

            <span className="text-[9px] font-bold tracking-[0.2em] text-[#E3A526] uppercase">
              {feature.eyebrow}
            </span>
          </div>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {feature.title}
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-white/55">
            {feature.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={feature.href}
          onClick={closeMenu}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-[#E3A526]/50 bg-[#E3A526]/10 px-5 py-3 text-xs font-semibold text-white transition-all duration-200 hover:border-[#E3A526] hover:bg-[#E3A526] hover:text-black"
        >
          {feature.cta}

          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

function MobileMenuItem({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    return (
      <div className="border-b border-black/[0.05]">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between py-3 text-left"
        >
          <div>
            <span className="block text-sm font-semibold text-[#252525]">
              {item.title}
            </span>

            {item.description && (
              <span className="mt-0.5 block text-[11px] leading-5 text-black/45">
                {item.description}
              </span>
            )}
          </div>

          <ChevronDown
            className={`h-4 w-4 text-black/40 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden border-l-2 border-[#E3A526]/50 pl-4"
            >
              {item.children.map((child) => (
                <Link
                  key={child.title}
                  href={child.href}
                  onClick={closeMenu}
                  className="block py-2.5"
                >
                  <span className="block text-xs font-semibold text-[#252525]">
                    {child.title}
                  </span>

                  {child.description && (
                    <span className="mt-0.5 block text-[10px] leading-4 text-black/45">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={closeMenu}
      className="flex items-start gap-3 border-b border-black/[0.05] py-3"
    >
      {item.icon && (
        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#B41448]" />
      )}

      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#252525]">
            {item.title}
          </span>

          {item.badge && (
            <span className="rounded-full bg-[#FFF6DF] px-1.5 py-0.5 text-[8px] font-bold text-[#9A6D00] uppercase">
              {item.badge}
            </span>
          )}
        </div>

        {item.description && (
          <span className="mt-0.5 block text-[11px] leading-5 text-black/45">
            {item.description}
          </span>
        )}
      </div>
    </Link>
  );
}