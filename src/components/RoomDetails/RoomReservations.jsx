import { useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservations = ({ roomData }) => {
  const totalPrice = roomData?.price * 2;
  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    console.log(ranges.selection);
    setValue({ ...ranges.selection });
  };

  return (
    <div className="col-span-3 order-first lg:order-last bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <span className="text-2xl font-semibold">$ {roomData?.price}</span>
        <span className="font-light text-neutral-600">night</span>
      </div>
      <hr />

      {/* Calender */}
      <div className="flex justify-center">
        <Calender value={value} handleSelect={handleSelect} />
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <span>Total</span>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default RoomReservations;
