"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso Rush",
    category: "Coffee",
    price: "$4.50",
    image: "/images/espresso.png",
    description: "Bold dark roast",
  },
  {
    id: 2,
    name: "Matcha Dream",
    category: "Tea",
    price: "$5.50",
    image: "/images/matcha.png",
    description: "Ceremonial grade",
  },
  {
    id: 3,
    name: "Milkshake Paradise",
    category: "Beverage",
    price: "$6.00",
    image: "/images/milkshake.png",
    description: "Creamy & smooth",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const Menu = () => {
  return (
    <section id="menu" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background linear */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50 to-gray-100" />

      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-100/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-rose-100/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-mono">
            Featured Menu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked selections from our finest offerings
          </p>
        </motion.div>

        {/* Menu grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 will-change-transform"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-amber-600 mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {item.price}
                  </span>
                  <button className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors group/btn">
                    <LuArrowUpRight
                      size={18}
                      className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Full Menu
            <LuArrowUpRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
