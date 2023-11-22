import { Helmet } from "react-helmet";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";

const AddRoom = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const to = dates.endDate.toISOString().slice(0, 10);
    const from = dates.startDate.toISOString().slice(0, 10);
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;

    const roomData = {
      location,
      category,
      to,
      from,
      title,
      description,
      price,
      guests,
      bedrooms,
      bathrooms,
    };

    console.log(roomData);
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

  return (
    <div>
      <Helmet>
        <title>Host | Add Room</title>
      </Helmet>

      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        uploadButtonText="Upload Image"
      />
    </div>
  );
};

export default AddRoom;
