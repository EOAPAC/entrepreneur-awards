import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { ArrowRight, Check, Linkedin, Mail, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const tiers = [
  {
    name: "Digital",
    price: "$0",
    tagline: "Enter your story.",
    features: [
      "Submission reviewed by editorial panel",
      "Digital badge if selected",
      "Featured on the awards site",
    ],
    cta: "Submit for free",
    highlight: false,
  },
  {
    name: "Signature",
    price: "$495",
    tagline: "Show up in print.",
    features: [
      "Everything in Digital",
      "Printed certificate & trophy",
      "Editorial write-up (500 words)",
      "Assets for LinkedIn & press",
    ],
    cta: "Choose Signature",
    highlight: true,
  },
  {
    name: "Headline",
    price: "$1,950",
    tagline: "Be the story.",
    features: [
      "Everything in Signature",
      "Full-length founder profile",
      "Professional photo shoot",
      "Placement in the annual anthology",
    ],
    cta: "Choose Headline",
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "The recognition landed at exactly the right moment. It reframed how our team, our investors, and our customers saw the last five years of work.",
    name: "Amara Okafor",
    title: "Founder, Meridian Labs",
  },
  {
    quote:
      "I don't chase awards. This one felt different — thoughtful, honest, and actually about the person doing the building.",
    name: "Jonas Weill",
    title: "Founder & CEO, Fieldnote",
  },
  {
    quote:
      "The profile they wrote is the piece I still send when someone asks what I do. Nothing else has come close.",
    name: "Priya Ramanathan",
    title: "Founder, North & Kin",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <Nav />
      <Hero />
      <Marquee />
      <Tiers />
      <Testimonials />
      <SubmissionForm />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          The Entrepreneur Awards
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#tiers" className="hover:text-foreground">Awards</a>
          <a href="#testimonials" className="hover:text-foreground">Winners</a>
          <a href="#submit" className="hover:text-foreground">Submit</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <Button asChild size="sm" className="rounded-lg">
          <a href="#submit">Submit story</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            2026 Edition — Submissions open
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            For the person <br className="hidden md:block" />
            who built it.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The Entrepreneur Awards honor the individual founder — not the round,
            not the exit, not the hype. One story. One person. One recognition
            that lasts.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-12 rounded-lg px-6 text-base">
              <a href="#submit">
                Submit your story <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <a
              href="#tiers"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              See the award tiers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Featured in Forbes", "Inc. 500", "Fast Company", "The Information", "TechCrunch", "Bloomberg"];
  return (
    <div className="border-y border-border/60 bg-[var(--color-subtle)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
}

function Tiers() {
  return (
    <section id="tiers" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Award tiers
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Three ways to be recognized.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Every submission is judged on the same criteria. What changes is how
          your story gets told once you're selected.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col rounded-lg border p-8 ${
              t.highlight
                ? "border-primary bg-primary text-primary-foreground shadow-lg"
                : "border-border bg-card"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  t.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {t.tagline}
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
              {t.price !== "$0" && (
                <span
                  className={`ml-1 text-sm ${
                    t.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  one-time
                </span>
              )}
            </div>
            <ul className="mb-10 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      t.highlight ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                  <span
                    className={t.highlight ? "text-primary-foreground/90" : "text-foreground"}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant={t.highlight ? "secondary" : "outline"}
              className="mt-auto h-11 rounded-lg"
            >
              <a href="#submit">{t.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border/60 bg-[var(--color-subtle)]">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Past winners
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            What being seen felt like.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-lg border border-border bg-card p-8">
              <blockquote className="text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubmissionForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Story submitted", {
        description: "We'll be in touch within 10 business days.",
      });
    }, 700);
  };

  return (
    <section id="submit" className="mx-auto max-w-3xl px-6 py-28 md:py-36">
      <div className="mb-12 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Submit
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Tell us your story.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          One entry. No categories. Just the founder, the work, and what it took
          to get here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Full name" name="name" required placeholder="Jane Doe" />
          <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Company" name="company" required placeholder="Company or product" />
          <Field label="Website" name="website" type="url" placeholder="https://" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="story">Your story</Label>
          <Textarea
            id="story"
            name="story"
            required
            rows={8}
            placeholder="What did you build, who is it for, and what did it cost you to build it? 300–800 words is ideal."
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            By submitting, you agree to our review terms.
          </p>
          <Button type="submit" size="lg" className="h-12 rounded-lg px-6" disabled={loading}>
            {loading ? "Submitting…" : "Submit story"}
          </Button>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-lg"
      />
    </div>
  );
}

function Contact() {
  const shareUrl = "https://entrepreneur-awards.example";
  const shareText = "I just submitted to The Entrepreneur Awards.";
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Questions before you submit?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We answer every email within two business days.
          </p>
          <a
            href="mailto:hello@entrepreneurawards.com"
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            hello@entrepreneurawards.com
          </a>
        </div>
        <div className="md:justify-self-end">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Share
          </p>
          <p className="max-w-sm text-muted-foreground">
            Winners get shareable assets built for LinkedIn — but you don't have
            to wait.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Twitter className="h-4 w-4" /> X / Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="font-semibold text-foreground">The Entrepreneur Awards</span>
        </div>
        <p>© {new Date().getFullYear()} The Entrepreneur Awards. All rights reserved.</p>
      </div>
    </footer>
  );
}
