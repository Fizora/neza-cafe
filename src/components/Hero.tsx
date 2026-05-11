"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  LuArrowRight,
  LuArrowLeft,
  LuShoppingBag,
  LuArrowUpRight,
} from "react-icons/lu";

type Drink = {
  id: number;
  name: string;
  description: string;
  image: string; // now using external URLs
  color: string;
  bgColor: string;
};

const drinks: Drink[] = [
  {
    id: 1,
    name: "Espresso Rush",
    description:
      "Bold, intense, and full of character — our signature dark roast pulls no punches.",
    image: "/images/espresso.png", // fallback coffee
    color: "text-amber-800",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    name: "Matcha Dream",
    description:
      "Ceremonial grade matcha blended with creamy oat milk and a hint of vanilla.",
    image: "/images/matcha.png",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
  },
  {
    id: 3,
    name: "Milkshake Paradise",
    description:
      "Thick, velvety milkshake topped with whipped cream and chocolate drizzle.",
    image: "/images/milkshake.png",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    id: 4,
    name: "Burger Bliss",
    description:
      "Juicy tempeh patty with fresh veggies and our special sauce, served on a soft bun.",
    image: "/images/burger.png",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    id: 5,
    name: "Carbonara Futtecion",
    description:
      "Cappuccino is a classic coffee drink made with espresso and steamed milk.",
    image: "/images/carbonara.png",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    id: 6,
    name: "Chicken Teriyaki",
    description:
      "Cappuccino is a classic coffee drink made with espresso and steamed milk.",
    image: "/images/chicken-teriyaki.png",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

const Hero = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentDrink = drinks[currentIndex];

  const handleNext = () => {
    if (isDragging) return;
    setPage([(currentIndex + 1) % drinks.length, 1]);
  };

  const handlePrev = () => {
    if (isDragging) return;
    setPage([(currentIndex - 1 + drinks.length) % drinks.length, -1]);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isDragging]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-white via-gray-50 to-white pt-24 md:pt-32">
      {/* Abstract background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl" />
        <div className="absolute top-1/3 right-10 w-60 h-60 rounded-full bg-rose-100/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Image Carousel */}
        <div
          ref={containerRef}
          className="relative flex justify-center items-center min-h-[350px] sm:min-h-[450px] md:min-h-[500px]"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset, velocity }) => {
                setIsDragging(false);
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  handleNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  handlePrev();
                }
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-linear-to-t from-gray-100/50 to-transparent rounded-full blur-2xl" />
                <Image
                  src={currentDrink.image}
                  alt={currentDrink.name}
                  width={400}
                  height={400}
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 active:scale-95 z-20"
            aria-label="Previous drink"
          >
            <LuArrowLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 active:scale-95 z-20"
            aria-label="Next drink"
          >
            <LuArrowRight size={24} className="text-gray-700" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 pb-4">
            {drinks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-gray-800"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom content: left = title + description, right = order button */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            key={currentIndex + "text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold ${currentDrink.color} font-hero`}
            >
              {currentDrink.name}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
              {currentDrink.description}
            </p>
          </motion.div>

          <motion.div
            key={currentIndex + "btn"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <button className="group relative inline-flex items-center gap-3 rounded-full hover:bg-black px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 bg-gray-800 active:scale-95 overflow-hidden">
              <LuShoppingBag
                size={22}
                className="transition-transform group-hover:-rotate-12"
              />
              <span>Order Now</span>
              <LuArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="absolute inset-0 z-0 duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute bottom-10 left-5 opacity-20 pointer-events-none">
          <div className="w-12 h-12 rounded-full border-2 border-amber-300 rotate-12" />
        </div>
        <div className="absolute top-40 right-5 opacity-20 pointer-events-none">
          <div className="w-8 h-8 rounded-full border border-emerald-400" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-5 bg-gray-400"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
