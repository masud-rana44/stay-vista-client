import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import RoomHeader from "../../components/Rooms/RoomHeader";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservations";
import { Helmet } from "react-helmet";

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
      <Container>
        {/* Room Header */}
        <RoomHeader roomData={room} />

        <div className="flex gap-x-16 mt-10">
          {/* Room Info */}
          <div className="flex-1">
            <RoomInfo roomData={room} />
          </div>

          {/* Room Reservation */}
          <div className="flex-1">
            <RoomReservation roomData={room} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomDetails;
