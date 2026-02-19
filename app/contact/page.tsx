import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Clentro. Start your high-velocity engineering project today. Fast, AI-powered software development for SaaS and AI startups.',
  openGraph: {
    title: 'Contact Clentro - Start Your Project',
    description: 'Ready to build and ship fast? Contact our engineering team today.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactForm />
    </div>
  );
}
