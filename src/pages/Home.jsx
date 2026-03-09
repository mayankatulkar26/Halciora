import Front from "../components/Front";
import Services from "../components/Services";
import FeaturedWork from "../components/FeatureWork";
import CTA from "../components/CTA";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <Front />
      <Services />
      <Experience />
      <FeaturedWork/>
      <CTA/>
    </>
  );
}