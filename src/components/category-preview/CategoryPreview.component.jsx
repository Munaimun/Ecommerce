/* eslint-disable react/prop-types */
import ProductCard from "../product-card/ProductCard.component";
import "./CategoryPreview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="">
      <p>
        <span>{title.toUpperCase()}</span>
      </p>

      <div className="flex flex-wrap">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
