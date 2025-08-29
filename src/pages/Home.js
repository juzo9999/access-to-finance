import React from "react";
import { Link } from "react-router-dom";
import partners from "../data/partners"; // Make sure to import this at the top
import { Helmet } from "react-helmet";
import SEO from "../components/SEO"; // Import your SEO component if you have one
import Navbar from "../components/Navbar";
import programs from "../data/programs";
<Helmet>
  {/* SEO Basics */}
  <title>Access to Finance – Home</title>
  <link rel="canonical" href="https://accesstofinance.com.ng/" />
  <meta
    name="description"
    content="The official Access to Finance homepage for agro-entrepreneurs and partners."
  />

  {/* Open Graph (social previews) */}
  <meta property="og:url" content="https://accesstofinance.com.ng/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Access to Finance – Empowering Agro-Entrepreneurs" />
  <meta
    property="og:description"
    content="Learn about finance opportunities, programs, and partnerships for agro-entrepreneurs in Nigeria."
  />
  <meta
    property="og:image"
    content="https://i.postimg.cc/hvQZkY0h/image.png"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Access to Finance – Empowering Agro-Entrepreneurs" />
  <meta
    name="twitter:description"
    content="Learn about finance opportunities, programs, and partnerships for agro-entrepreneurs in Nigeria."
  />
  <meta
    name="twitter:image"
    content="https://i.postimg.cc/hvQZkY0h/image.png"
  />

  {/* Structured Data for Google Logo */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://accesstofinance.com.ng",
        "logo": "https://i.postimg.cc/hvQZkY0h/image.png"
      }
    `}
  </script>
</Helmet>


const Home = () => {
  return (
    <div className="bg-green text-textMain">
      <>
  <SEO
    title="Access to Finance – Prime Anchor Model"
    description="A private sector-led initiative enabling financing, infrastructure, and market support for Nigerian agribusinesses."
    url="https://accesstofinance.com.ng"
  />
  
  {/* Existing homepage JSX goes here... */}
</>
      <Navbar />
      
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-white-100 via-white to-green rounded-b-3xl shadow-md animate-fadeInUp">
        <div className="max-w-6xl mx-auto text-center py-20 px-6">
          <img src="https://i.postimg.cc/hvQZkY0h/image.png" alt="Access to finance logo" className="mx-auto w-42 mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Access to Finance Program
          </h1>
          <h3 className="text-lg md:text-xl text-gray-700 mb-6">
            The Prime Anchor Model – Private Sector-Led Initiative
          </h3>
          <Link
            to="/apply"
            className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:scale-105 transform transition"
          >
            📥 Apply Now
          </Link>
        </div>
      </section>

      {/* ✅ About Section */}
<section className="bg-white border-b border-borderLight grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
  {programs.map((program) => {
    // 🎨 assign unique background colors by program id
    const programColors = {
      mandate: "bg-blue-100",
      mission: "bg-green-100",
      vision: "bg-yellow-100",
      About: "bg-purple-100",
      Recognition: "bg-pink-100",
      Philosophy: "bg-red-100",
      Document: "bg-orange-100",
      Priorities: "bg-brown-100",
      Contact: "bg-black-100",
    }

    return (
      <Link
        key={program.id}
        to={`/programs/${program.id}`}
        className={`flex flex-col justify-between p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ${
          programColors[program.id] || "bg-gray-100"
        }`}
      >
        <h2 className="text-xl font-bold text-primary mb-3">{program.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{program.short}</p>
      </Link>
    )
  })}
</section>


      {/* ✅ Objectives */}
      <section className="bg-green-300 border-b border-borderLight py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-black">🧭 What Makes Us Different?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We Facilitate — not hand out.</li>
            <li>We Anchor Enterprises — not politicians.</li>
            <li>We Rebuild Trust — with MDAs, funders, and communities.</li>
            <li>We Champion Ownership — not rent-seeking.</li>
            <li>We Empower rural economic growth,food and nutrition security</li>
          </ul>
        </div>
      </section>

      {/* ✅ Services */}
      <section className="bg-white border-b border-borderLight py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-primary">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">💼 Loan Facilitation</h4>
              <p>Connecting agro-entities with banks and financing tools.</p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">📊 Business Support</h4>
              <p>Assistance with planning, proposals, and M&E documentation.</p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">🔌 Energy Access</h4>
              <p>Linkage to REA, DisCos, and energy providers for productivity.</p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">📈 Stakeholder Linkage</h4>
              <p>Collaboration with ministries, donors, processors, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Who Can Apply */}
      <section className="bg-green border-b border-borderLight py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-primary">Who Can Apply?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🧑‍🌾 Cooperatives with farmer clusters</li>
            <li>🏭 Agro-processing firms</li>
            <li>🐄 Livestock/poultry clusters</li>
            <li>👩‍💼 Youth & women-led agro-enterprises</li>
            <li>💡 SMEs in agriculture or agro-energy</li>
          </ul>
        </div>
      </section>
<section className="bg-white border-b border-borderLight py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-primary">Key Stakeholders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">1. Federal and State Government and their MDAs</h4>
              <p>(These provide policy backing, referral, budgetary support, and recognition).</p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">2. Financial Institutions / Development Finance Partners
</h4>
              <p>These provide blended or direct financing, credit guarantees, and risk instruments-NIRSAL Microfinance Bank,
Nigeria Incentive-Based Risk Sharing System for Agricultural Lending (NIRSAL PLC)
</p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">3. Private Sector Anchors / Off-takers</h4>
              <p>*Processor companies (maize millers, rice processors, poultry aggregators)
Input suppliers (seed, feed, fertilizer distributors)
Logistics / Mechanization service provid
</p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">4. Electricity Distribution Companies (DisCos) , Rural Electrification Agency REA</h4>
              <p></p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">5. Cluster of farming communities/ Cooperatives  </h4>
              <p></p>
            </div>
            <div className="p-5 border border-borderLight rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gold">6. Strategic Technical & Training Partners</h4>
              <p>Policy and Agricultural Systems Strengthening Project (PASS), Synergos Nigeria</p>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ Partners */}
      <section className="bg-white border-b border-borderLight py-12">
        <div className="max-w-6xl mx-auto space-y-8 px-4">
          <h2 className="text-2xl font-bold text-primary text-center">Partners & Supporters</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
              {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green border border-borderLight rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:scale-105 w-full max-w-[160px] text-center p-4 flex flex-col items-center"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-16 h-16 object-contain mb-2"
          />
            <span className="text-sm font-medium text-textMain">{partner.name}</span>
            </a>
          ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-darkGreen text-white py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-4 text-sm text-center">
          <p>Email: access2finance.ng@gmail.com | Phone: +234 [8037013655]</p>
          <p>Office: Maccido Dalhat Secretariat Complex, Kaduna</p>
          <p className="text-accent">
            © 2025 Access to Finance Program – Powered by Primeagro and Energy Facilitation Services ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;