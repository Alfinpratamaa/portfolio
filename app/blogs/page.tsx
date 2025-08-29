import { client } from "@/libs/sanity.client";
import { groq } from "next-sanity";
import BlogClientPage from "@/components/BlogClientPage"; // Kita akan buat komponen ini
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Alfin Pratama",
  description:
    "Sharing my thoughts, experiences, and insights on web development, programming, and technology.",
  openGraph: {
    title: "Blog - Alfin Pratama",
    description:
      "Sharing my thoughts, experiences, and insights on web development, programming, and technology.",
    url: "https://evrea.tech/blogs",
    siteName: "Alfin Pratama",
    images: [
      {
        url: "https://evrea.tech/avatar2_webp",
        width: 1200,
        height: 630,
        alt: "Blog - Alfin Pratama",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  keywords: [
    "blog",
    "web development",
    "programming",
    "technology",
    "javascript",
    "react",
    "next.js",
    "sanity.io",
    "tailwindcss",
    "personal blog",
    "blog alfin",
    "coding",
    "software development",
    "frontend",
    "backend",
    "fullstack",
    "tutorials",
    "tips and tricks",
    "web design",
    "developer insights",
    "blog evrea",
  ],
};

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  authorName: string;
  authorImage: any;
  categories: Category[];
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

// Query GROQ untuk mengambil posts dengan categories
const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "authorName": author->name, 
  "authorImage": author->image,
  "categories": categories[]->{ _id, title, slug }
}`;

// Query untuk mengambil semua categories
const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}`;

// Jadikan halaman ini Server Component dengan fungsi async
export default async function BlogPage() {
  // Ambil data di server
  const posts: Post[] = await client.fetch(
    postsQuery,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const categories: Category[] = await client.fetch(
    categoriesQuery,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );

  // Kirim data sebagai props ke Client Component
  return <BlogClientPage posts={posts} categories={categories} />;
}
