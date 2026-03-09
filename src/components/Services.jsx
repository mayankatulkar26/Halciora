export default function Services() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We help creators and brands produce professional, high-quality
            videos that capture attention and drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service Card */}
          <div className="p-8 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold mb-3">
              YouTube Video Editing
            </h3>
            <p className="text-gray-400">
              High-quality long-form edits with smooth cuts, motion graphics,
              and engaging storytelling.
            </p>
          </div>

          {/* Service Card */}
          <div className="p-8 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold mb-3">
              Short-Form Content
            </h3>
            <p className="text-gray-400">
              Scroll-stopping Reels, Shorts, and TikToks designed to maximize
              reach and engagement.
            </p>
          </div>

          {/* Service Card */}
          <div className="p-8 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold mb-3">
              Ads & Brand Videos
            </h3>
            <p className="text-gray-400">
              Clean, high-conversion videos for ads, landing pages, and
              brand promotions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}