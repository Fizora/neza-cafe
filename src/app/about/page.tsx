"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LuCircleCheck, LuLeaf, LuHeart, LuStar } from "react-icons/lu";

const values = [
  {
    id: 1,
    icon: LuHeart,
    title: "Passion",
    description:
      "We pour our hearts into every cup, every dish, and every customer interaction.",
  },
  {
    id: 2,
    icon: LuLeaf,
    title: "Sustainability",
    description:
      "Eco-friendly practices are at the core of everything we do, from sourcing to packaging.",
  },
  {
    id: 3,
    icon: LuStar,
    title: "Quality",
    description:
      "Premium ingredients and expert craftsmanship define every item on our menu.",
  },
  {
    id: 4,
    icon: LuCircleCheck,
    title: "Community",
    description:
      "We believe in building meaningful connections with our customers and neighbors.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Neza Cafe was founded with a simple vision: to create a space where quality coffee and community thrive together.",
  },
  {
    year: "2020",
    title: "Expansion",
    description:
      "Launched our signature menu items and expanded our offerings to include premium teas and healthy beverages.",
  },
  {
    year: "2022",
    title: "Going Green",
    description:
      "Committed to sustainability by switching to 100% recyclable packaging and ethically sourced ingredients.",
  },
  {
    year: "2024",
    title: "Community Hub",
    description:
      "Became the go-to spot for locals, hosting events, workshops, and creating memorable experiences.",
  },
];

const team = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder & Head Barista",
    image: "/images/espresso.png",
    bio: "Coffee enthusiast with 10+ years of experience in specialty coffee.",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Head Chef",
    image: "/images/carbonara.png",
    bio: "Culinary expert dedicated to creating innovative and delicious dishes.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Sustainability Manager",
    image: "/images/matcha.png",
    bio: "Environmental advocate ensuring eco-friendly practices across operations.",
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-gray-100 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 font-mono">
                Our Story
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Welcome to Neza Cafe, where every cup tells a story of passion,
                quality, and community. Since 2018, we've been crafting moments
                that matter.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/espresso.png"
                alt="Neza Cafe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-linear-to-b from-white to-gray-50">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4 font-mono">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To create a welcoming sanctuary where exceptional coffee,
                  thoughtful food, and genuine human connection come together.
                  We believe that every visit should be memorable, every product
                  should be excellent, and every person should feel valued.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4 font-mono">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be recognized as the most trusted and beloved cafe in our
                  community, setting the standard for quality, sustainability,
                  and customer care. We aim to inspire others to pursue
                  excellence and make a positive impact on the world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-mono">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                These principles guide everything we do
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.id}
                    variants={itemVariants}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <Icon size={28} className="text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-mono">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                A timeline of growth and milestones
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block" />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-12"
              >
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    variants={itemVariants}
                    className={`flex gap-8 ${
                      index % 2 === 0
                        ? "md:flex-row-reverse md:text-right"
                        : "md:flex-row"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center shrink-0 w-1/2">
                      <div className="w-4 h-4 rounded-full bg-gray-900 absolute left-1/2 transform -translate-x-1/2 z-10" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4 font-mono">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Passionate individuals dedicated to excellence
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {team.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden bg-linear-to-b from-white to-gray-50">
          {/* Floating decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-mono">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Experience the Neza Cafe difference. Visit us today and become
                part of our growing family of coffee enthusiasts and community
                members.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-black"
              >
                Visit Us Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
