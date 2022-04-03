import Marquee from "react-fast-marquee";
import Review from "./review";
export default function Verticlemarquee() {
  return (
    <>
      <Marquee gradientColor={[0, 0, 0]}>
        <Review />
      </Marquee>
    </>
  );
}
