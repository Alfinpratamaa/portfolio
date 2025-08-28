import { client } from "@/libs/sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

export const runtime = "edge";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  ...,
  author-> { 
    name,
    image,
    bio
  },
  "categories": categories[]->title 
}`;

const ptComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Gambar dari artikel"}
            fill
            priority
            className="object-contain"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-white my-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold text-white my-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-white my-3">{children}</h3>
    ),
    normal: ({ children }: any) => <p className="leading-7 my-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-400 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-white">{children}</em>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-purple-400 hover:text-purple-300 underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 space-y-2">{children}</ol>
    ),
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const getPlainTextFromBody = (body: any[]): string => {
    if (!body || !Array.isArray(body)) return "";

    return body
      .filter((block) => block._type === "block" && block.style === "normal")
      .map((block) => block.children?.map((child: any) => child.text).join(""))
      .join(" ")
      .slice(0, 160);
  };

  const description =
    post.excerpt || getPlainTextFromBody(post.body) || "Read this blog post";
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : null;

  return {
    title: `${post.title} - Blog Alfin Pratama`,
    description,
    keywords: post.categories?.join(", "),
    authors: [{ name: post.author?.name || "Anonymous" }],
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Anonymous"],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `/blogs/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-28  text-white">
      <div className="max-w-5xl rounded-xl mx-auto bg-neutral-900/50 border border-neutral-700 p-10">
        {/* Header Artikel */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              {post.author?.image && (
                <Image
                  src={
                    post.authorImage?.asset
                      ? urlFor(post.authorImage).width(40).height(40).url()
                      : "/default-avatar.jpg"
                  }
                  alt={`Foto ${post.authorName}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span>{post.author?.name || "Anonim"}</span>
            </div>
            <span>&bull;</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={`Gambar utama untuk ${post.title}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-h1:text-purple-400 prose-a:text-purple-400 hover:prose-a:text-purple-300">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
}
