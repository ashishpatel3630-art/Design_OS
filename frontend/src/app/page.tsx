import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <main className="p-10">
      <Navbar />

      <Button>Design OS</Button>

      <div className="mt-10">
        <GlassCard>
          <h1 className="text-3xl">Design System</h1>

          <p>Create colors, gradients and typography.</p>
        </GlassCard>
      </div>
    </main>
  );
}
