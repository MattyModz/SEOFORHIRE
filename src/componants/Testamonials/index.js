import Image from "next/image";
import Container from "../container";
export default function Testindex() {
  return (
    <Container>
      <div className=" w-full flex bg-royal  ">
        <div className=" border">
          <Image
            className="rounded-full"
            src={"/josh.jpg"}
            height={100}
            width={100}
          />
        </div>
        <div className="">
          <p>
            “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat.”
          </p>
          <div className="py-4 font-bold">Jenny Wilson</div>
          <div>Project Manager at Microsoft</div>
        </div>
      </div>
    </Container>
  );
}
