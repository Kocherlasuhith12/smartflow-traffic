import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TrafficSignalProps {
  direction: string;
  initialPhase?: "red" | "amber" | "green";
  greenDuration?: number;
  density?: number; // 0-100 vehicle density
}

const TrafficSignal = ({ direction, initialPhase = "red", greenDuration = 30, density = 50 }: TrafficSignalProps) => {
  const [phase, setPhase] = useState(initialPhase);
  const [timer, setTimer] = useState(greenDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setPhase((p) => {
            if (p === "green") return "amber";
            if (p === "amber") return "red";
            return "green";
          });
          return phase === "green" ? 5 : phase === "amber" ? greenDuration : greenDuration;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase, greenDuration]);

  const lights = [
    { color: "red", active: phase === "red", glowClass: "glow-red", bgClass: "bg-signal-red" },
    { color: "amber", active: phase === "amber", glowClass: "glow-amber", bgClass: "bg-signal-amber" },
    { color: "green", active: phase === "green", glowClass: "glow-green", bgClass: "bg-signal-green" },
  ];

  return (
    <div className="glass-panel p-4 flex flex-col items-center gap-3">
      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{direction}</span>
      <div className="flex flex-col gap-2 bg-background/60 rounded-full p-2.5">
        {lights.map((light) => (
          <motion.div
            key={light.color}
            className={`w-8 h-8 rounded-full ${light.active ? light.bgClass : "bg-muted/30"} ${light.active ? light.glowClass : ""}`}
            animate={{ opacity: light.active ? 1 : 0.2, scale: light.active ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <div className="text-center">
        <span className="font-mono text-2xl font-bold text-foreground">{timer}s</span>
        <div className="flex items-center gap-1.5 mt-1">
          <div className={`w-1.5 h-1.5 rounded-full ${density > 70 ? "bg-signal-red" : density > 40 ? "bg-signal-amber" : "bg-signal-green"}`} />
          <span className="text-[10px] font-mono text-muted-foreground">{density}% density</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficSignal;
