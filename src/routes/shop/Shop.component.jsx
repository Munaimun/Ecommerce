import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/ProductCard.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="mt-20 max-w-screen-xl m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center animate__animated animate__flipInX">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
