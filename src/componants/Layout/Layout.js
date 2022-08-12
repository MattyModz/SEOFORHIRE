import { motion } from "framer-motion";

export default function Layout({ children, Herotitle }) {
  return (
    <section className="w-full ">
      <div className=" w-full   flex flex-col items-center px-8 pt-12 pb-24 mx-auto  bg-gradient-to-br from-royal via-accent to-black sm:pt-20 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
        <div className="w-full mb-5 sm:w-11/12 lg:w-2/3 lg:mb-10">
          <motion.div
            initial="pageInitial"
            exit={{ opacity: 0 }}
            animate="pageAnimate"
            classNameName="py-11 flex justify-center text-white"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <div className="text-6xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center p-2">
              <h1 className="pb-5 z-1 sm:text-7xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
                {Herotitle}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
        <div className="relative  w-11/12  sm:w-2/3">
          <div className="overflow-hidden  rounded-xl">
            <div className=" box-content w-full h-auto ">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
