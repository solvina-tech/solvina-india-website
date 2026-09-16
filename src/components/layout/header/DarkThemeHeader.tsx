"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Boxes,
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react";
import { assetPath } from "@/lib/assets";

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
import EnquiryCTA from "@/components/forms/EnquiryCTA";

const megaMenus = [
  expertiseMenu,
  industriesMenu,
  productsMenu,
  projectsMenu,
  aboutMenu,
];

export default function DarkThemeHeader() {
  const pathname = usePathname();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  /*
   * Close desktop mega menu when route changes.
   */
  useEffect(() => {
    setActiveMenu(null);
    setMobileExpanded(null);
    setMobileOpen(false);
  }, [pathname]);

  /*
   * Close desktop mega menu when clicking outside.
   */
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
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleMenu = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#171717] shadow-[0_8px_30px_rgba(0,0,0,0.22)]"
    >
      {/* ============================================================
          HEADER BAR
      ============================================================ */}

      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center"
            aria-label="Solvina India"
          >
            <Image
              src={assetPath("/images/solvina-logo-negative.png")}
              alt="Solvina India"
              width={180}
              height={48}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          {/* ========================================================
              DESKTOP NAVIGATION
          ======================================================== */}

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
                  className={`group relative flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 xl:px-3.5 ${
                    open || active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-expanded={open}
                  aria-haspopup="true"
                >
                  {menu.label}

                  <ChevronDown
                    className={`h-3.5 w-3.5 text-white/50 transition-transform duration-200 ${
                      open ? "rotate-180 text-[#E3A526]" : ""
                    }`}
                  />

                  {/* Gold underline */}
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

          {/* ========================================================
              DESKTOP CTA
          ======================================================== */}

          <div className="hidden lg:block">
            <EnquiryCTA label="Talk to Our Engineers" type="Technical Enquiry" />
          </div>

          {/* ========================================================
              MOBILE MENU
          ======================================================== */}

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-white hover:bg-white/[0.08] hover:text-[#E3A526] lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-md overflow-y-auto border-l border-white/[0.08] bg-[#171717] px-0 text-white"
            >
              {/* Mobile Header */}
              <SheetHeader className="border-b border-white/[0.08] px-6 py-5">
                <SheetTitle className="text-left">
                  <Image
                    src={assetPath("/images/solvina-logo-negative.png")}
                    alt="Solvina India"
                    width={170}
                    height={46}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="px-6 pt-5 pb-8">
                {/* Mobile Navigation */}
                <nav className="space-y-1">
                  {megaMenus.map((menu) => {
                    const expanded = mobileExpanded === menu.label;

                    const active = isActive(menu.href);

                    return (
                      <MobileNavigationItem
                        key={menu.label}
                        menu={menu}
                        expanded={expanded}
                        active={active}
                        onToggle={() =>
                          setMobileExpanded(expanded ? null : menu.label)
                        }
                        closeMenu={() => setMobileOpen(false)}
                      />
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 block"
                >
                  <Button className="h-12 w-full rounded-md bg-[#B41448] font-semibold text-white transition-colors hover:bg-[#9F103F]">
                    Talk to an Engineer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ============================================================
          DESKTOP MEGA MENU
      ============================================================ */}

      <AnimatePresence>
        {activeMenu && (
          <DarkMegaMenuPanel
            menu={megaMenus.find((menu) => menu.label === activeMenu)!}
            closeMenu={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

/* ==================================================================
   DESKTOP MEGA MENU
================================================================== */

function DarkMegaMenuPanel({
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
      initial={{
        opacity: 0,
        y: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -8,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="hidden border-t border-white/[0.07] bg-[#171717] lg:block"
    >
      <div className="px-6 pt-6 pb-7 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1D1D1D] shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          {/* ======================================================
              MEGA MENU HEADER
          ====================================================== */}

          <div className="flex items-start justify-between border-b border-white/[0.08] px-7 py-5">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#E3A526] uppercase">
                  {menu.label}
                </span>
              </div>

              <p className="text-sm leading-6 text-white/55">
                {menu.description}
              </p>
            </div>

            <Link
              href={menu.href}
              onClick={closeMenu}
              className="group hidden items-center gap-2 text-xs font-semibold text-[#E3A526] transition-colors hover:text-white xl:flex"
            >
              Explore overview
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ======================================================
              EXPERTISE
          ====================================================== */}

          {isExpertise && (
            <ExpertiseMegaMenuDark groups={menu.items} closeMenu={closeMenu} />
          )}

          {/* ======================================================
              INDUSTRIES
          ====================================================== */}

          {isIndustries && (
            <div className="grid min-h-[400px] grid-cols-4">
              {menu.items.map((item, index) => (
                <DarkMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {/* ======================================================
              PRODUCTS
          ====================================================== */}

          {isProducts && (
            <div className="grid min-h-[400px] grid-cols-2">
              {menu.items.map((item, index) => (
                <DarkMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {/* ======================================================
              PROJECTS
          ====================================================== */}

          {isProjects && (
            <div className="grid min-h-[400px] grid-cols-2">
              {menu.items.map((item, index) => (
                <DarkMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {/* ======================================================
              ABOUT
          ====================================================== */}

          {isAbout && (
            <div className="grid min-h-[400px] grid-cols-3">
              {menu.items.map((item, index) => (
                <DarkMegaMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          )}

          {/* ======================================================
              FULL WIDTH FEATURE FOOTER
          ====================================================== */}

          {menu.feature && (
            <DarkFeatureFooter feature={menu.feature} closeMenu={closeMenu} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ==================================================================
   DARK EXPERTISE MENU
================================================================== */

function ExpertiseMegaMenuDark({
  groups,
  closeMenu,
}: {
  groups: MenuItem[];
  closeMenu: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGroup = groups[activeIndex];

  if (!activeGroup) {
    return null;
  }

  return (
    <div className="grid min-h-[390px] grid-cols-[400px_1fr]">
      {/* ============================================================
          LEFT CAPABILITY NAVIGATION
      ============================================================ */}

      <div className="border-r border-white/[0.08] bg-[#191919] p-4">
        <div className="mb-3 px-3">
          <span className="text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">
            Capability Architecture
          </span>
        </div>

        <div className="space-y-1">
          {groups.map((group, index) => {
            const Icon = group.icon || Activity;
            const active = index === activeIndex;

            return (
              <button
                key={group.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-3.5 text-left transition-all duration-200 ${
                  active
                    ? "bg-[#252525] text-white shadow-sm"
                    : "text-white/65 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {/* Active indicator */}
                <span
                  className={`absolute top-1/2 left-0 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-[#B41448] transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Icon */}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors ${
                    active
                      ? "bg-[#B41448] text-white"
                      : "bg-[#242424] text-[#E3A526] group-hover:bg-[#B41448] group-hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] leading-4 font-semibold">
                    {group.title}
                  </span>

                  <span
                    className={`mt-0.5 block text-[9px] ${
                      active ? "text-white/45" : "text-white/30"
                    }`}
                  >
                    {group.children?.length || 0} capabilities
                  </span>
                </span>

                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    active ? "translate-x-0.5 text-[#E3A526]" : "text-white/20"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          RIGHT CAPABILITY CONTENT
      ============================================================ */}

      <div className="relative overflow-hidden bg-[#1D1D1D]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.title}
            initial={{
              opacity: 0,
              x: 12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -8,
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
            className="h-full p-7"
          >
            {/* Heading */}
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />

                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#E3A526] uppercase">
                    Expertise
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {activeGroup.title}
                </h3>
              </div>

              <Link
                href={activeGroup.href}
                onClick={closeMenu}
                className="group hidden shrink-0 items-center gap-2 text-xs font-semibold text-[#E3A526] transition-colors hover:text-white sm:flex"
              >
                Explore all
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Capability Cards */}
            <div className="grid grid-cols-2 gap-3">
              {activeGroup.children?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group rounded-xl border border-white/[0.08] bg-[#232323] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E3A526]/40 hover:bg-[#282828] hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-[13px] leading-5 font-semibold text-white/90 transition-colors group-hover:text-[#E3A526]">
                      {item.title}
                    </h4>

                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[#E3A526]" />
                  </div>

                  {item.description && (
                    <p className="mt-2 text-[11px] leading-[1.6] text-white/45">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>

            {/* Small-screen overview */}
            <Link
              href={activeGroup.href}
              onClick={closeMenu}
              className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#E3A526] sm:hidden"
            >
              Explore {activeGroup.title}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==================================================================
   DARK MEGA MENU ITEM
================================================================== */

function DarkMegaMenuItem({
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
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.035,
        duration: 0.2,
      }}
      className="border-r border-b border-white/[0.07] p-5"
    >
      <Link href={item.href} onClick={closeMenu} className="group block">
        {/* Icon / badge */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B41448]/15 transition-colors group-hover:bg-[#B41448]">
            <Icon className="h-4 w-4 text-[#E3A526] transition-colors group-hover:text-white" />
          </div>

          {item.badge && (
            <span className="rounded-full bg-[#E3A526]/10 px-2 py-1 text-[9px] font-bold tracking-wider text-[#E3A526] uppercase">
              {item.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm leading-5 font-semibold text-white/90 transition-colors group-hover:text-[#E3A526]">
            {item.title}
          </h3>

          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[#E3A526]" />
        </div>

        {/* Description */}
        {item.description && (
          <p className="mt-2 text-[11px] leading-[1.6] text-white/45">
            {item.description}
          </p>
        )}
      </Link>
    </motion.div>
  );
}

/* ==================================================================
   DARK FEATURE FOOTER
================================================================== */

function DarkFeatureFooter({
  feature,
  closeMenu,
}: {
  feature: NonNullable<MegaMenuData["feature"]>;
  closeMenu: () => void;
}) {
  return (
    <div className="relative overflow-hidden border-t border-white/[0.08] bg-[#101010]">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute top-1/2 right-24 h-40 w-40 -translate-y-1/2 rounded-full border border-[#E3A526]/10" />

      <div className="pointer-events-none absolute top-1/2 right-12 h-24 w-24 -translate-y-1/2 rounded-full border border-[#E3A526]/10" />

      <div className="relative flex flex-col gap-5 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Text */}
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

          <p className="mt-1.5 text-xs leading-5 text-white/45">
            {feature.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={feature.href}
          onClick={closeMenu}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-[#E3A526]/40 bg-[#E3A526]/10 px-5 py-3 text-xs font-semibold text-white transition-all duration-200 hover:border-[#E3A526] hover:bg-[#E3A526] hover:text-black"
        >
          {feature.cta}

          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* ==================================================================
   MOBILE NAVIGATION ITEM
================================================================== */

function MobileNavigationItem({
  menu,
  expanded,
  active,
  onToggle,
  closeMenu,
}: {
  menu: MegaMenuData;
  expanded: boolean;
  active: boolean;
  onToggle: () => void;
  closeMenu: () => void;
}) {
  return (
    <div className="border-b border-white/[0.07]">
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between py-4 text-left transition-colors ${
          active ? "text-[#E3A526]" : "text-white/85 hover:text-white"
        }`}
      >
        <span className="font-semibold">{menu.label}</span>

        <ChevronDown
          className={`h-4 w-4 text-white/40 transition-transform ${
            expanded ? "rotate-180 text-[#E3A526]" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
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
            <div className="pb-5 pl-2">
              {/* Overview */}
              <Link
                href={menu.href}
                onClick={closeMenu}
                className="mb-3 block rounded-lg border border-white/[0.07] bg-white/[0.04] px-4 py-3"
              >
                <span className="text-sm font-semibold text-[#E3A526]">
                  Explore {menu.label}
                </span>

                <span className="mt-1 block text-[11px] leading-5 text-white/40">
                  {menu.description}
                </span>
              </Link>

              {/* Items */}
              <div className="space-y-1">
                {menu.items.map((item) => (
                  <MobileMenuItemDark
                    key={item.title}
                    item={item}
                    closeMenu={closeMenu}
                  />
                ))}
              </div>

              {/* Feature */}
              {menu.feature && (
                <Link
                  href={menu.feature.href}
                  onClick={closeMenu}
                  className="mt-4 block rounded-lg border border-[#E3A526]/20 bg-[#E3A526]/[0.05] p-4"
                >
                  <span className="text-[9px] font-bold tracking-[0.16em] text-[#E3A526] uppercase">
                    {menu.feature.eyebrow}
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-white">
                    {menu.feature.title}
                  </span>

                  <span className="mt-1 block text-[11px] leading-5 text-white/40">
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
}

/* ==================================================================
   MOBILE ITEM
================================================================== */

function MobileMenuItemDark({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  /*
   * Parent with children.
   * We deliberately don't put child <Link>s inside a parent <Link>.
   */
  if (item.children) {
    return (
      <div className="border-b border-white/[0.05]">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between py-3 text-left"
        >
          <div>
            <span className="block text-sm font-semibold text-white/80">
              {item.title}
            </span>

            {item.description && (
              <span className="mt-0.5 block text-[10px] leading-5 text-white/35">
                {item.description}
              </span>
            )}
          </div>

          <ChevronDown
            className={`h-4 w-4 text-white/30 transition-transform ${
              expanded ? "rotate-180 text-[#E3A526]" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden border-l-2 border-[#E3A526]/40 pl-4"
            >
              {item.children.map((child) => (
                <Link
                  key={child.title}
                  href={child.href}
                  onClick={closeMenu}
                  className="block py-2.5"
                >
                  <span className="block text-xs font-semibold text-white/75">
                    {child.title}
                  </span>

                  {child.description && (
                    <span className="mt-0.5 block text-[10px] leading-4 text-white/35">
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
      className="flex items-start gap-3 border-b border-white/[0.05] py-3"
    >
      {item.icon && (
        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#E3A526]" />
      )}

      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white/80">
            {item.title}
          </span>

          {item.badge && (
            <span className="rounded-full bg-[#E3A526]/10 px-1.5 py-0.5 text-[8px] font-bold text-[#E3A526] uppercase">
              {item.badge}
            </span>
          )}
        </div>

        {item.description && (
          <span className="mt-0.5 block text-[11px] leading-5 text-white/35">
            {item.description}
          </span>
        )}
      </div>
    </Link>
  );
}
