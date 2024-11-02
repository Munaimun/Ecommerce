import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import Category from "../category/Category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase.utils";
import { setCategories } from "../../store/categories/categoryAction";

import ScrollToTop from "../../components/Show-From-Top/ScrollToTop";

const Shop = () => {
  const dispatch = useDispatch();

  // Fetching the products
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray);

      // Sets the fetched categoryMap into the state variable.
      dispatch(setCategories(categoriesArray));
    };
    // Calls the function to fetch categories when the component mounts.
    getCategoriesMap();
  }, [dispatch]);

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
