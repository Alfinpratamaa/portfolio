"use client";
import Link from "next/link";
import { useState } from "react";

// Dummy data
const categories = [
  { id: "all", name: "All Posts", count: 12 },
  { id: "technology", name: "Technology", count: 5 },
  { id: "design", name: "Design", count: 3 },
  { id: "development", name: "Development", count: 4 },
];

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React 18",
    excerpt:
      "Learn about the new features and improvements in React 18 including concurrent rendering and automatic batching.",
    category: "technology",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/blog/react-18.jpg",
    slug: "getting-started-react-18",
  },
  {
    id: 2,
    title: "Modern CSS Grid Layouts",
    excerpt:
      "Master CSS Grid to create responsive and flexible layouts for modern web applications.",
    category: "design",
    date: "2024-01-12",
    readTime: "7 min read",
    image: "/blog/css-grid.jpg",
    slug: "modern-css-grid-layouts",
  },
  {
    id: 3,
    title: "Building APIs with Next.js",
    excerpt:
      "Complete guide to creating robust APIs using Next.js API routes and middleware.",
    category: "development",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/blog/nextjs-api.jpg",
    slug: "building-apis-nextjs",
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    excerpt:
      "Essential TypeScript patterns and practices for building maintainable applications.",
    category: "development",
    date: "2024-01-08",
    readTime: "8 min read",
    image: "/blog/typescript.jpg",
    slug: "typescript-best-practices",
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    excerpt:
      "Fundamental design principles every developer should know to create better user experiences.",
    category: "design",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/blog/ui-ux.jpg",
    slug: "ui-ux-design-principles",
  },
  {
    id: 6,
    title: "Machine Learning with JavaScript",
    excerpt:
      "Exploring machine learning possibilities in the browser using TensorFlow.js.",
    category: "technology",
    date: "2024-01-03",
    readTime: "12 min read",
    image: "/blog/ml-js.jpg",
    slug: "machine-learning-javascript",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover insights, tutorials, and thoughts on technology, design,
            and development
          </p>
        </div>

        {/* Bento Style Categories */}
        <div className="mb-12">
          <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-orange-400 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-300 hover:text-white hover:bg-neutral-800/50"
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span className="font-semibold">{category.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === category.id
                          ? "bg-white/20"
                          : "bg-neutral-700/50 group-hover:bg-neutral-600/50"
                      }`}
                    >
                      {category.count} posts
                    </span>
                  </div>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-orange-400/20 blur-xl -z-10"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image placeholder with gradient */}
              <div
                className={`relative ${
                  index === 0 ? "h-64 md:h-80" : "h-48"
                } bg-gradient-to-br from-purple-600 via-purple-700 to-orange-500 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
                    {categories.find((cat) => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>

              <div className={`relative p-6 ${index === 0 ? "md:p-8" : ""}`}>
                {/* Title */}
                <h2
                  className={`font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`text-gray-400 mb-6 leading-relaxed ${
                    index === 0
                      ? "line-clamp-4 text-base"
                      : "line-clamp-3 text-sm"
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Read more button */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group/btn relative w-full bg-gradient-to-r from-purple-600 to-orange-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10">Read More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/30 rounded-2xl p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No posts found
              </h3>
              <p className="text-gray-400">
                No posts found in this category. Try selecting a different
                category.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
