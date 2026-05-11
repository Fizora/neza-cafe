"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuTwitter,
  LuInstagram,
  LuFacebook,
  LuArrowUpRight,
} from "react-icons/lu";

type SocialLink = {
  name: string;
  icon: React.ComponentType<any>;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: LuTwitter,
    href: "https://twitter.com/nezacafe",
  },
  {
    name: "Instagram",
    icon: LuInstagram,
    href: "https://instagram.com/nezacafe",
  },
  {
    name: "Facebook",
    icon: LuFacebook,
    href: "https://facebook.com/nezacafe",
  },
];

const footerLinks = {
  Product: [
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#story" },
  ],
  Company: [
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
  ],
  Legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gray-800/50 blur-3xl" />
        <div className="absolute -top-20 -left-40 w-72 h-72 rounded-full bg-amber-900/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16"
          >
            {/* Brand section */}
            <motion.div variants={itemVariants} className="col-span-1">
              <h3 className="text-2xl font-bold mb-3 font-mono tracking-tight">
                Neza Cafe.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Crafting moments, one cup at a time. Our commitment to quality
                and sustainability.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants}>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center group"
                      >
                        {link.name}
                        <LuArrowUpRight
                          size={14}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mb-8" />

          {/* Bottom section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Neza Cafe. All rights reserved.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <a
                href="#contact"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-700" />
              <a
                href="mailto:hello@nezacafe.com"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                hello@nezacafe.com
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - appears when not at footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0 }}
          className="pointer-events-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
