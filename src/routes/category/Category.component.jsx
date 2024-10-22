import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard.component";

const Category = () => {
  const { category } = useParams(); // Get the category from URL params
  const { categoriesMap } = useContext(CategoriesContext);

  // Initialize products with an empty array to avoid issues
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ensure categoriesMap and category are defined
    if (categoriesMap && category) {
      setProducts(categoriesMap[category] || []); // Fallback to an empty array if category is not found
    }
  }, [category, categoriesMap]);

  return (
    <div className="max-w-screen-xl m-auto text-center mt-28 ">
      {/* Render category name as a title */}
      <h1 className="text-sky-950 text-2xl font-bold pb-6">
        {category ? category.toUpperCase() : "Category Not Found"}
      </h1>
      <div className=" m-auto flex flex-wrap animate__animated animate__fadeInDown">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <span>No products found for this category.</span>
        )}
      </div>
    </div>
  );
};

export default Category;
