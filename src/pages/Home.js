import React from "react";
import { Link } from "react-router-dom";
import partners from "../data/partners"; // Make sure to import this at the top
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO"; // Import your SEO component if you have one
<Helmet>
  <title>Access to Finance – Home</title>
  <meta name="description" content="The official Access to Finance homepage for agro-entrepreneurs and partners." />
  <link rel="canonical" href="https://access-to-finance.vercel.app" />
</Helmet>
const Home = () => {
  return (
    <div className="bg-secondary text-textMain">
      <>
  <SEO
    title="Access to Finance – Prime Anchor Model"
    description="A private sector-led initiative enabling financing, infrastructure, and market support for Nigerian agribusinesses."
    url="https://access-to-finance.vercel.app"
  />
  
  {/* Existing homepage JSX goes here... */}
</>

      {/* ✅ Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl md:text-2xl font-bold text-primary">🌾 Access to Finance</h1>
          <ul className="flex gap-6 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-primary transition">Home</Link>
            </li>
            <li>
              <Link to="/apply" className="hover:text-primary transition">Apply</Link>
            </li>
            <li>
              <Link to="/content" className="hover:text-primary transition">Content</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-green-100 via-white to-green-50 rounded-b-3xl shadow-md animate-fadeInUp">
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
      <section className="bg-white border-b border-borderLight py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-primary">About the Program</h2>
          <p>
            The program was developed by Abubakar Aliyu Kusfa, an agricultural facilitator and policy advocate, in response to the chronic exclusion of credible agro-enterprises from finance, energy, and input support. With deep experience navigating public-private landscapes, Kusfa pioneered this model after engagements with both Federal Ministries Departments and Agencies (MDAs) and Kaduna State institutions.
           Our journey began in May 2022, and were captured under the budget of the Kaduna State Ministry of Agriculture in 2023, where it was approved and institutionalized. Since then, we have grown into a movement, with Strategic Implementation Plan (SIP) and an Operational Guide Framework (OGF) that clearly define our mission, structure, and implementation pathway.
          </p>
          
      {/*<br /><h2 className="text-2xl font-bold text-primary"></h2><br/>*/}
      <br /><h2 className="text-2xl font-bold text-primary">Our Approach</h2><br/>

          <p>
            Private-Sector-Led, Public policy Guided, Government-Supported: <br/>
            While the Ministry of Agriculture provides oversight and legitimacy, day-to-day facilitation is handled by a private Program Management Team (PMT).

            The Prime Anchor Model:
            This involves identifying capable private sector “Prime Anchors” that support clusters of farmers or processors by linking them to finance, inputs, technology, and markets.

            Strategic Implementation Plan (SIP) & Operational Guide Frameworks (OGF):
            Our implementation is guided by two key documents:

            Strategic Implementation Plan (SIP) – 24 pages <br/>

            Operational Guide Framework (OGF) – 10 pages<br/>


           Facilitation Not Distribution:
           We guide real agro-entities to credible financing and partnerships, without directly handling input procurement or fund disbursement.
          </p>

          <br /><h2 className="text-2xl font-bold text-primary"> Our Mission</h2><br/>
          <p>
            "To provide an enabling environment for agribusiness development through the efficient management of resources, deployment of improved technologies, and market facilitation for inclusive, sustainable, and profitable agricultural enterprise."

            (Adapted from Kaduna State Agricultural Policy)

          </p>
          <br /><h2 className="text-2xl font-bold text-primary"> Our vision</h2><br/>
          <p>
            A Nigeria where agriculture is a business, not a burden — where markets are structured, electricity powers production, and facilitation unlocks finance for those who feed the nation.

          </p>
          

            <br /><h2 className="text-2xl font-bold text-primary">About Us</h2><br />
            <p>
              Access to Finance Program (The Prime Anchor Model – Private Sector-Led) is a strategic, results-driven intervention initiated under the Kaduna State Government and now gaining national attention for its potential to transform agricultural financing and productivity across Nigeria.

              We exist to provide a sustainable, non-subsidy-based model for empowering real agro-entities — farmers, processors, cooperatives, and integrated value chains — through facilitation, private financing, and market structuring.


            </p>


 
          <br /><h2 className="text-2xl font-bold text-primary">Our Mandate</h2><br />
          <p>
            We aim to:

            Facilitate access to sustainable financing for agro-processing companies, cooperatives, and farming clusters.<br />

            Reduce the burden of public subsidy and shift to private-led investment.<br />

            Drive compliance, reduce default, and de-risk agro value chain investments.<br />

            Power up rural agriculture through energy partnerships (off-grid and grid-aligned).<br />

            Engage with government, Development Finance Institutions (DFIs), regulators, and MDAs for national replication.<br />



          </p>


          <br /><h2 className="text-2xl font-bold text-primary">What Makes Us Uniqe</h2><br />
        <p>
          We are private-sector-led, public-sector-recognized.<br />

        We facilitate — we do not distribute subsidies or inputs.<br />

        We operate with a full implementation framework (SIP & OGF).<br />

        We are multi-sectoral, engaging power, finance, and development sectors.<br />

        We coordinate three platforms under one leadership:<br/>

      <br/>🔹 Access to Finance Program<br/>
      <br/>🔹 Primeagro and Energy Facilitation Services Ltd<br/>
      <br/>🔹 Rights and Democracy Volunteers (RDV)<br/>

        </p>


        <br /><h2 className="text-2xl font-bold text-primary">Our Collaboration and Recognition</h2><br />
        <p>
          We are:

         Recognized by the Central Bank of Nigeria post-ABP reform. <br />

         In active discussion with SEC, FMFEC, Planning & Budget Commission, and SMEDAN. <br />

         Working with KAEDCO, REA, PUFF, and NIRSAL on powering agro-entities.<br />

         Implementing recommendations from the Kaduna State Executive Council to expand prime anchors to tomatoes, ginger, sugarcane, and livestock.<br />

         Strengthening engagement with rural markets across 255 wards in Kaduna State.<br />


        </p>



        


        <br /><h2 className="text-2xl font-bold text-primary">Our Core Documents</h2><br />
        <p>
          Strategic Implementation Plan (SIP) – 24 pages.<br />

          Operational Guide Framework (OGF) – 10 pages.<br />

          National Position Paper – for federal traction and replication.<br />


        </p>

        <br /><h2 className="text-2xl font-bold text-primary">Our Philosophy</h2><br />
        <p>
          We believe in replacing wasteful subsidy programs with smart, structured facilitation.<br /> Our program redefines the role of government as key enabler, supporter, facilitator not provider — and unlocks finance, infrastructure, and legitimacy for agro-entities to thrive sustainably.

        </p>
        <br /><h2 className="text-2xl font-bold text-primary">Priorities </h2><br/>
          <p>
            Institutionalize the model in federal frameworks (NDP 2026–2030).

            Expand Prime Anchors to sugarcane, tomatoes, livestock, and ginger.<br />

            Digitally structure rural markets in 255 Kaduna State wards as pioneer.<br />

            Integrate off-grid energy solutions for agro-enterprises.<br />

            Expand national recognition and attract private investment.<br />


            “Agriculture is not a poverty trap. It is a business opportunity — when facilitated rightly.”<br />



          </p>

        <br /><h2 className="text-2xl font-bold text-primary">Contact Us</h2><br/>
          <p>
            We welcome engagement with:

            Development Finance Institutions (DFIs),<br />

            State and Federal Ministries,<br />

            Energy providers and regulators,<br />

            Private investors, Prime Anchors,<br />

            Researchers, cooperatives, agro-entrepreneurs,<br />

            Donors, CSOs, and advocacy organizations.<br />

          </p>
            

        </div>
      </section>

      {/* ✅ Objectives */}
      <section className="bg-softGray border-b border-borderLight py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-primary">🧭 What Makes Us Different?</h2>
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
      <section className="bg-softGray border-b border-borderLight py-10 px-6">
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
                className="bg-softGray border border-borderLight rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:scale-105 w-full max-w-[160px] text-center p-4 flex flex-col items-center"
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
          <p>Email: access2finance.ng@gmail.com | Phone: +234 [insert]</p>
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