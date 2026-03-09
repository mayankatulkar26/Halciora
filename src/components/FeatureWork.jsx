import { Link } from "react-router-dom";

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Work
            </h2>
            <p className="mt-4 text-gray-400">
              A glimpse into some of the projects we’ve crafted for creators
              and brands.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="text-blue-500 hover:text-blue-400 font-medium"
          >
            View Full Portfolio →
          </Link>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

  <FeaturedCard
    video="/portfolio/youtube-1.mp4"
    title="YouTube Content for Creators"
    category="Long-form Editing"
  />

  <FeaturedCard
    video="/portfolio/reel-3.mp4"
    title="Short-Form Social Media Edit"
    category="Reels / Shorts"
  />

</div>
      </div>
    </section>
  );
}

function FeaturedCard({ video, title, category }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden bg-black h-[260px]">

        {/* Video */}
        <video
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover group-hover:opacity-100"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />

      </div>

      {/* Text */}
      <div className="mt-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{category}</p>
      </div>
    </div>
  );
}