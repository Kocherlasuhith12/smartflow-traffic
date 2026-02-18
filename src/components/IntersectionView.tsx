import { motion } from "framer-motion";
import { Car } from "lucide-react";

const vehicles = [
  { id: 1, x: 40, y: 15, rotation: 180, label: "Car" },
  { id: 2, x: 43, y: 28, rotation: 180, label: "Car" },
  { id: 3, x: 56, y: 72, rotation: 0, label: "Car" },
  { id: 4, x: 59, y: 85, rotation: 0, label: "Car" },
  { id: 5, x: 12, y: 53, rotation: 90, label: "Car" },
  { id: 6, x: 24, y: 56, rotation: 90, label: "Car" },
  { id: 7, x: 76, y: 44, rotation: 270, label: "Car" },
  { id: 8, x: 88, y: 47, rotation: 270, label: "Car" },
];

const IntersectionView = () => {
  return (
    <div className="glass-panel p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Junction A7 — Intersection Map</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">Vehicles detected in real-time using computer vision</p>
        </div>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-signal-green/10 border border-signal-green/20">
          <motion.div
            className="w-2 h-2 rounded-full bg-signal-green"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono text-signal-green">LIVE</span>
        </span>
      </div>

      <div className="relative flex-1 bg-background/60 rounded-xl overflow-hidden grid-bg min-h-[350px]">
        {/* Roads */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-full bg-muted/15 border-x border-border/20" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-28 bg-muted/15 border-y border-border/20" />

        {/* Center intersection */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-muted/20 border border-primary/15 rounded-md" />

        {/* Lane markings */}
        <div className="absolute top-0 left-1/2 -translate-x-px w-0.5 h-[calc(50%-56px)] border-l-2 border-dashed border-signal-amber/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-px w-0.5 h-[calc(50%-56px)] border-l-2 border-dashed border-signal-amber/30" />
        <div className="absolute top-1/2 left-0 -translate-y-px h-0.5 w-[calc(50%-56px)] border-t-2 border-dashed border-signal-amber/30" />
        <div className="absolute top-1/2 right-0 -translate-y-px h-0.5 w-[calc(50%-56px)] border-t-2 border-dashed border-signal-amber/30" />

        {/* Direction labels */}
        {[
          { x: "50%", y: "4%", label: "NORTH" },
          { x: "50%", y: "96%", label: "SOUTH" },
          { x: "4%", y: "50%", label: "WEST" },
          { x: "96%", y: "50%", label: "EAST" },
        ].map((dir) => (
          <span
            key={dir.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono text-muted-foreground/60 tracking-widest"
            style={{ left: dir.x, top: dir.y }}
          >
            {dir.label}
          </span>
        ))}

        {/* Detection zones */}
        {[
          { x: "50%", y: "18%", label: "Zone N" },
          { x: "50%", y: "82%", label: "Zone S" },
          { x: "18%", y: "50%", label: "Zone W" },
          { x: "82%", y: "50%", label: "Zone E" },
        ].map((zone) => (
          <motion.div
            key={zone.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-primary/30 rounded-lg bg-primary/5 flex flex-col items-center justify-center gap-0.5"
            style={{ left: zone.x, top: zone.y }}
            animate={{ borderColor: ["hsl(187 80% 48% / 0.15)", "hsl(187 80% 48% / 0.5)", "hsl(187 80% 48% / 0.15)"] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
          >
            <span className="text-[7px] font-mono text-primary/60">{zone.label}</span>
          </motion.div>
        ))}

        {/* Vehicles */}
        {vehicles.map((v, i) => (
          <motion.div
            key={v.id}
            className="absolute"
            style={{ left: `${v.x}%`, top: `${v.y}%`, rotate: v.rotation }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, type: "spring" }}
          >
            <Car className="w-5 h-5 text-primary drop-shadow-[0_0_4px_hsl(187_80%_48%/0.5)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntersectionView;
