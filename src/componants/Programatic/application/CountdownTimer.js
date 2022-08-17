import React from "react";
import useCountdown from "../../../hooks/UseCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
const ExpiredNotice = () => {
  return (
    <div className="expired-notice text-white">
      <span>Job Application Deadline has been reached</span>
      <p>View other jobs in Manchester</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex text-white">
      <DateTimeDisplay
        className=" p-1 "
        value={days}
        type={"Days"}
        isDanger={days <= 3}
      />

      <DateTimeDisplay
        value={hours}
        type={"Hours"}
        isDanger={false}
        className="  "
      />

      <DateTimeDisplay
        value={minutes}
        type={"Mins"}
        isDanger={false}
        className=" "
      />

      <DateTimeDisplay
        value={seconds}
        type={"Seconds"}
        isDanger={false}
        className=" "
      />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
