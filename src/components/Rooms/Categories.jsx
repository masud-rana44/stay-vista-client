import Container from "../Shared/Container";
import CategoryCard from "./CategoryCard";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <Container>
      <div className="flex items-center gap-x-8 mt-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <CategoryCard
            key={category.label}
            label={category.label}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
