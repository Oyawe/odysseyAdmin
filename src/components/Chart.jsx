import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

// eslint-disable-next-line react/prop-types
export const Chart = ({ height, title }) => {
  return (
    <div className="flex flex-col flex-1 chart min-h-[200px] sm:min-h-[300px] shadow-md shadow-slate-400 sm:p-4 p-0">
      <div className="p-2 text-xl text-gray-400 title">{title}</div>
      <ResponsiveContainer width="100%" height={height}>
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
      </ResponsiveContainer>
    </div>
  );
};
