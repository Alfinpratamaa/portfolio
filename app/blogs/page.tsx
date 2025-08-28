// app/blogs/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/libs/sanity.client'; 
import imageUrlBuilder from '@sanity/image-url';
import { groq } from 'next-sanity';

// Helper untuk membangun URL gambar dari Sanity
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// Tipe data untuk post kita (opsional tapi sangat direkomendasikan)
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  authorName: string;
  authorImage: any;
}

// Query GROQ untuk mengambil data yang kita butuhkan
const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "authorName": author->name, 
  "authorImage": author->image 
}`;

export const revalidate = 3600;

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <div className="min-h-screen py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Blog Saya</h1>
          <p className="mt-4 text-lg text-gray-400">
            Wawasan terbaru seputar teknologi dan pengembangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blogs/${post.slug.current}`} legacyBehavior>
              <a className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(post.mainImage).width(500).height(300).url()}
                    alt={`Gambar untuk ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-400 mt-4">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                       {post.authorImage && (
                          <Image
  src={
    post.authorImage?.asset
      ? urlFor(post.authorImage).width(40).height(40).url()
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
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}