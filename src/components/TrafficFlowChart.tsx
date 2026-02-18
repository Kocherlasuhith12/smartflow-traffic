import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "06:00", north: 120, south: 80, east: 60, west: 90 },
  { time: "07:00", north: 280, south: 200, east: 150, west: 220 },
  { time: "08:00", north: 450, south: 380, east: 290, west: 350 },
  { time: "09:00", north: 380, south: 320, east: 250, west: 280 },
  { time: "10:00", north: 250, south: 220, east: 180, west: 200 },
  { time: "11:00", north: 220, south: 190, east: 160, west: 180 },
  { time: "12:00", north: 300, south: 260, east: 200, west: 240 },
  { time: "13:00", north: 280, south: 240, east: 190, west: 220 },
  { time: "14:00", north: 250, south: 210, east: 170, west: 200 },
  { time: "15:00", north: 320, south: 280, east: 220, west: 260 },
  { time: "16:00", north: 420, south: 360, east: 280, west: 340 },
  { time: "17:00", north: 480, south: 400, east: 310, west: 380 },
  { time: "18:00", north: 400, south: 340, east: 260, west: 300 },
  { time: "19:00", north: 280, south: 240, east: 180, west: 210 },
];

const TrafficFlowChart = () => {
  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Traffic Flow Analysis</h3>
        <div className="flex gap-3">
          {[
            { label: "North", color: "hsl(187 80% 48%)" },
            { label: "South", color: "hsl(145 70% 50%)" },
            { label: "East", color: "hsl(38 95% 55%)" },
            { label: "West", color: "hsl(280 60% 60%)" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              {[
                { id: "north", color: "187, 80%, 48%" },
                { id: "south", color: "145, 70%, 50%" },
                { id: "east", color: "38, 95%, 55%" },
                { id: "west", color: "280, 60%, 60%" },
              ].map((g) => (
                <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={`hsl(${g.color})`} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={`hsl(${g.color})`} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 25% 18%)" />
            <XAxis dataKey="time" tick={{ fontSize: 10, fill: "hsl(215 15% 50%)" }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "hsl(215 15% 50%)" }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222 40% 10%)",
                border: "1px solid hsl(222 25% 18%)",
                borderRadius: "8px",
                fontSize: "11px",
                fontFamily: "JetBrains Mono",
              }}
            />
            <Area type="monotone" dataKey="north" stroke="hsl(187 80% 48%)" fill="url(#north)" strokeWidth={2} />
            <Area type="monotone" dataKey="south" stroke="hsl(145 70% 50%)" fill="url(#south)" strokeWidth={2} />
            <Area type="monotone" dataKey="east" stroke="hsl(38 95% 55%)" fill="url(#east)" strokeWidth={2} />
            <Area type="monotone" dataKey="west" stroke="hsl(280 60% 60%)" fill="url(#west)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficFlowChart;
