"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa6";

/* ===================== CONFIG ===================== */

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || "MewJi";

const BRAND = {
  primary: BRAND_NAME.slice(0, 4),
  secondary: BRAND_NAME.slice(4),
  description:
    "Fast, secure MLBB top-ups with instant delivery and 24×7 support — recharge diamonds in seconds.",
};

/* ===================== ENV LINKS ===================== */

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || "";
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
const INSTAGRAM_USERNAME =
  process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "instagram";
const WHATSAPP_STORE_LINK =
  process.env.NEXT_PUBLIC_WHATSAPP_STORE_LINK || "#";

const WHATSAPP_CHAT_LINK = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`
  : "#";

/* ===================== FOOTER LINKS ===================== */

const FOOTER_LINKS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Region", href: "/region" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

/* ===================== SOCIALS ===================== */

const SOCIALS_DESKTOP = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    hover: "hover:text-[var(--accent)]",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_CHAT_LINK,
    icon: FaWhatsapp,
    hover: "hover:text-[var(--accent)]",
  },
];

const SOCIALS_MOBILE = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    hover: "hover:text-[var(--accent)]",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_CHAT_LINK,
    icon: FaWhatsapp,
    hover: "hover:text-green-500",
  },
];

/* ===================== COMPONENT ===================== */

export default function Footer() {
  return (
    <footer className="mt-16 bg-[var(--card)] text-[var(--muted)] border-t border-[var(--border)]">

      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-2 bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
              {BRAND.primary}
              <span className="text-[var(--foreground)]">
                {BRAND.secondary}
              </span>
            </h2>

            <p className="text-xs leading-relaxed max-w-[220px]">
              {BRAND.description}
            </p>

            <p className="text-[10px] mt-2 text-[var(--muted)]">
              @{INSTAGRAM_USERNAME}
            </p>
          </div>

          {/* Link Sections */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="flex flex-col gap-1.5">
              <h3 className="text-[var(--accent)] font-semibold text-xs sm:text-sm mb-1">
                {section.title}
              </h3>

              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm hover:text-[var(--accent)] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Desktop Socials */}
          <div className="hidden md:flex flex-col gap-1.5">
            <h3 className="text-[var(--accent)] font-semibold text-xs sm:text-sm mb-1">
              Connect With Us
            </h3>

            <div className="flex items-center gap-3">
              {SOCIALS_DESKTOP.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${hover} hover:scale-110 transition-all`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-[var(--border)] py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Mobile Socials */}
            <div className="flex md:hidden gap-4">
              {SOCIALS_MOBILE.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${hover} hover:scale-110 transition-all`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Made By */}
            <p className="text-[10px] sm:text-xs text-center order-first sm:order-none">
              Made with{" "}
              <FaHeart className="inline w-3 h-3 text-[var(--accent)] mx-0.5 animate-pulse" />{" "}
              by{" "}
              <a
                href={WHATSAPP_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline"
              >
                Blue Buff
              </a>
            </p>

            {/* Copyright */}
            <p className="text-[10px] sm:text-xs">
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </p>

          </div>
        </div>
      </div>

    </footer>
  );
}
