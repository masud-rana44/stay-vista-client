const CategoryCard = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col space-y-1 items-center justify-center text-neutral-500 cursor-pointer border-b-4 pb-1 hover:text-neutral-700 hover:border-neutral-700 transition">
      <Icon size={24} />
      <span className="font-medium ">{label}</span>
    </div>
  );
};

export default CategoryCard;
