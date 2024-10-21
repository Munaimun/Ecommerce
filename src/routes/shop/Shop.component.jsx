import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="max-w-screen-xl m-auto mt-28 animate__animated animate__fadeInUp">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
