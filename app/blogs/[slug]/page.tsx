export default function ReadBlogPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-200 mb-2">
            Blog Coming Soon
          </h1>
          <p className="text-white mb-4">
            We're currently working on the blog feature for "{params.slug}".
            This section is under development and will be available soon.
          </p>
          <div className="bg-neutral-700 border border-neutral-900 placeholder-opacity-70 rounded-lg p-4">
            <p className="text-sm text-orange-400">
              🚧 <strong>Under Construction</strong> - Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
