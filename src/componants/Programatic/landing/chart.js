import { ResponsiveContainer, AreaChart, Area, CartesianGrid } from "recharts";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({ children, duration = 2000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

const data = [
  { Traffic: 66259.88 },
  { Traffic: 66255.67 },
  { Traffic: 69187.26 },
  { Traffic: 69491.77 },
  { Traffic: 69707.75 },
];

// const data1 = [
//   { Traffic: 66259.88 },
//   { Traffic: 66255.67 },
//   { Traffic: 69187.26 },
//   { Traffic: 71491.77 },
//   { Traffic: 75707.75 },
// ];

// function CustomTooltip({ active, payload, label }) {
//   if (active) {
//     return (
//       <div className="tooltip">
//         <p>{label}</p>
//         <p>Traffic: {payload[0].value}</p>
//       </div>
//     );
//   }
//   return null;
// }

export default function Chart({ location }) {
  return (
    <div className="w-full relative md:pr-48">
      <div className=" relative -mb-6">
        {/* <div className="">
          <div className="flex -mb-14 lg:ml-12 ml-4 ">
            <select
              className="bg-white p-2 px-3 mr-2 text-sm font-bold rounded-full text-royal"
              type="select"
              id="experience"
              required
              name="experience"
            >
              <option value="1 year">SEO consultant </option>
              <option value="2 year">SEO Manager</option>
              <option value="3 year ">Technichal SEO </option>
            </select>
          </div>
        </div> */}
      </div>
      <ResponsiveContainer
        className=" bg-royal py-12 z-10 rounded-t-xl lg:rounded-b-xl shadow-lg "
        width="100%"
        height={400}
      >
        <AreaChart data={data} margin={{ left: 0 }}>
          <defs>
            <linearGradient id="colour" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#fff" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="Traffic" stroke="#fff" fill="url(#colour)" />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="md:absolute relative lg:w-96 w-full md:max-w-md right-0 top-0 md:py-8 lg:py-12 h-full">
        <div className="w-full h-full flex flex-col items-start justify-between rounded-b-2xl md:rounded-2xl p-8 bg-white shadow-xl">
          <div className="bg-gray-50 mb-3 lg:flex flex md:hidden border border-gray-100 text-royal px-3.5 space-x-1 items-center py-1.5 text-xs rounded-full inline-block font-bold">
            <svg
              className="w-3.5 -ml-1 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="">SEO jobs in {location}</span>
          </div>
          <div>
            {" "}
            <p className="   font-bold font-5xl text-center">Average Salary:</p>
          </div>
          <div className="relative sm:text-center">
            <h3 className="text-5xl py-2  font-bold text-slate-800">
              £<CountUpAnimation>32500</CountUpAnimation>{" "}
              <span className="text-xl">/ Annual</span>
            </h3>
          </div>
          <div className="text-gray-500 ">Based on 10000 salaries</div>
          <Link
            href="/ads/jobs/glasgow"
            className="bg-royal px-6 py-4  mt-4 text-sm font-semibold rounded-full text-white"
          >
            Explore jobs in {location}
          </Link>
          <div className="lg:hidden py-4">
            The average <span className="font-bold">SEO</span> salary in the
            United Kingdom is <span className="font-bold">£32,500 </span>
            per year or <span className="font-bold">£16.67 </span> per hour.
            Entry level positions start at{" "}
            <span className="font-bold">£27,000 </span> per year while most
            experienced workers make up to{" "}
            <span className="font-bold">£45,000 </span> per year.
          </div>
        </div>
      </div>
    </div>
  );
}
