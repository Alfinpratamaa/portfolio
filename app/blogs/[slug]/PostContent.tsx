import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function PostContent({ post, ptComponents, urlFor }: any) {
  return (
    <section className="min-h-screen py-24 px-4 text-white">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        <div className="col-span-full bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {post.title}
          </h1>
          {post.mainImage && (
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-neutral-700">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        <div className="col-span-full md:col-span-2 bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 prose prose-invert max-w-none">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </div>
    </section>
  );
}
