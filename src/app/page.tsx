import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-gray-900">
        {/* navbar */}
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
