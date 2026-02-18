import { motion } from "framer-motion";
import { Activity, Radio } from "lucide-react";
import MetricsPanel from "@/components/MetricsPanel";
import IntersectionView from "@/components/IntersectionView";
import TrafficSignal from "@/components/TrafficSignal";
import VehicleDetectionLog from "@/components/VehicleDetectionLog";
import TrafficFlowChart from "@/components/TrafficFlowChart";
import AdaptiveControlPanel from "@/components/AdaptiveControlPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center glow-cyan">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-foreground tracking-tight">TrafficAI</h1>
              <p className="text-[10px] font-mono text-muted-foreground">Intelligent Traffic Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-green/10 border border-signal-green/20">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-signal-green"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] font-mono text-signal-green">ALL SYSTEMS ONLINE</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Radio className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono">4 Junctions Connected</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto p-4 space-y-4">
        {/* Metrics Row */}
        <MetricsPanel />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Intersection + Signals */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
              <IntersectionView />
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <TrafficSignal direction="North" initialPhase="green" greenDuration={25} density={72} />
                <TrafficSignal direction="South" initialPhase="red" greenDuration={30} density={45} />
                <TrafficSignal direction="East" initialPhase="red" greenDuration={20} density={38} />
                <TrafficSignal direction="West" initialPhase="amber" greenDuration={22} density={61} />
              </div>
            </div>
            <TrafficFlowChart />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <VehicleDetectionLog />
            <AdaptiveControlPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
