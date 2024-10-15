/* eslint-disable react/prop-types */
const CategoryItem = ({ category }) => {
  //destructuring the data
  const { imageUrl, title } = category;

  return (
    <div className="w-80 m-4 border border-black bg-slate-200 rounded-md p-3 shadow-xl animate__animated animate__pulse flex flex-col justify-between">
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 animate__animated animate__zoomIn"
      />

      <div className="text-center">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
