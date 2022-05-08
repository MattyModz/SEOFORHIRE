import Marquee from "react-fast-marquee";
import Review from "./review";
import ReviewCharlie from "./Charlie";
import ReviewGary from "./Gary";
export default function Verticlemarquee3() {
  return (
    <>
      <Marquee className="" gradientColor={[0, 0, 0]} delay={3} speed={44}>
        <Review />
        <ReviewGary />
        <ReviewCharlie />
      </Marquee>
    </>
  );
}
