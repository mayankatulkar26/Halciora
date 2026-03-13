import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-28 bg-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Elevate Your Content?
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Let Halcioara handle the editing while you focus on creating.
          Get started with a free sample edit today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium">
  Contact us 
</Link>

          <Link
            to="/portfolio"
            className="border border-white/20 hover:border-white/40 transition px-8 py-3 rounded-md text-white"
          >
            View Our Work
          </Link>
        </div>

      </div>
    </section>
  );
}