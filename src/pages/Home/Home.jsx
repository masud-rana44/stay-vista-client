import Categories from "../../components/Rooms/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      {/* Categories */}
      <Categories />

      {/* Render the rooms */}
      <Rooms />
    </div>
  );
};

export default Home;
