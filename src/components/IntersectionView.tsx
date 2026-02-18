import { motion } from "framer-motion";
import { Car } from "lucide-react";

const vehicles = [
  { id: 1, x: 35, y: 20, rotation: 180 },
  { id: 2, x: 38, y: 30, rotation: 180 },
  { id: 3, x: 60, y: 75, rotation: 0 },
  { id: 4, x: 63, y: 85, rotation: 0 },
  { id: 5, x: 15, y: 55, rotation: 90 },
  { id: 6, x: 25, y: 58, rotation: 90 },
  { id: 7, x: 75, y: 42, rotation: 270 },
  { id: 8, x: 85, y: 45, rotation: 270 },
];

const IntersectionView = () => {
  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Live Intersection — Junction A7</h3>
        <span className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 rounded-full bg-signal-green"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono text-muted-foreground">LIVE</span>
        </span>
      </div>
      <div className="relative flex-1 bg-background/60 rounded-lg overflow-hidden grid-bg min-h-[300px]">
        {/* Roads */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-full bg-muted/20 border-x border-border/30" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-24 bg-muted/20 border-y border-border/30" />

        {/* Center intersection */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-muted/30 border border-primary/20 rounded" />

        {/* Lane markings */}
        <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-[calc(50%-48px)] border-l border-dashed border-signal-amber/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-px w-0.5 h-[calc(50%-48px)] border-l border-dashed border-signal-amber/40" />
        <div className="absolute top-1/2 left-0 -translate-y-px h-0.5 w-[calc(50%-48px)] border-t border-dashed border-signal-amber/40" />
        <div className="absolute top-1/2 right-0 -translate-y-px h-0.5 w-[calc(50%-48px)] border-t border-dashed border-signal-amber/40" />

        {/* Vehicles */}
        {vehicles.map((v, i) => (
          <motion.div
            key={v.id}
            className="absolute"
            style={{ left: `${v.x}%`, top: `${v.y}%`, rotate: v.rotation }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Car className="w-4 h-4 text-primary" />
          </motion.div>
        ))}

        {/* Detection zones */}
        {[
          { x: "50%", y: "15%", label: "N" },
          { x: "50%", y: "85%", label: "S" },
          { x: "15%", y: "50%", label: "W" },
          { x: "85%", y: "50%", label: "E" },
        ].map((zone) => (
          <motion.div
            key={zone.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-primary/40 rounded bg-primary/5 flex items-center justify-center"
            style={{ left: zone.x, top: zone.y }}
            animate={{ borderColor: ["hsl(187 80% 48% / 0.2)", "hsl(187 80% 48% / 0.6)", "hsl(187 80% 48% / 0.2)"] }}
            transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
          >
            <span className="text-[9px] font-mono text-primary/70">{zone.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntersectionView;
