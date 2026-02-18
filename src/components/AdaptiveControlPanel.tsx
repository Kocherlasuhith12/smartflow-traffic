import { motion } from "framer-motion";
import { Brain, Zap, Settings, ToggleRight } from "lucide-react";
import { useState } from "react";

const modes = [
  { id: "adaptive", label: "AI Adaptive", desc: "ML-based real-time optimization", icon: <Brain className="w-4 h-4" /> },
  { id: "rush", label: "Rush Hour", desc: "Priority corridors enabled", icon: <Zap className="w-4 h-4" /> },
  { id: "manual", label: "Manual Override", desc: "Operator-controlled signals", icon: <Settings className="w-4 h-4" /> },
];

const AdaptiveControlPanel = () => {
  const [activeMode, setActiveMode] = useState("adaptive");

  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Signal Control Mode</h3>
        <ToggleRight className="w-4 h-4 text-signal-green" />
      </div>
      <div className="space-y-2 flex-1">
        {modes.map((mode) => (
          <motion.button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
              activeMode === mode.id
                ? "bg-primary/10 border border-primary/30"
                : "bg-background/40 border border-transparent hover:border-border/50"
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <div className={activeMode === mode.id ? "text-primary" : "text-muted-foreground"}>{mode.icon}</div>
            <div>
              <div className={`text-xs font-semibold ${activeMode === mode.id ? "text-primary" : "text-foreground"}`}>
                {mode.label}
              </div>
              <div className="text-[10px] text-muted-foreground">{mode.desc}</div>
            </div>
            {activeMode === mode.id && (
              <motion.div
                className="ml-auto w-2 h-2 rounded-full bg-signal-green"
                layoutId="active-indicator"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="mt-3 p-2.5 rounded bg-background/40 border border-border/30">
        <div className="flex items-center gap-2 mb-1">
          <Brain className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-mono text-primary">ADAPTIVE ALGORITHM STATUS</span>
        </div>
        <p className="text-[10px] text-muted-foreground font-mono leading-relaxed">
          Phase optimization active • Cycle length: 90s • Green wave sync: Corridor B enabled • Emergency preemption: Standby
        </p>
      </div>
    </div>
  );
};

export default AdaptiveControlPanel;
