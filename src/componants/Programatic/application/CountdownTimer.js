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
    <div className="show-counter ">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link flex text-white"
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />

        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />

        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />

        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
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
