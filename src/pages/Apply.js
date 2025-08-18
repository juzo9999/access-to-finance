import React from "react";
import ExpressionOfInterestForm from "../components/ExpressionOfInterestForm";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

const Apply = () => {
  return (
    <div className="bg-softGray min-h-screen text-textMain">
      <Helmet>
       <title>Apply – Access to Finance</title>
       <link rel="canonical" href="https://accesstofinance.com.ng/Apply" />
       <meta name="description" content="Apply for the Access to Finance Prime Anchor Model program." />
      </Helmet>


      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-16 animate-fadeInUp">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          📋 Access to Finance Program – Expression of Interest
        </h1>
        <p className="text-center mb-8">
          Fill the form below to express interest in the Prime Anchor Model.
        </p>
        <ExpressionOfInterestForm />
      </section>
    </div>
  );
};

export default Apply;
