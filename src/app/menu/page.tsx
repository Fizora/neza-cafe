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
  LuStar,
  LuClock,
} from "react-icons/lu";

const categories = [
  { id: "all", name: "All", icon: LuCoffee },
  { id: "coffee", name: "Coffee", icon: LuCoffee },
  { id: "matcha", name: "Matcha", icon: LuLeaf },
  { id: "milkshake", name: "Milkshake", icon: LuMilk },
  { id: "dessert", name: "Dessert", icon: LuCake },
];

// Hanya gunakan gambar yang tersedia: espresso.png, matcha.png, milkshake.png
const menuItems = [
  {
    id: 1,
    name: "Espresso Shot",
    description:
      "Single-origin Ethiopian beans, bold dark roast with notes of dark chocolate.",
    price: "Rp 25.000",
    category: "coffee",
    image: "/images/espresso.png", // tersedia
    popular: true,
    prepTime: "3 min",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and rich caramel sauce.",
    price: "Rp 35.000",
    category: "coffee",
    image: "", // fallback ke icon
    popular: true,
    prepTime: "4 min",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Matcha Latte",
    description:
      "Ceremonial grade matcha from Uji, Japan. Velvety smooth with subtle umami.",
    price: "Rp 38.000",
    category: "matcha",
    image: "/images/matcha.png", // tersedia
    popular: true,
    prepTime: "4 min",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Matcha Frappe",
    description: "Iced matcha blended with milk and topped with whipped cream.",
    price: "Rp 42.000",
    category: "matcha",
    image: "/images/matcha.png", // tersedia
    popular: false,
    prepTime: "5 min",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Chocolate Milkshake",
    description: "Thick, creamy milkshake with rich chocolate flavor.",
    price: "Rp 40.000",
    category: "milkshake",
    image: "/images/milkshake.png", // tersedia
    popular: false,
    prepTime: "5 min",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Strawberry Milkshake",
    description:
      "Sweet and refreshing strawberry milkshake. Real strawberries blended fresh.",
    price: "Rp 40.000",
    category: "milkshake",
    image: "/images/milkshake.png", // tersedia
    popular: false,
    prepTime: "5 min",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Cheesecake",
    description:
      "Creamy New York style cheesecake with berry compote. Baked fresh daily.",
    price: "Rp 35.000",
    category: "dessert",
    image: "", // fallback ke icon
    popular: true,
    prepTime: "2 min",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Chocolate Croissant",
    description: "Flaky buttery croissant filled with premium dark chocolate.",
    price: "Rp 28.000",
    category: "dessert",
    image: "", // fallback ke icon
    popular: false,
    prepTime: "2 min",
    rating: 4.5,
  },
];

// Helper untuk mendapatkan icon berdasarkan kategori (untuk fallback)
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "coffee":
      return LuCoffee;
    case "matcha":
      return LuLeaf;
    case "milkshake":
      return LuMilk;
    case "dessert":
      return LuCake;
    default:
      return LuCoffee;
  }
};

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
      ease: "easeOut",
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
        {/* Hero Section (sama) */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gray-100/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-gray-100/20 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-gray-500 font-mono text-sm tracking-wider mb-3"
            >
              — CRAFTED WITH PASSION —
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4"
            >
              Our <span className="text-black">Menu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Every sip, every bite tells a story of quality and dedication.
              Explore our signature collection — each item crafted by expert
              hands.
            </motion.p>
          </div>
        </section>

        {/* Search and Filter (sama) */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative w-full md:w-96">
                <LuSearch
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Find your favorite..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                        activeCategory === category.id
                          ? "bg-black text-white shadow-md"
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

        {/* Menu Grid dengan fallback icon */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-8 pb-24">
          <div className="mx-auto max-w-5xl">
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {paginatedItems.map((item) => {
                  const FallbackIcon = getCategoryIcon(item.category);
                  const hasImage = item.image && item.image.trim() !== "";
                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      {/* Badge Popular */}
                      {item.popular && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-black text-white shadow-sm">
                            Best Seller
                          </span>
                        </div>
                      )}

                      {/* Image / Fallback Icon */}
                      <div className="relative h-52 overflow-hidden bg-gray-100 flex items-center justify-center">
                        {hasImage ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <FallbackIcon
                            size={64}
                            className="text-gray-400 group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full">
                            <LuStar className="w-3 h-3 text-gray-500 fill-gray-500" />
                            <span className="text-xs font-medium text-gray-700">
                              {item.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <LuClock className="w-3 h-3" />
                            <span>{item.prepTime}</span>
                          </div>
                          <span className="text-xl font-bold text-gray-900">
                            {item.price}
                          </span>
                        </div>
                        <button className="w-full py-2.5 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-all group/btn">
                          Order Now
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
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
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden bg-linear-to-b from-gray-50 to-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 border border-gray-200 rounded-3xl opacity-40" />
            <div className="absolute bottom-20 right-10 w-40 h-40 border border-gray-200 rounded-full opacity-30" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Still Hesitating?
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Let our baristas recommend the perfect drink for your mood.
                Visit us today — your first coffee is on us when you bring a
                friend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md">
                  View Full Menu
                </button>
                <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-all shadow-md">
                  Reserve a Table
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                ✧ Walk-ins welcome • Open daily 8 AM – 10 PM
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
