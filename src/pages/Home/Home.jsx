import { useEffect, useState } from "react";

const Home = () => {
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
    <div>
      <h1>Welcome to StayVista</h1>
      <div>
        {rooms.map((room) => (
          <div key={room._id}>{room.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
