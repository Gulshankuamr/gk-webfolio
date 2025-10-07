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
      "https://media.licdn.com/dms/image/v2/C4D12AQErKcl9LGgsOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1569937761416?e=2147483647&v=beta&t=diSIIKyWL3FXXP484PfEdWoJTgAZFiPwr3s_d1pNsmg",
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
  {
    id: "post-5",
    title: "Using Mongoose Effectively",
    summary: "Schemas, validation, middleware, and query helpers.",
    description:
      "Explore schema types, built-in validation, pre/post hooks, and query helpers for efficient MongoDB use.",
    image:
      "https://content.cloudthat.com/resources/wp-content/uploads/2024/06/Optimizing-Data-Platform-Development-by-Harnessing-the-Power-of-CI-CD-3.webp",
    date: "2025-07-15",
    link: "https://mongoosejs.com/docs/",
  },
  {
    id: "post-6",
    title: "Connecting React to Express: Fetch vs Axios",
    summary: "Which client to choose and how to structure calls.",
    description:
      "Compare fetch and axios, interceptors, base URLs, error handling, and service-layer architecture.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGL04pmyWEDPg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1728644376299?e=2147483647&v=beta&t=jg8cxhyeavTd_qlcJygRXO7IAMI1y5ggQrLsueWouk8",
    date: "2025-06-28",
    link: "https://www.linkedin.com/pulse/axios-vs-fetch-which-one-should-you-choose-your-next-2jrcf/",
  },
  {
    id: "post-7",
    title: "State Management Patterns for React",
    summary: "Local state, context, Redux, and server-state choices.",
    description:
      "Choosing between component state, Context API, Redux Toolkit, and React Query for data flow.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjK_FD_dFO9THV39hTYwqvexWXjWBYfnkv2w&s",
    date: "2025-06-05",
    link: "https://redux.js.org/",
  },
  {
    id: "post-9",
    title: "Deploying MERN Apps: Vercel & Render",
    summary: "Deploy frontend and backend with env configs.",
    description:
      "Step-by-step deployment to Vercel (React) and Render (Express) with proper environment setup.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQEd0QbQCxgB-A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711989262291?e=2147483647&v=beta&t=YidtxkA5VqNA7JQ-EkWLA1rpK9Z9hI2InWJ6nhY4hi4",
    date: "2025-05-01",
    link: "https://vercel.com/docs",
  },
  {
    id: "post-10",
    title: "Realtime with Socket.io in MERN",
    summary: "Add chat or live updates to your MERN apps.",
    description:
      "Integrate Socket.io for chat, notifications, and realtime presence in your MERN stack.",
    image: "https://socket.io/images/logo.svg",
    date: "2025-04-10",
    link: "https://socket.io/",
  },
  {
    id: "post-11",
    title: "Testing Express APIs with Jest & Supertest",
    summary: "Automate backend testing efficiently.",
    description:
      "Learn Jest + Supertest basics for API integration tests and CI automation.",
    image: "https://jestjs.io/img/opengraph.png",
    date: "2025-03-18",
    link: "https://jestjs.io/",
  },
  {
    id: "post-12",
    title: "Optimizing React Performance",
    summary: "Memoization, virtualization, and code-splitting.",
    description:
      "Keep React snappy using useMemo, useCallback, and lazy loading techniques.",
    image: "https://reactjs.org/logo-og.png",
    date: "2025-02-25",
    link: "https://react.dev/learn/optimizing-performance",
  },
  {
    id: "post-13",
    title: "Environment & Config with dotenv",
    summary: "Manage environment configs safely.",
    description:
      "Learn dotenv usage and 12-Factor principles for environment variables.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bgzq_CUXpNDn799K_aOP15UJxRGRUlzsqg&s",
    date: "2025-02-05",
    link: "https://www.npmjs.com/package/dotenv",
  },
  {
    id: "post-14",
    title: "Rate Limiting and Security for APIs",
    summary: "Protect endpoints from abuse and spam.",
    description:
      "Implement Helmet, CORS, rate-limit, and input sanitization to secure APIs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINi4ecOXzD6S3yqmHfkGxTNUHaok6rPh7_A&s",
    date: "2025-01-18",
    link: "https://expressjs.com/en/advanced/best-practice-security.html",
  },
  {
    id: "post-15",
    title: "Pagination Strategies for Large Datasets",
    summary: "Cursor-based vs offset-based pagination.",
    description:
      "Optimize APIs and UI performance using cursor pagination techniques.",
    image:
      "https://lh7-us.googleusercontent.com/bTUxaXjKrdYi5j-nGwvbzjHU-Kxaw2CCUQvlTsWuYY4p6hIRsazSyP6GMFHWcMrn_iIiCvB6289HslMV8ySXbXBTKPKMOYu24DBft8V58w5w4MkuPn1hOKWumJsu78GR3NWmbHWXX7pVFIyk_tG2DY8",
    date: "2024-12-30",
    link: "https://www.mongodb.com/docs/manual/reference/method/cursor.skip/",
  },
  {
    id: "post-16",
    title: "Role-Based Access Control (RBAC) in MERN",
    summary: "Manage roles and permissions efficiently.",
    description:
      "Secure routes and UI elements by role using Express middleware.",
    image:
      "https://www.collidu.com/media/catalog/product/img/2/b/2b3ee4d8953f760b5788a10380eaddc711bc331782a467ab1269144a500d3311/role-based-access-control-slide3.png",
    date: "2024-12-05",
    link: "https://www.okta.com/identity-101/what-is-role-based-access-control-rbac/",
  },
  {
    id: "post-17",
    title: "Integrating Payments with Stripe",
    summary: "Accept online payments securely.",
    description:
      "Integrate Stripe for one-time payments, webhooks, and client-side validation.",
    image:
      "https://rates.fm/static/content/thumbs/810x/3/d4/2ohiek-42dfc39e6156bfcb6bcbbd1d05a58d43.jpg",
    date: "2024-11-10",
    link: "https://stripe.com/docs",
  },
  {
    id: "post-18",
    title: "Logging & Monitoring for Node Apps",
    summary: "Monitor apps with Winston, Morgan, and alerts.",
    description:
      "Track logs, monitor uptime, and detect production issues early.",
    image:
      "https://middleware.io/backend/wp-content/uploads/2022/08/Cloud-Log-Monitoring.png",
    date: "2024-10-01",
    link: "https://www.npmjs.com/package/winston",
  },
  {
    id: "post-19",
    title: "CI/CD for MERN Projects",
    summary: "Automate testing, builds, and deployments.",
    description:
      "Learn GitHub Actions workflow setup for automatic deployment pipelines.",
    image: "https://i.imgur.com/uMFtPwJ.png",
    date: "2024-08-20",
    link: "https://docs.github.com/en/actions",
  },
  {
    id: "post-20",
    title: "Scaling Node.js: Clustering & Workers",
    summary: "Handle CPU-bound processes efficiently.",
    description:
      "Use clustering and worker threads for parallel execution and performance boost.",
    image: "https://nodejs.org/static/images/logo.svg",
    date: "2024-07-05",
    link: "https://nodejs.org/en/docs/guides/getting-started-guide",
  },
];

const BlogPage: FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const showMore = () => setVisibleCount((v) => Math.min(v + 6, initialBlogs.length));

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

      {/* Featured Section */}
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
                <div className="text-gray-500 text-sm mt-auto">{post.date}</div>
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

        {/* More Button */}
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
