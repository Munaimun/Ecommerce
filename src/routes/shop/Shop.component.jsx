import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import Category from "../category/Category.component";
import ScrollToTop from "../../components/Show-From-Top/ScrollToTop";

const Shop = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
