import ShipFastMethodology from "@/components/ShipFastMethodology";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Methodology',
  description: 'Learn about Clentro\'s Ship Fast methodology. High-velocity engineering process that delivers production-ready software in 45 days on average.',
  openGraph: {
    title: 'Ship Fast Methodology - Clentro',
    description: 'Our proven process for rapid software development and deployment.',
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ShipFastMethodology />
    </div>
  );
}
