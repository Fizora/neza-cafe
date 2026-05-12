"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence, Variants } from "motion/react";

type NavItem = {
  name: string;
  link: string;
};

const navList: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "About", link: "/about" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle escape key press to close menu
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen, closeMenu]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, []);

  // Animation variants for popup menu (GPU accelerated)
  const popupVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 20,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 320,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 20,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-100 w-full p-2">
        <div className="mx-auto max-w-5xl flex items-center justify-between py-2 px-4 bg-white shadow-lg shadow-slate-200/80 rounded-full backdrop-blur-sm  border border-white/20">
          {/* Menu Button - always visible */}
          <div>
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 active:scale-95"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <LuX className="text-black" size={22} />
              ) : (
                <LuMenu className="text-black" size={22} />
              )}
            </button>
          </div>

          {/* Logo - centered */}
          <div className="text-xl sm:text-2xl font-bold text-black font-mono tracking-tight">
            Neza Cafe.
          </div>

          {/* Get in Touch Button */}
          <div>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-semibold leading-6 hover:bg-black text-white py-2 px-3 sm:px-4 rounded-full transition-all duration-200 bg-gray-800 active:scale-95 shadow-md"
            >
              Get in Touch
              <LuArrowUpRight
                className="bg-white text-black rounded-full p-0.5"
                size={18}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Popup Menu - always renders when open (works on all screen sizes) */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Popup Menu Card */}
            <motion.div
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col p-6 gap-2">
                {/* Close button inside popup for clarity */}
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <LuX size={20} />
                </button>

                <div className="mt-4 flex flex-col gap-3">
                  {navList.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition-all duration-200 group border border-transparent hover:border-gray-100"
                    >
                      {item.name}
                      <LuArrowUpRight
                        size={18}
                        className="text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  ))}

                  {/* Additional action inside mobile menu */}
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium text-black bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      Get in Touch
                      <LuArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
