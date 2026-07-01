import type { Metadata } from "next";
import { SocialLinks } from "@/components/site/social-links";
import { LottiePlayer } from "@/components/site/lottie-player";
import { ContactForm } from "@/components/sections/contact-form";
import email from "@/content/lottie/email.json";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Meet Soni.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2">
      <div className="flex flex-col items-start gap-6">
        <h1 className="font-heading text-3xl font-semibold">Get In Touch</h1>
        <p className="max-w-md text-muted-foreground">
          Have a project in mind or just want to connect? My inbox is always open.
        </p>
        <ContactForm />
        <SocialLinks />
      </div>
      <div className="mx-auto w-full max-w-sm md:max-w-none">
        <LottiePlayer animationData={email} />
      </div>
    </div>
  );
}
