import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { Month: "M", Traffic: 11000 },
  { Month: "J", Traffic: 15000 },
  { Month: "F", Traffic: 18000 },
  { Month: "A", Traffic: 19000 },
  { Month: "J", Traffic: 22000 },
];

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>{label}</p>
        <p>Traffic: {payload[0].value}</p>
      </div>
    );
  }
  return null;
}
export default function Chart() {
  return (
    <div className="w-full relative md:pr-48">
      <ResponsiveContainer
        className=" bg-[#95CFD9] py-12 rounded-t-xl lg:rounded-b-xl shadow-lg "
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

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="md:absolute relative lg:w-96 w-full md:max-w-md right-0 top-0 md:py-8 lg:py-12 h-full">
        <div className="w-full h-full flex flex-col items-start justify-between rounded-b-2xl md:rounded-2xl p-8 bg-white shadow-xl">
          <div className="bg-gray-50 mb-3 lg:flex flex md:hidden border border-gray-100 text-cyan-500 px-3.5 space-x-1 items-center py-1.5 text-xs rounded-full inline-block font-bold">
            <svg
              className="w-3.5 -ml-1 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="">SEO jobs</span>
          </div>
          <div className="relative">
            <p className=" py-5 lg:py-3 lg:text-base font-bold font-5xl text-center">
              Average Salary:
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
              £60,000
            </h3>
          </div>
          <a
            href="#_"
            className="bg-cyan-500 px-6 py-3 text-sm font-semibold rounded-full text-white"
          >
            Explore jobs in Manchester
          </a>
        </div>
      </div>
    </div>
  );
}
