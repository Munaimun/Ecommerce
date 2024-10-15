/* eslint-disable react/prop-types */
import CategoryItem from "../category.item";

const Directory = ({ categories }) => {
  return (
    <div className="max-w-screen-xl flex m-auto flex-wrap text-center justify-center">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
