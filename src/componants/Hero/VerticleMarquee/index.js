import Marquee from "react-fast-marquee";
import Review from "./review";
import ReviewMark from "./Mark";
export default function Verticlemarquee() {
  return (
    <>
      <Marquee className="" gradientColor={[0, 0, 0]} pauseOnHover={true}>
        <Review />
        <ReviewMark />
      </Marquee>
    </>
  );
}
