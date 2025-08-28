"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { client } from "@/libs/sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { Post, Category } from "@/app/blogs/page";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface BlogClientPageProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogClientPage({
  posts,
  categories,
}: BlogClientPageProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filterPosts = (categoryId: string) => {
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.categories?.some((cat) => cat._id === categoryId)
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="min-h-screen py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 bg-neutral-900/50 p-6 border border-neutral-700 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            My Blog
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Sharing my thoughts, experiences, and insights on web development,
            programming, and technology.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Filter by category :
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* Tab Semua */}
              <button
                onClick={() => filterPosts("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                All Topics ({posts.length})
              </button>

              {/* Tab Categories */}
              {categories.map((category) => {
                const categoryPostCount = posts.filter((post) =>
                  post.categories?.some((cat) => cat._id === category._id)
                ).length;

                return (
                  <button
                    key={category._id}
                    onClick={() => filterPosts(category._id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category._id
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                        : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                    }`}
                  >
                    {category.title} ({categoryPostCount})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
              <p className="text-gray-400 text-lg">
                Tidak ada artikel untuk kategori ini.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post._id} href={`/blogs/${post.slug.current}`}>
                <div className="group block p-3 bg-neutral-900/50 border border-neutral-700 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(500).height(300).url()}
                      alt={`Gambar untuk ${post.title}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    {/* Categories Badge */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category) => (
                          <span
                            key={category._id}
                            className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {category.title}
                          </span>
                        ))}
                        {post.categories.length > 2 && (
                          <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                            +{post.categories.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>

                    <div className="flex items-center text-sm text-gray-400 mt-4">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                        {post.authorImage && (
                          <Image
                            src={
                              post.authorImage?.asset
                                ? urlFor(post.authorImage)
                                    .width(40)
                                    .height(40)
                                    .url()
                                : "/default-avatar.jpg"
                            }
                            alt={`Foto ${post.authorName}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <span>{post.authorName}</span>
                      <span className="mx-2">&bull;</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("id-ID")}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
