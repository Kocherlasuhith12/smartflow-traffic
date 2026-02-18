import { motion } from "framer-motion";
import { Car, Clock, TrendingUp, AlertTriangle, Activity, Gauge } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
}

const metrics: Metric[] = [
  { label: "Vehicles Detected", value: "1,247", change: "+12%", trend: "up", icon: <Car className="w-4 h-4" /> },
  { label: "Avg Wait Time", value: "23s", change: "-8%", trend: "down", icon: <Clock className="w-4 h-4" /> },
  { label: "Throughput/hr", value: "842", change: "+5%", trend: "up", icon: <TrendingUp className="w-4 h-4" /> },
  { label: "Incidents", value: "2", change: "+1", trend: "up", icon: <AlertTriangle className="w-4 h-4" /> },
  { label: "System Health", value: "98.7%", change: "Stable", trend: "neutral", icon: <Activity className="w-4 h-4" /> },
  { label: "AI Confidence", value: "94.2%", change: "+2.1%", trend: "up", icon: <Gauge className="w-4 h-4" /> },
];

const MetricsPanel = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="glass-panel p-3.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="text-primary">{metric.icon}</div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{metric.label}</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-xl font-bold font-mono text-foreground">{metric.value}</span>
            <span
              className={`text-[10px] font-mono ${
                metric.trend === "down" && metric.label === "Avg Wait Time"
                  ? "text-signal-green"
                  : metric.trend === "up" && metric.label === "Incidents"
                  ? "text-signal-red"
                  : metric.trend === "up"
                  ? "text-signal-green"
                  : "text-muted-foreground"
              }`}
            >
              {metric.change}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsPanel;
