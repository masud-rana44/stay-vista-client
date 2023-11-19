import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import Heading from "../Shared/Heading/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParas] = useSearchParams();

  const category = searchParas.get("category");

  useEffect(() => {
    const getRooms = async () => {
      setIsLoading(true);
      const res = await fetch("/rooms.json");
      const data = await res.json();

      // Filter the rooms based on the category
      if (category) {
        const filteredRooms = data.filter(
          (room) => room.category.toLowerCase() === category
        );
        setRooms(filteredRooms);
      } else {
        setRooms(data);
      }
      setIsLoading(false);
    };

    getRooms();
  }, [category]);

  if (isLoading) return <Loader />;

  if (rooms.length === 0)
    return (
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
        <Heading
          center
          title="No Rooms Available In This Category!"
          subtitle="Please Select Other Categories."
        />
      </div>
    );

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
