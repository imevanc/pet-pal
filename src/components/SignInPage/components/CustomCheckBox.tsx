interface CustomCheckBoxPropsIF {
  checkBoxLabel: string | React.ReactElement;
  id: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxPropsIF> = ({
  checkBoxLabel,
  id,
}) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
        {checkBoxLabel}
      </label>
    </div>
  );
};

export default CustomCheckBox;
