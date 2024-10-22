import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import Category from "../category/Category.component";

const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  return (
    // <div className="max-w-screen-xl m-auto mt-28 animate__animated animate__fadeInUp">

    // </div>
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
