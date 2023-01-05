interface CustomCheckBoxPropsIF {
  checkBoxLabel: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxPropsIF> = ({ checkBoxLabel }) => {
  return (
    <div className="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        {checkBoxLabel}
      </label>
    </div>
  );
};

export default CustomCheckBox;
