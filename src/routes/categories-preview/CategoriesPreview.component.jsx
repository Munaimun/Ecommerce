import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categorySelector";

import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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

export default CategoriesPreview;
