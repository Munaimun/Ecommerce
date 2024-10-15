/* eslint-disable react/prop-types */
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col sm:mt-6">
      <label className="mb-1 sm:text-2xl text-gray-600">{label}</label>
      <input
        className="border-b border-gray-600 w-full sm:text-xl focus:border-blue-900 focus:outline-none"
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
