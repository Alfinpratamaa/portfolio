// app/sitemap.ts

import { MetadataRoute } from "next";
import { client } from "@/libs/sanity.client";
import { groq } from "next-sanity";

// Definisikan tipe untuk data post yang diambil
interface Post {
  slug: {
    current: string;
  };
  _updatedAt: string; // Gunakan _updatedAt untuk lastModified
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://evrea.tech";

  // 1. Ambil semua slug post dari Sanity
  const query = groq`*[_type == "post"]{ "slug": slug.current, _updatedAt }`;
  const posts: Post[] = await client.fetch(query);

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "daily" as "daily",
    priority: 0.8,
  }));

  // 2. Gabungkan dengan URL statis Anda
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...postUrls,
  ];
}
