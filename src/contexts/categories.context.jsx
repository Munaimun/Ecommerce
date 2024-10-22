/* eslint-disable react/prop-types */
// Disables the ESLint rule that checks for PropTypes validation. This is useful if PropTypes are not being used in the project.

import { createContext, useEffect, useState } from "react";

// Importing the Firebase utility function that fetches categories and documents from the database.
import { getCategoriesAndDocuments } from "../utils/firebase/Firebase.utils.js";

// Creating a context with an initial value of an empty object for categoriesMap.
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Fetching the products
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      // Sets the fetched categoryMap into the state variable.
      setCategoriesMap(categoryMap);
    };
    // Calls the function to fetch categories when the component mounts.
    getCategoriesMap();
  }, []);

  // Prepares the value object to be passed into the context, which holds the current categoriesMap state.
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
