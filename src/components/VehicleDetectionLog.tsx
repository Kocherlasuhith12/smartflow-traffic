import { motion } from "framer-motion";
import { Car, Truck, Bus } from "lucide-react";
import { useEffect, useState } from "react";

interface Detection {
  id: number;
  type: "car" | "truck" | "bus";
  lane: string;
  speed: number;
  time: string;
  confidence: number;
}

const vehicleIcons = {
  car: <Car className="w-3.5 h-3.5" />,
  truck: <Truck className="w-3.5 h-3.5" />,
  bus: <Bus className="w-3.5 h-3.5" />,
};

const lanes = ["N-1", "N-2", "S-1", "S-2", "E-1", "W-1"];
const types: ("car" | "truck" | "bus")[] = ["car", "car", "car", "truck", "bus"];

const generateDetection = (id: number): Detection => ({
  id,
  type: types[Math.floor(Math.random() * types.length)],
  lane: lanes[Math.floor(Math.random() * lanes.length)],
  speed: 15 + Math.floor(Math.random() * 50),
  time: new Date().toLocaleTimeString(),
  confidence: 85 + Math.floor(Math.random() * 15),
});

const VehicleDetectionLog = () => {
  const [detections, setDetections] = useState<Detection[]>(() =>
    Array.from({ length: 8 }, (_, i) => generateDetection(i))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDetections((prev) => [generateDetection(Date.now()), ...prev.slice(0, 7)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Vehicle Detection Log</h3>
        <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          YOLO v8 Active
        </span>
      </div>
      <div className="flex-1 overflow-hidden space-y-1.5">
        {detections.map((d, i) => (
          <motion.div
            key={d.id}
            className="flex items-center gap-3 px-3 py-2 rounded bg-background/40 text-xs font-mono"
            initial={i === 0 ? { opacity: 0, x: -20 } : {}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-primary">{vehicleIcons[d.type]}</span>
            <span className="text-muted-foreground w-8">{d.lane}</span>
            <span className="text-foreground w-14">{d.speed} km/h</span>
            <span className="text-signal-green">{d.confidence}%</span>
            <span className="text-muted-foreground ml-auto text-[10px]">{d.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDetectionLog;
