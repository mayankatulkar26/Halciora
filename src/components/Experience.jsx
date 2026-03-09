const editingTools = [
  { name: "Adobe Premiere Pro", icon: "/assets/pr.svg" },
  { name: "Adobe After Effects", icon: "/assets/ae.svg" },
  { name: "Final Cut Pro", icon: "/assets/finalcut.png" },
  { name: "Alight Motion", icon: "/assets/alight.png" },
  { name: "DaVinci Resolve", icon: "/assets/dr.jpg" },
  { name: "Blender", icon: "/assets/blender.jpg" },
  { name: "CapCut", icon: "/assets/capcut.jpg" },
];

const designingTools = [
  { name: "Adobe Illustrator", icon: "/assets/illustrator.svg" },
  { name: "Photoshop", icon: "/assets/photoshop.svg" },
  { name: "Figma", icon: "/assets/figma.png" },
  { name: "Canva", icon: "/assets/canva.png" },
];

export default function Experience() {
  return (
    <section className="relative w-full min-h-screen  flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl px-6 py-20">
        {/* Title */}
        <h2 className="text-center text-5xl md:text-6xl font-semibold tracking-widest text-white mb-20">
          EXPERIENCE
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Editing Panel */}
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h3 className="text-indigo-400 font-semibold tracking-wider mb-10">
              EDITING TOOLS
            </h3>

            <div className="flex flex-wrap gap-8">
              {editingTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-[#111] 
  transition-all duration-300 hover:-translate-y-3 hover:scale-110 
  hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
  ${index % 2 === 0 ? "mt-6" : ""}`}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                  />

                  {/* Tooltip */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 
                  px-3 py-1 rounded-md 
                  bg-white/10 backdrop-blur-md 
                  text-xs text-white whitespace-nowrap
                  opacity-0 translate-y-2
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300"
                  >
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Designing Panel */}
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h3 className="text-purple-400 font-semibold tracking-wider mb-10">
              DESIGNING TOOLS
            </h3>

            <div className="flex flex-wrap gap-8">
              {designingTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-[#111] 
  transition-all duration-300 hover:-translate-y-3 hover:scale-110 
  hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
  ${index % 2 === 0 ? "mt-6" : ""}`}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                  />

                  {/* Tooltip */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 
                  px-3 py-1 rounded-md 
                  bg-white/10 backdrop-blur-md 
                  text-xs text-white whitespace-nowrap
                  opacity-0 translate-y-2
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300"
                  >
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
