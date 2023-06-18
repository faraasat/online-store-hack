import { TopHeaderComponent } from "../components";

const PromotionSection = () => {
  return (
    <section className="flex items-center justify-between gap-[20px] w-[90%] h-auto py-[50px] 2xl:max-w-[1400px]">
      <TopHeaderComponent title="Promotion" desc="Our Promotions Events" />
      <div className="flex items-center justify-center mt-[30px]"></div>
    </section>
  );
};

export default PromotionSection;
