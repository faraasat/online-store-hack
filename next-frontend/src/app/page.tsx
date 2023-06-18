import { HeroSection, PromotionSection } from "./section";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <HeroSection />
      <PromotionSection />
    </div>
  );
};

export default HomePage;
