import { useRef } from "react";

export default function ProjectCard({ video, title, platform, onClick }) {
  const videoRef = useRef(null);

  // Detect touch devices (mobile / tablet)
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const handleMouseEnter = () => {
    if (!isTouchDevice && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(video);
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-xl overflow-hidden bg-black cursor-pointer h-[380px]"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/0 md:group-hover:bg-black/40 transition"></div>

      {/* Text overlay */}
      <div className="absolute bottom-0 w-full p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-300">{platform}</p>
      </div>

      {/* Mobile Play Indicator */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden">
        <div className="bg-black/50 rounded-full p-4">
          ▶
        </div>
      </div>
    </div>
  );
}