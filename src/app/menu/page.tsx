"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LuArrowUpRight } from "react-icons/lu";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  badge?: string;
};

const allMenuItems: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: "Espresso Rush",
    category: "Coffee",
    price: "$4.50",
    image: "/images/espresso.png",
    description:
      "Bold, intense, and full of character — our signature dark roast pulls no punches.",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Cappuccino Classic",
    category: "Coffee",
    price: "$5.50",
    image: "/images/espresso.png",
    description:
      "Smooth espresso with perfectly steamed milk and delicate foam layer.",
  },
  {
    id: 3,
    name: "Latte Velvet",
    category: "Coffee",
    price: "$5.00",
    image: "/images/espresso.png",
    description: "Creamy and comforting latte with premium arabica beans.",
  },
  {
    id: 4,
    name: "Americano Strong",
    category: "Coffee",
    price: "$4.00",
    image: "/images/espresso.png",
    description: "Double shot espresso with hot water for a bold kick.",
  },
  {
    id: 5,
    name: "Macchiato Refined",
    category: "Coffee",
    price: "$5.25",
    image: "/images/espresso.png",
    description: "Espresso marked with a touch of velvety milk foam.",
  },
  {
    id: 6,
    name: "Cortado Balance",
    category: "Coffee",
    price: "$4.75",
    image: "/images/espresso.png",
    description: "Equal parts espresso and steamed milk for perfect balance.",
  },

  // Tea
  {
    id: 7,
    name: "Matcha Dream",
    category: "Tea",
    price: "$5.50",
    image: "/images/matcha.png",
    description:
      "Ceremonial grade matcha blended with creamy oat milk and a hint of vanilla.",
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "Green Tea Serenity",
    category: "Tea",
    price: "$4.50",
    image: "/images/matcha.png",
    description: "Fresh and light green tea with a soothing aroma.",
  },
  {
    id: 9,
    name: "Chai Spice Blend",
    category: "Tea",
    price: "$5.00",
    image: "/images/matcha.png",
    description: "Aromatic blend of chai spices with steamed milk.",
  },
  {
    id: 10,
    name: "Oolong Harmony",
    category: "Tea",
    price: "$5.25",
    image: "/images/matcha.png",
    description: "Premium oolong tea with floral notes and smooth finish.",
  },

  // Beverages
  {
    id: 11,
    name: "Milkshake Paradise",
    category: "Beverage",
    price: "$6.00",
    image: "/images/milkshake.png",
    description:
      "Thick, velvety milkshake topped with whipped cream and chocolate drizzle.",
    badge: "Best Seller",
  },
  {
    id: 12,
    name: "Strawberry Bliss",
    category: "Beverage",
    price: "$5.75",
    image: "/images/milkshake.png",
    description: "Fresh strawberry smoothie with vanilla ice cream.",
  },
  {
    id: 13,
    name: "Mango Paradise",
    category: "Beverage",
    price: "$5.50",
    image: "/images/milkshake.png",
    description: "Tropical mango blend with coconut milk.",
  },
  {
    id: 14,
    name: "Chocolate Indulgence",
    category: "Beverage",
    price: "$5.75",
    image: "/images/milkshake.png",
    description: "Rich chocolate shake with cocoa powder and marshmallow.",
  },
  {
    id: 15,
    name: "Banana Split Dream",
    category: "Beverage",
    price: "$6.25",
    image: "/images/milkshake.png",
    description: "Banana smoothie with caramel and chocolate layers.",
  },

  // Food
  {
    id: 16,
    name: "Burger Bliss",
    category: "Food",
    price: "$9.50",
    image: "/images/burger.png",
    description:
      "Juicy tempeh patty with fresh veggies and our special sauce, served on a soft bun.",
    badge: "Vegan",
  },
  {
    id: 17,
    name: "Carbonara Futtecion",
    category: "Food",
    price: "$10.00",
    image: "/images/carbonara.png",
    description: "Creamy pasta with crispy bacon, egg, and aged parmesan.",
  },
  {
    id: 18,
    name: "Chicken Teriyaki",
    category: "Food",
    price: "$9.75",
    image: "/images/chicken-teriyaki.png",
    description:
      "Tender chicken glazed with homemade teriyaki sauce and sesame seeds.",
  },
  {
    id: 19,
    name: "Caesar Salad Supreme",
    category: "Food",
    price: "$8.50",
    image: "/images/burger.png",
    description:
      "Crisp romaine with parmesan, croutons, and housemade dressing.",
  },
  {
    id: 20,
    name: "Quinoa Buddha Bowl",
    category: "Food",
    price: "$9.00",
    image: "/images/carbonara.png",
    description:
      "Nutritious quinoa with roasted vegetables and tahini dressing.",
    badge: "Vegan",
  },
  {
    id: 21,
    name: "Grilled Salmon Fillet",
    category: "Food",
    price: "$11.50",
    image: "/images/chicken-teriyaki.png",
    description: "Fresh salmon with lemon butter and seasonal vegetables.",
  },
];

const categories = ["All", "Coffee", "Tea", "Beverage", "Food"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 font-hero">
                Our Complete Menu
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our carefully curated selection of beverages and
                dishes, crafted with passion and premium ingredients.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 will-change-transform"
                >
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-4 right-4 z-20 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.badge}
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Label */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        {item.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-gray-900 text-white hover:bg-amber-600 transition-colors group/btn"
                      >
                        <LuArrowUpRight
                          size={18}
                          className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform"
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">
                  No items found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          {/* Floating decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating cards/rectangles */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-32 h-32 border border-slate-200 rounded-3xl opacity-40"
            />
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-40 h-40 border-2 border-gray-300 rounded-full opacity-30"
            />

            {/* Floating dots/circles */}
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-slate-400 opacity-50"
            />
            <motion.div
              animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-gray-400 opacity-40"
            />

            {/* Floating lines */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/3 left-1/4 w-40 h-px bg-gradient-to-r from-slate-300 to-transparent opacity-30"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 right-1/3 w-32 h-px bg-gradient-to-l from-gray-300 to-transparent opacity-30"
            />

            {/* Floating blurred shapes */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-slate-200 blur-3xl opacity-10"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gray-200 blur-3xl opacity-10"
            />

            {/* Extra floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-slate-500 opacity-30"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, delay: 2 }}
              className="absolute top-1/4 left-1/3 w-24 h-24 border border-gray-300 rounded-lg opacity-20"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-block mb-6"
              >
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
                  Next Step
                </span>
              </motion.div>

              {/* Main heading */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight font-hero">
                Ready to Order?
              </h2>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="h-1 w-16 bg-gradient-to-r from-slate-400 to-gray-400 mx-auto mb-8 origin-center"
              />

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Discover the perfect blend of taste and quality. Order now for
                delivery or visit us at our location to experience Neza Cafe in
                person.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 bg-gray-900 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Order Now
                    <LuArrowUpRight
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 bg-black -z-10 transition-all duration-300 group-hover:scale-110" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 text-gray-900 font-bold rounded-full border-2 border-gray-900 transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Visit Us
                    <LuArrowUpRight
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                </motion.button>
              </div>

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-12 border-t border-gray-200 flex flex-col sm:flex-row gap-8 justify-center text-gray-600 text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span>Free delivery for orders over $20</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span>Open 7 days a week</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span>Premium quality guaranteed</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
