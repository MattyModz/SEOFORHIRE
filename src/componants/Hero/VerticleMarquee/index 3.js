import Marquee from "react-fast-marquee";
import Review from "./review";
export default function Verticlemarquee3() {
  return (
    <>
      <Marquee className="" gradientColor={[0, 0, 0]} delay={3} speed={44}>
        <Review />
      </Marquee>
    </>
  );
}
