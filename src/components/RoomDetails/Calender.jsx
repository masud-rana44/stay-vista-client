import { DateRange } from "react-date-range";

const Calender = ({ value, handleSelect }) => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      direction="vertical"
      ranges={[value]}
      date={value.startDate}
      showDateDisplay={false}
      onChange={handleSelect}
      minDate={new Date()}
      // maxDate={value.endDate}
    />
  );
};

export default Calender;
