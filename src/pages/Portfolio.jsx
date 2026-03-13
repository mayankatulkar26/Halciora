import { useState , useEffect } from "react";


import ProjectCard from "../components/ProjectCard";
import VideoModal from "../components/VideoModal";




/* DATA */
const motionVideos = [
  {
    video: "/portfolio/motion-1.mp4",
    title: "Motion Graphics Edit",
    platform: "Motion",
  },
  {
    video: "/portfolio/motion-2.mp4",
    title: "Motion Design",
    platform: "Motion",
  },
  {
    video: "/portfolio/motion-3.mp4",
    title: "Brand Motion Design",
    platform: "Motion",
  },
  {
    video: "/portfolio/motion-4.mp4",
    title: "Animated Promo",
    platform: "Motion",
  },
];

const reelVideos = [
  {
    video: "/portfolio/reel-1.mp4",
    title: "Instagram Reel for Creator",
    platform: "Reels",
  },
  {
    video: "/portfolio/reel-2.mp4",
    title: "Short-form Brand Edit",
    platform: "Reels",
  },
  {
    video: "/portfolio/reel-3.mp4",
    title: "Viral Reel Cut",
    platform: "Reels",
  },
];

const youtubeVideos = [
  {
    video: "/portfolio/youtube-1.mp4",
    title: "YouTube Video Edit",
    platform: "YouTube",
  },
  {video: "/portfolio/youtube-2.mp4",
    title: "YouTube Video Edit",
    platform: "YouTube",
  }
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null); // ✅ INSIDE component
  
  useEffect(() => {
  const elements = document.querySelectorAll(".scroll-reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
      
      <section className="bg-dark text-white min-h-screen pt-24 pb-16 md:py-28">

        <div className="max-w-7xl mx-auto px-6 ">
{/* INTRO SECTION */}
<div className="text-center mb-32 scroll-reveal">
  <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
    Video Editing Portfolio
  </p>

  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
    Crafting Engaging <span className="text-primary">Visual Stories</span>
  </h1>

  <p className="max-w-2xl mx-auto text-gray-400 text-lg">
    Motion graphics, short-form reels, and long-form YouTube edits designed to
    capture attention and drive engagement.
  </p>
</div>
          <CategorySection
            title="Motion Graphics"
            items={motionVideos}
            onVideoClick={setActiveVideo}
          />

          <CategorySection
            title="Reels"
            items={reelVideos}
            onVideoClick={setActiveVideo}
          />

          <CategorySection
            title="YouTube Videos"
            items={youtubeVideos}
            onVideoClick={setActiveVideo}
          />

        </div>
      </section>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}

/* CATEGORY SECTION */
function CategorySection({ title, items, onVideoClick }) {
  return (
    <div className="mb-28 scroll-reveal">

<div className="text-center mb-12">
  <h2 className="text-2xl md:text-3xl font-semibold mb-3">
    {title}
  </h2>
  <div className="w-16 h-[2px] bg-primary mx-auto opacity-60" />
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 align-centre ">
        {items.map((item, index) => (
          <ProjectCard
            key={index}
            video={item.video}
            title={item.title}
            platform={item.platform}
            onClick={onVideoClick}   
            />
        ))}
      </div>

    </div>
  );
}