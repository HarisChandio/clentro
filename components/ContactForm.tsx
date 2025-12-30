"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const BRAND_COLOR = "#FF5F00";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const projectTypes = ["SaaS", "Web App", "Mobile", "AI"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! We'll respond within 24 hours.",
        });
        setFormData({
          fullName: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
      } else {
        const error = await response.json();
        setStatus({
          type: "error",
          message: error.error || "Failed to submit. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-10 bg-neutral-50">
      {/* Radial Backgrounds */}
      <div className="pointer-events-none absolute inset-0">
        {/* <div
          className="absolute top-10 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: BRAND_COLOR }}
        />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-orange-500 blur-3xl opacity-40" /> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-8 pt-8">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              CONTACT
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Let’s build something{" "}
              <span style={{ color: BRAND_COLOR }}>exceptional</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-lg">
              Share your idea and we’ll respond within 24 hours with a clear
              plan, timeline, and pricing.
            </p>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>✓ Senior engineers only</li>
              <li>✓ Clear scope & timeline</li>
              <li>✓ No sales pressure</li>
            </ul>
          </div>

          {/* FORM CARD */}
          <Card className="border  bg-white/90 shadow-sm">
            <CardContent className="md:p-8 space-y-6">
              <Input
                placeholder="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

              <Input
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                placeholder="Company (optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              {/* Project Type */}
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, projectType: type })
                    }
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      formData.projectType === type
                        ? "text-white"
                        : "border-muted bg-muted/40"
                    }`}
                    style={{
                      backgroundColor:
                        formData.projectType === type ? BRAND_COLOR : undefined,
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <Textarea
                rows={5}
                placeholder="Tell us about your project..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              {/* Status */}
              {status.type && (
                <div
                  className={`flex items-center gap-2 rounded-lg p-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  {status.message}
                </div>
              )}

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full rounded-full font-semibold cursor-pointer"
                style={{ backgroundColor: BRAND_COLOR }}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We usually reply within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

{
  /* Contact Options */
}
{
  /* <div className="grid  gap-8 mt-16 ">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <a 
              href="mailto:contact@clentro.io" 
              className="text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              contact@clentro.io
            </a>
          </div> */
}

{
  /* <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Schedule Call</h3>
            <a 
              href="#" 
              className="text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              Book a free consultation
            </a>
          </div> */
}

{
  /* <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Slack</h3>
            <a 
              href="#" 
              className="text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              Join our community
            </a>
          </div> */
}
