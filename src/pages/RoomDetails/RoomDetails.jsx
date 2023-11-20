import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import RoomHeader from "../../components/RoomDetails/RoomHeader";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservations";

const RoomDetails = () => {
  const { id } = useParams();

  const room = {
    _id: "654f6d935abba09d18da69cb",
    location: "Canterbury, United Kingdom",
    title: "Bumble Barn at Great Field Farm",
    from: "2023-11-27T18:00:00.000Z",
    to: "2023-11-29T18:00:00.000Z",
    price: 305,
    guests: "6",
    bedrooms: "3",
    bathrooms: "2",
    description:
      "Great Field Farm is set in 45 acres, including gardens, paddocks and the great field with different crops each year.\nBumble Barn is the newest addition to our eco-friendly  holiday lodges. Built to Passiv house standards with smart technology and a beautiful living sedum roof that bees love.\nThe views from the sitting room and patio over open fields and sky are stunning, with wildlife all around",
    image: "https://i.ibb.co/f1494DN/london.webp",
    host: {
      name: "Shakil Ahmed Atik",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJpxSpFQvm4fucJxMSOYG07EY-4eEqymED0zn2w8hBgHw=s96-c",
      email: "shakilatik.ph@gmail.com",
    },
    category: "Modern",
  };

  return (
    <div>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 lg:px-0 ">
        {/* Room Header */}
        <RoomHeader roomData={room} />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-10">
          {/* Room Info */}
          <RoomInfo roomData={room} />

          {/* Room Reservation */}

          <RoomReservation roomData={room} />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
