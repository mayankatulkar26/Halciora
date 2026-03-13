import { Link } from "react-router-dom";


export default function Front() {
  return (
    <section className=" min-h-[90vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge (subtle credibility) */}
        <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-white/5 text-gray-300">
          Video Editing Studio
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We Craft
          <span className="text-blue-500"> High-Impact </span>
          Videos That Grow Brands
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Halcioara is a creative video editing studio helping creators and
          brands turn raw footage into cinematic, conversion-focused content.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-500 transition text-white px-8 py-3 rounded-md font-medium"
          >
            Get in Touch!
          </Link>

          <Link
            to="/portfolio"
            className="border border-white/15 hover:border-white/30 transition px-8 py-3 rounded-md text-white"
          >
            View Our Work
          </Link>
        </div>

      </div>
    </section>
  );
}