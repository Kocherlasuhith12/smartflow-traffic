import { motion } from "framer-motion";
import { Activity, Radio, MapPin, BarChart3, Cpu, Eye } from "lucide-react";
import MetricsPanel from "@/components/MetricsPanel";
import IntersectionView from "@/components/IntersectionView";
import TrafficSignal from "@/components/TrafficSignal";
import VehicleDetectionLog from "@/components/VehicleDetectionLog";
import TrafficFlowChart from "@/components/TrafficFlowChart";
import AdaptiveControlPanel from "@/components/AdaptiveControlPanel";

const SectionHeader = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center glow-cyan">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-base font-bold text-foreground tracking-tight">TrafficAI</h1>
              <p className="text-[11px] font-mono text-muted-foreground">Intelligent Traffic Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-green/10 border border-signal-green/20">
              <motion.div
                className="w-2 h-2 rounded-full bg-signal-green"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[11px] font-mono text-signal-green">ALL SYSTEMS ONLINE</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Radio className="w-4 h-4" />
              <span className="text-[11px] font-mono">4 Junctions</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-6 space-y-8">
        {/* Section 1: Key Metrics Overview */}
        <section>
          <SectionHeader
            icon={<BarChart3 className="w-4 h-4" />}
            title="System Overview"
            subtitle="Real-time traffic metrics across all monitored junctions"
          />
          <MetricsPanel />
        </section>

        {/* Section 2: Live Monitoring */}
        <section>
          <SectionHeader
            icon={<Eye className="w-4 h-4" />}
            title="Live Intersection Monitoring"
            subtitle="Real-time vehicle detection and signal status at Junction A7"
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5">
            {/* Intersection map */}
            <IntersectionView />

            {/* Traffic Signals - 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              <TrafficSignal direction="North" initialPhase="green" greenDuration={25} density={72} />
              <TrafficSignal direction="South" initialPhase="red" greenDuration={30} density={45} />
              <TrafficSignal direction="East" initialPhase="red" greenDuration={20} density={38} />
              <TrafficSignal direction="West" initialPhase="amber" greenDuration={22} density={61} />
            </div>
          </div>
        </section>

        {/* Section 3: Detection & Control */}
        <section>
          <SectionHeader
            icon={<Cpu className="w-4 h-4" />}
            title="AI Detection & Adaptive Control"
            subtitle="YOLO v8 vehicle detection log and adaptive signal control settings"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <VehicleDetectionLog />
            <AdaptiveControlPanel />
          </div>
        </section>

        {/* Section 4: Traffic Flow Analysis */}
        <section>
          <SectionHeader
            icon={<MapPin className="w-4 h-4" />}
            title="Traffic Flow Analysis"
            subtitle="Hourly vehicle count trends by direction throughout the day"
          />
          <div className="h-[320px]">
            <TrafficFlowChart />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
