import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("/rooms.json");
      const data = await res.json();
      setRooms(data);
    };

    getRooms();
  }, []);

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
