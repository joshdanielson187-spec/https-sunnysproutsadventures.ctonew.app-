"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import navigation from "@/data/navigation";
import siteConfig from "@/data/site-config";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  currentPath,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus trap: focus the close button when opened
  useEffect(() => {
    if (isOpen) {
      const closeBtn = panelRef.current?.querySelector<HTMLButtonElement>(
        '[data-close]'
      );
      closeBtn?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl
                   flex flex-col overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
          <Logo size="sm" />
          <button
            data-close
            type="button"
            className="p-2 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100
                       focus:outline-none focus:ring-2 focus:ring-sunny-yellow"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 pt-4 space-y-1" aria-label="Mobile navigation">
          {navigation.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block px-4 py-3 rounded-2xl text-lg font-display font-semibold transition-colors ${
                  isActive
                    ? "bg-sunny-yellow/20 text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="p-4 border-t border-gray-100">
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3
                       rounded-2xl bg-red-500 text-white font-display font-semibold
                       hover:bg-red-600 transition-colors duration-150"
            aria-label="Watch on YouTube (opens in new tab)"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
