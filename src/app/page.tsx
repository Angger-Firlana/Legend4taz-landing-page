"use client";

import Image from "next/image";
import { FaVideo, FaMusic, FaBolt, FaGraduationCap, FaFire, FaStar, FaCameraRetro, FaHeadphones, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md flex justify-between items-center px-8 py-4 z-50">
        <h1 className="font-bold text-2xl text-[#2D5B84]">Legend4taz</h1>
        <nav className="flex gap-6">
          <a href="#services" className="font-medium text-[#2D5B84] hover:text-[#4ECDC4] transition">Layanan</a>
          <a href="#contact" className="font-medium text-[#2D5B84] hover:text-[#4ECDC4] transition">Kontak</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D5B84b3] to-[#4ECDC499]" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Professional Video Editing</h2>
          <p className="mt-4 text-lg md:text-xl text-white">Buat video keren dan menarik untuk semua platform digital dengan sentuhan profesional</p>
          <a href="#services" className="mt-6 inline-block bg-white text-[#2D5B84] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#2D5B84] hover:text-white transition">Jelajahi Layanan</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5B84]">Layanan Video Editing</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Kami menawarkan berbagai layanan editing video profesional untuk kebutuhan konten digital Anda</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <FaVideo />, title: "Cinematic Editing", desc: "Video sinematik berkualitas tinggi dengan storytelling dan color grading profesional." },
              { icon: <FaMusic />, title: "AMV & PMV", desc: "Anime & Picture Music Video dengan sinkronisasi beat sempurna." },
              { icon: <FaBolt />, title: "Jedag Jedug", desc: "Video viral dengan efek bass drop, transisi dinamis, dan tren terkini." },
              { icon: <FaGraduationCap />, title: "Video Edukasi", desc: "Konten pembelajaran & tutorial dengan visual menarik dan mudah dipahami." },
              { icon: <FaFire />, title: "Social Media Trends", desc: "Video untuk TikTok, Instagram Reels, dan YouTube Shorts yang up-to-date." },
              { icon: <FaStar />, title: "Custom Projects", desc: "Editing video sesuai kebutuhan dan kreativitas unik Anda." },
              { icon: <FaCameraRetro />, title: "Vlog Editing", desc: "Membuat vlog harian atau perjalanan Anda lebih menarik dan profesional." },
              { icon: <FaHeadphones />, title: "Podcast & Audio Video", desc: "Integrasi audio & video dengan editing clean dan suara jernih." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition transform text-center">
                <div className="text-4xl text-[#2D5B84] mb-4 mx-auto">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#2D5B84]">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#2D5B84] to-[#3A7BBD] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Follow & Connect</h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/80">Terhubung dengan kami melalui media sosial atau langsung hubungi via WhatsApp</p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="https://instagram.com/legend4taz" target="_blank" className="px-6 py-3 bg-white/20 rounded-full flex items-center gap-2 hover:bg-white/30 transition"><FaInstagram /> Instagram</a>
          <a href="https://youtube.com/@legend4taz" target="_blank" className="px-6 py-3 bg-white/20 rounded-full flex items-center gap-2 hover:bg-white/30 transition"><FaYoutube /> YouTube</a>
          <a href="https://tiktok.com/@anggerfrln_" target="_blank" className="px-6 py-3 bg-white/20 rounded-full flex items-center gap-2 hover:bg-white/30 transition"><FaTiktok /> TikTok</a>
        </div>

        <a href="https://wa.me/6289563035467" target="_blank" className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] px-6 py-3 rounded-full font-medium shadow-lg transition">
          <FaWhatsapp /> WhatsApp Business
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A3650] text-white/70 py-6 text-center text-sm">
        © 2025 Legend4taz - Professional Video Editing Services. All rights reserved.
      </footer>
    </div>
  );
}
