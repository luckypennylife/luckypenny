import { useState } from "react";
import pennyImage from "@/assets/lucky-penny.png";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(38 70% 55% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Coin */}
        <div className="animate-float mb-10" style={{ animationDelay: "0s" }}>
          <img
            src={pennyImage}
            alt="Lucky Penny coin"
            className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <h1
          className="animate-fade-in-up text-4xl md:text-6xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
            Lucky Penny
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up text-muted-foreground text-lg md:text-xl mb-10 max-w-md leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Something exciting is on its way.
          <br />
          Stay tuned — good luck is just around the corner.
        </p>

        {/* Email form */}
        <div
          className="animate-fade-in-up w-full max-w-sm"
          style={{ animationDelay: "0.4s" }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <p className="text-primary font-medium text-lg">
              ✨ You're on the list! We'll be in touch.
            </p>
          )}
        </div>

        {/* Footer */}
        <p
          className="animate-fade-in-up text-muted-foreground/50 text-sm mt-16"
          style={{ animationDelay: "0.6s" }}
        >
          © {new Date().getFullYear()} luckypenny.life
        </p>
      </div>
    </div>
  );
};

export default Index;
