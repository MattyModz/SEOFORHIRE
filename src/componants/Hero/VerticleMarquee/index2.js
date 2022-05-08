import Marquee from "react-fast-marquee";
import Review from "./review";
import ReviewCharlie from "./Charlie";
import ReviewMark from "./Gary";
export default function Verticlemarquee2() {
  return (
    <>
      <Marquee
        className=""
        gradientColor={[0, 0, 0]}
        speed={35}
        direction={"right"}
        pauseOnHover={true}
      >
        <ReviewMark />
        <ReviewCharlie />
        <Review />
      </Marquee>
    </>
  );
}
