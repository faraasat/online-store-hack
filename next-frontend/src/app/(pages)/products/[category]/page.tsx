export async function generateStaticParams() {
  return [{ category: "men" }, { category: "women" }, { category: "kids" }];
}

export const dynamicParams = false;

const ProductByCategoryPage = ({
  params: category,
}: {
  params: { category: "men" | "women" | "kids" };
}) => {
  console.log(category);

  return <section>Hello</section>;
};

export default ProductByCategoryPage;
