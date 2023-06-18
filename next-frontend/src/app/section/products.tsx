import { TopHeaderComponent } from "../components";

const ProductsSection = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[10px] 2xl:max-w-[1400px]">
      <TopHeaderComponent title="Products" desc="Check What We Have" />
      <div className="flex items-center justify-center w-full mt-[30px]"></div>
    </section>
  );
};

export default ProductsSection;
