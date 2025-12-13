"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

const initialBlogs: BlogPost[] = [
  {
    id: "post-1",
    title: "Getting Started with MERN: Project Setup",
    summary: "A step-by-step guide to scaffold a MERN app and folder structure.",
    description:
      "Learn how to quickly scaffold a MERN (MongoDB, Express, React, Node) application, set up separate client and server folders, and wire up a basic API endpoint.",
    image:
      "https://www.datocms-assets.com/48294/1671537942-mern-stack-1-mern-stack.png?auto=format",
    date: "2025-09-01",
    link: "https://www.mongodb.com/mern-stack",
  },
  {
    id: "post-2",
    title: "MongoDB Schema Design Best Practices",
    summary: "Design performant and flexible MongoDB schemas for real apps.",
    description:
      "When to embed vs reference, indexing strategies, and modeling one-to-many and many-to-many relationships for scalability.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D12AQErKcl9LGgsOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1569937761416",
    date: "2025-08-25",
    link: "https://www.mongodb.com/docs/manual/core/data-model-design/",
  },
  {
    id: "post-3",
    title: "Authentication with JWT in Express",
    summary: "Implement secure JWT-based auth with refresh tokens.",
    description:
      "Create signup/login endpoints, hash passwords, issue JWTs, and secure routes using Express middleware.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQC9RPday60QGVMTUOZr5TbMxCLHK9PcWsg&s",
    date: "2025-08-10",
    link: "https://jwt.io/",
  },
  {
    id: "post-4",
    title: "Building RESTful APIs: Conventions & Tips",
    summary: "Design predictable APIs and versioning strategies.",
    description:
      "REST conventions, status codes, pagination, filtering, error handling, and versioning for production services.",
    image:
      "https://uploads.sitepoint.com/wp-content/uploads/2020/08/1597808919build-restful-api.png",
    date: "2025-07-30",
    link: "https://restfulapi.net/",
  },
];

const BlogPage: FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const showMore = () =>
    setVisibleCount((v) => Math.min(v + 6, initialBlogs.length));

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="text-white">Blog / </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Articles
        </span>
      </h1>

      {/* Featured */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialBlogs.slice(0, 3).map((post) => (
            <motion.a
              variants={itemVariants}
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{post.summary}</p>
                <div className="text-gray-500 text-sm mt-auto">
                  {post.date}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* All Posts */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialBlogs.slice(0, visibleCount).map((post) => (
            <motion.a
              variants={itemVariants}
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl bg-gray-800 transition transform hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-2">{post.summary}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {visibleCount < initialBlogs.length ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              onClick={showMore}
            >
              More
            </motion.button>
          ) : (
            <div className="text-gray-400">No more posts</div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPage;
