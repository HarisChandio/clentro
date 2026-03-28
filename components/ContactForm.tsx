"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const BRAND_COLOR = "#FF5F00";

/* Animation Variants */
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectType: "",
    projectDescription: "",
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
          projectDescription: "",
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
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-8 pt-8"
          >
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
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Card className="border bg-white/90 shadow-sm">
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
                          formData.projectType === type
                            ? BRAND_COLOR
                            : undefined,
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <Textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  name="projectDescription"
                  value={formData.projectDescription}
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
