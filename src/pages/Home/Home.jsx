import { Helmet } from "react-helmet-async";
import Categories from "../../components/Rooms/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Categories */}
      <Categories />

      {/* Render the rooms */}
      <Rooms />
    </div>
  );
};

export default Home;
