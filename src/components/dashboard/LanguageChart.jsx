import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const LanguageChart = ({ data }) => {
  const chartData = Object.entries(data).map(([language, value]) => ({
    language,
    value,
  }));

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          🥧 Language Distribution
        </h2>

        <p className="mt-1 text-slate-400">
          Reviews grouped by programming language
        </p>
      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="language"
              outerRadius={110}
              innerRadius={55}
              paddingAngle={3}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.language}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default LanguageChart;