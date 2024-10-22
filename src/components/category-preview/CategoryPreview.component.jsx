/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="">
      <p className="ml-4 mb-4">
        <Link to={title} className="text-xl text-sky-950 font-semibold">
          {title.toUpperCase()}
        </Link>
      </p>

      <div className="flex flex-wrap">
        {products
          .filter((_, idx) => idx < 4) //show 4 products
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
