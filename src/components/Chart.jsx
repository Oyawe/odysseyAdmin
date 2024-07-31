import {
  AreaChart,
  LineChart,
  Line,
  Legend,
  Area,
  XAxis,
  //   YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

export const Chart = () => {
  return (
    <div className="flex flex-col flex-1 chart min-h-[200px] sm:min-h-[300px] shadow-md shadow-slate-400 sm:p-4 p-0">
      <div className="p-2 text-xl text-gray-400 title">
        Last 6 Months (Revenue)
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="rgba(59, 130, 246, 1)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        {/* <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8} />
              <stop
                offset="95%"
                stopColor="rgba(59, 130, 246, 1)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          {/* <YAxis /> */}
        {/* <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        // </AreaChart> */}
      </ResponsiveContainer>
    </div>
  );
};
