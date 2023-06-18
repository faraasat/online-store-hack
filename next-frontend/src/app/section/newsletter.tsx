import { NewsletterContact } from "./section-chunks-client";

const NewsletterSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-[90%] gap-[15px] h-auto pt-[230px] pb-[150px] 2xl:max-w-[1400px]">
      <div className="absolute text-[9vw] font-mochiy text-[color:rgba(var(--primary-1-color),0.02)] select-none z-[100]">
        Newsletter
      </div>
      <h1 className="font-mochiy text-[25px] z-[400]">
        Subscribe Our Newsletter
      </h1>
      <p className="text-[18px] z-[400]">
        Get the latest information and promo offers directly
      </p>
      <NewsletterContact />
    </section>
  );
};

export default NewsletterSection;
