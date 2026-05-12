"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LuSearch,
  LuCoffee,
  LuLeaf,
  LuMilk,
  LuCake,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

const categories = [
  { id: "all", name: "All", icon: LuCoffee },
  { id: "coffee", name: "Coffee", icon: LuCoffee },
  { id: "matcha", name: "Matcha", icon: LuLeaf },
  { id: "milkshake", name: "Milkshake", icon: LuMilk },
  { id: "dessert", name: "Dessert", icon: LuCake },
];

const menuItems = [
  {
    id: 1,
    name: "Espresso Shot",
    description:
      "Bold and intense single-origin espresso with notes of dark chocolate.",
    price: "Rp 25.000",
    category: "coffee",
    image: "/images/espresso.png",
    popular: true,
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and rich caramel sauce.",
    price: "Rp 35.000",
    category: "coffee",
    image: "/images/caramel.png",
    popular: true,
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Ceremonial grade matcha blended with creamy oat milk.",
    price: "Rp 38.000",
    category: "matcha",
    image: "/images/matcha.png",
    popular: true,
  },
  {
    id: 4,
    name: "Matcha Frappe",
    description: "Iced matcha blended with milk and topped with whipped cream.",
    price: "Rp 42.000",
    category: "matcha",
    image: "/images/matcha.png",
    popular: false,
  },
  {
    id: 5,
    name: "Chocolate Milkshake",
    description: "Thick, creamy milkshake with rich chocolate flavor.",
    price: "Rp 40.000",
    category: "milkshake",
    image: "/images/milkshake.png",
    popular: false,
  },
  {
    id: 6,
    name: "Strawberry Milkshake",
    description: "Sweet and refreshing strawberry milkshake.",
    price: "Rp 40.000",
    category: "milkshake",
    image: "/images/milkshake.png",
    popular: false,
  },
  {
    id: 7,
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with berry compote.",
    price: "Rp 35.000",
    category: "dessert",
    image: "/images/cheesecake.png",
    popular: true,
  },
  {
    id: 8,
    name: "Chocolate Croissant",
    description: "Flaky buttery croissant filled with premium dark chocolate.",
    price: "Rp 28.000",
    category: "dessert",
    image: "/images/croissant.png",
    popular: false,
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
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-white to-gray-50 pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 font-mono"
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Crafted with passion, served with love — discover our signature
              collection of beverages and treats.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <LuSearch
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                        activeCategory === category.id
                          ? "bg-gray-900 text-white shadow-lg"
                          : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-8 pb-24">
          <div className="mx-auto max-w-6xl">
            {paginatedItems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No items found. Try a different search.
                </p>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginatedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Badge */}
                    {item.popular && (
                      <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          {item.price}
                        </span>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                >
                  <LuChevronLeft size={20} />
                </button>
                <span className="text-gray-600 font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                >
                  <LuChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-32 h-32 border border-amber-200 rounded-3xl opacity-40"
            />
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-40 h-40 border-2 border-emerald-200 rounded-full opacity-30"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-mono">
                Can't decide?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Let our baristas recommend the perfect drink for your mood.
                Visit us today and experience the Neza Cafe difference.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-black"
              >
                Visit Our Cafe
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
