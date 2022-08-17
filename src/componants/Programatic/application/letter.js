import React from "react";
import Container from "../../container";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Letter() {
  return (
    <section className="  container px-8">
      <br />

      <div className="relative lg:max-w-5xl  mx-auto  lg:px-8">
        <div className="relative">
          <div className="flex flex-col justify-between lg:col-span-3">
            <motion.div
              className=" flex flex-col justify-between lg:col-span-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.35 },
              }}
              viewport={{ once: true }}
            >
              <div className=" w-full">
                {" "}
                <div className="lg:w-3/4 ">
                  <div className=" text-base font-normal leading-7 text-black text-opacity-80">
                    <div className="text-xl">
                      <span className="font-bold text-xl text-royal">
                        From:
                      </span>{" "}
                      Russell Brunson
                      <br />
                      <span className="font-bold text-xl text-royal">
                        Where:
                      </span>{" "}
                      Boise, Idaho
                      <br />
                    </div>
                    <div className="py-4 text-xl">
                      What does{" "}
                      <span className="font-bold">
                        'One Funnel Away' mean for you...?{" "}
                      </span>{" "}
                      <br />
                      <br />
                      For everyone it's different... <br />
                      <br />
                      For some of you,{" "}
                      <span className="underline">
                        you're in a job that you hate,
                      </span>{" "}
                      and you're trying to get out. <br /> <br /> For others,
                      you are entrepreneurs with your own company...{" "}
                      <span className="underline">but you're stuck,</span>
                      and you're not sure why. And for others of you, you're
                      looking for that one funnel that will help you to{" "}
                      <span className="font-bold">
                        have more impact on the world!
                      </span>{" "}
                      <br /> <br /> Before I share with you MY GOAL for this
                      'One Funnel Away challenge for YOU... let me ask you a few
                      questions...
                    </div>
                  </div>
                </div>{" "}
                <div className="text-center">
                  <Image
                    className="rounded-full "
                    src={"/josh.jpg"}
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="text-center text-2xl p-4">
//   If You Checked ANY Of The Boxes Above, Then I Want To Invite You To Join
//   The 'One Funnel Away' Challenge And Change Your Business Forever!{" "}
// </div>;
