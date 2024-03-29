import { CustomFormButtonIF } from "../../../interfaces/CustomFormButtonIF";

const CustomFormButton: React.FC<CustomFormButtonIF> = ({
  buttonLabel,
  buttonClassName,
}) => {
  return (
    <button
      type="submit"
      className={
        buttonClassName ||
        "flex w-full justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-lg font-bold text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
      }
    >
      {buttonLabel}
    </button>
  );
};

export default CustomFormButton;
