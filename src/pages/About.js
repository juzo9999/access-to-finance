import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-secondary text-textLight px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-primary text-center">About the Program</h1>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">📌 Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To enhance access to finance for SMEs by linking them with large private sector anchors who can de-risk their growth and ensure sustainable financing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">🌍 Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            A thriving ecosystem where small businesses can scale through structured private sector-led financial support, contributing to national economic development.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">🛠️ What We Do</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Match SMEs to sector-specific anchor partners.</li>
            <li>Facilitate de-risked financing pipelines through private sector validation.</li>
            <li>Provide business development support services.</li>
            <li>Strengthen collaboration between financial institutions and value chains.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">🤝 Our Partners</h2>
          <p className="text-gray-300">
            We work with recognized anchor companies, banks, and development agencies to ensure success across sectors like agriculture, manufacturing, and energy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-2">🎯 Beneficiaries</h2>
          <p className="text-gray-300">
            Small and Medium Enterprises (SMEs), cooperatives, and startups working in critical sectors who need structured support and financing to grow.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;