import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Access to Finance – Home</title>
  <meta name="description" content="The official Access to Finance homepage for agro-entrepreneurs and partners." />
  <link rel="canonical" href="https://access-to-finance.vercel.app" />
</Helmet>


const Content = () => {
  return (
    <div className="bg-softGray min-h-screen py-16 px-4 text-textMain">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-10 text-center">
          📚 Articles, Updates & Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              to={`/posts/${post.id}`}
              key={post.id}
              className="block bg-white border border-borderLight rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-accent mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.summary}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-medium">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;