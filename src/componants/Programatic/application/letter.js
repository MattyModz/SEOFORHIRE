import React from "react";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../../../sanity";
export default function Letter({ from, location, body, img }) {
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
              <div className=" w-full lg:flex">
                {" "}
                <div className=" lg:w-3/4  ">
                  <div className=" text-base font-normal leading-7 text-black text-opacity-80">
                    <div className="text-xl">
                      <span className="font-bold text-xl text-royal">
                        From:
                      </span>{" "}
                      {from}
                      <br />
                      <span className="font-bold text-xl text-royal">
                        Where:
                      </span>{" "}
                      {location}
                      <br />
                    </div>
                    <div className="py-4 text-xl">
                      {" "}
                      <PortableText
                        content={body}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        serializers={{
                          h1: (props) => (
                            <h1
                              className="text-6xl font-bold my-5"
                              {...props}
                            />
                          ),
                          h2: (props) => (
                            <h2
                              className="text-4xl font-bold my-5"
                              {...props}
                            />
                          ),
                          h3: (props) => (
                            <h2
                              className="text-2xl font-bold my-5"
                              {...props}
                            />
                          ),
                          li: ({ children }) => (
                            <li className="ml-4 list-disc text-white">
                              {" "}
                              {children}{" "}
                            </li>
                          ),
                          link: ({ href, children }) => (
                            <a
                              href={href}
                              className="text-white hover:underline"
                            >
                              {children}
                            </a>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="text-center lg:w-1/4 ">
                  <Image
                    className="rounded-full "
                    src={urlFor(img).url()}
                    width={230}
                    height={230}
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
//   The &apos;One Funnel Away&apos; Challenge And Change Your Business Forever!{" "}
// </div>;
