import { motion } from "framer-motion";

export default function Layout() {
  return (
    <motion.div
      initial="pageInitial"
      exit={{ opacity: 0 }}
      animate="pageAnimate"
      className="py-11 flex justify-center text-white"
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
        <h1 className="pb-5 z-1 text-transparent sm:text-7xl sm:text-6xl md:text-7xl sm:text-center md:text-center bg-clip-text bg-gradient-to-br from-logo-pink via-fuscia-800 to-purple-600">
          Blog
        </h1>
      </div>
    </motion.div>
  );
}
