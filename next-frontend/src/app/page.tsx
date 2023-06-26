import {
  AestheticSection,
  HeroSection,
  NewsletterSection,
  ProductsSection,
  PromotionSection,
} from "./section";

const HomePage = async () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <HeroSection />
      <PromotionSection />
      <ProductsSection />
      <AestheticSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
