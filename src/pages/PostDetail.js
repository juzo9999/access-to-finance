import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500 font-semibold">
        <p>🚫 Post not found. Check the URL or return to the <Link to="/content" className="underline text-primary">Content page</Link>.</p>
      </div>
    );
  }

  return (
    <div className="bg-softGray min-h-screen text-textMain px-4 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg border border-borderLight">
        <h1 className="text-3xl font-bold text-accent mb-4">{post.title}</h1>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-md mb-6"
          />
        )}

        <div className="text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
          {post.content}
        </div>

        <div className="mt-10 text-right">
          <Link to="/content" className="text-primary underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;