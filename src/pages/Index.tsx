import pennyImage from "@/assets/lucky-penny.png";

const Index = () => {
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
