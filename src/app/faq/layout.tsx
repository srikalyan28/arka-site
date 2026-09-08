import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to frequently asked questions about studying abroad, visa requirements, university applications, and overseas education.",
  keywords: ["Study abroad frequently asked questions", "Overseas education requirements", "When to start study abroad application", "study abroad process"],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
