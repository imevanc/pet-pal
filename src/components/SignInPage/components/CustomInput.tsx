import { CustomInputIF } from "../../../interfaces/CustomInputIF";

const CustomInput: React.FC<CustomInputIF> = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={name}
          autoComplete={name}
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default CustomInput;
