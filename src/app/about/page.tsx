"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LuCoffee,
  LuUsers,
  LuHeart,
  LuClock,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/40 to-white -z-10" />
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gray-100/30 blur-3xl -z-10" />

          <div className="mx-auto max-w-5xl text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-gray-500 font-mono text-sm tracking-wider mb-3"
            >
              — OUR STORY —
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4"
            >
              More Than <span className="text-black">Coffee</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Neza Cafe was born from a simple belief: great coffee brings
              people together. Today, we're a sanctuary for dreamers, creators,
              and coffee lovers.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-gray-900">
                  The Beginning
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  It started in 2018 — a tiny 200 sq ft space in the heart of
                  the city, a second-hand espresso machine, and a crazy dream. I
                  was a corporate worker tired of tasteless coffee and rushed
                  mornings. So I quit.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With savings that barely lasted 6 months, I opened Neza Cafe.
                  The first month, only 3 customers came. But I kept brewing,
                  kept learning, kept perfecting every single cup. Word spread.
                  By month six, we had queues around the block.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we've served over 50,000 cups of joy. But nothing has
                  changed — I still wake up at 5 AM to roast the beans myself.
                  Because that's what real passion looks like.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/20 to-transparent z-10" />
                <Image
                  src="/images/cafe-interior.jpg"
                  alt="Neza Cafe interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy & Values */}
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mx-auto max-w-5xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Drives Us
            </h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every decision we make is rooted in these principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: LuCoffee,
                title: "Quality Obsession",
                desc: "We source beans directly from family farms. Freshly roasted, never sitting more than 14 days.",
              },
              {
                icon: LuUsers,
                title: "Community First",
                desc: "Our space is designed for connection — free Wi-Fi, power outlets, and cozy corners for everyone.",
              },
              {
                icon: LuHeart,
                title: "Radical Honesty",
                desc: "No hidden fees. No overpriced nonsense. Just honest coffee at fair prices.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <value.icon className="w-10 h-10 text-gray-700 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mx-auto max-w-5xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Meet the Baristas
            </h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full" />
            <p className="text-gray-600 mt-4">
              The passionate humans behind your perfect cup
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Alex Rivera",
                role: "Head Barista & Roaster",
                desc: "5 years at Specialty Coffee Association championships. He can taste altitude in your beans.",
                initials: "AR",
              },
              {
                name: "Maya Sari",
                role: "Pastry Chef",
                desc: "Former pastry instructor. Creates our beloved croissants and cheesecakes from scratch daily.",
                initials: "MS",
              },
            ].map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex gap-4 bg-gray-50 p-5 rounded-xl"
              >
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-lg">
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{person.name}</h3>
                  <p className="text-gray-600 text-sm">{person.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{person.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Visit Us */}
        <section className="bg-linear-to-b from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <LuCoffee className="w-12 h-12 text-gray-300 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Experience the Neza Difference
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto">
                Whether you need a morning pick-me-up, a quiet place to work, or
                a spot to catch up with friends — we're here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <LuMapPin size={18} className="text-gray-400" />
                  <span>123 Coffee Lane, Jakarta</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <LuClock size={18} className="text-gray-400" />
                  <span>Mon–Sun: 8 AM – 10 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <LuPhone size={18} className="text-gray-400" />
                  <span>+62 812 3456 7890</span>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href="/menu"
                  className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg"
                >
                  Explore Our Menu
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
