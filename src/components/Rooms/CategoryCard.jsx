import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryCard = ({ label, icon: Icon }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const isActive = params.get("category") === label.toLowerCase();

  const handleCategoryClick = () => {
    let currentQuery = {};

    if (params.size > 0) currentQuery = qs.parse(params.toString());

    const updatedQuery = {
      ...currentQuery,
      category: label.toLowerCase(),
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipEmptyString: true, skipNull: true }
    );

    navigate(url);
  };

  return (
    <div
      onClick={handleCategoryClick}
      className={`flex flex-col space-y-1 items-center justify-center text-neutral-500  cursor-pointer border-b-4 pb-1 hover:text-neutral-700 hover:border-neutral-700 transition ${
        isActive && "text-neutral-900 border-neutral-900"
      }}`}
    >
      <Icon size={24} />
      <span className="font-medium ">{label}</span>
    </div>
  );
};

export default CategoryCard;
