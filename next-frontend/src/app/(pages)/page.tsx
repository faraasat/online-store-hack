import {
  AestheticSection,
  HeroSection,
  NewsletterSection,
  ProductsSection,
  PromotionSection,
} from "../section";
import { ScrollToTop } from "../utils";

const HomePage = async () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col items-center justify-center gap-4">
        <HeroSection />
        <PromotionSection />
        <ProductsSection />
        <AestheticSection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default HomePage;
