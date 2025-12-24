"use client";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-test.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* HERO COPY */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-2xl w-full space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Don’t know what to watch{" "}
            <span className="text-accent-primary">tonight?</span>
          </h1>

          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            Smart movie & series recommendations — no endless scrolling.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 pt-4">
            <button className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-md transition hover:brightness-110">
              Let OrangeFlick Decide
            </button>

            <button className="px-6 py-3 border border-border-subtle text-text-primary rounded-md transition hover:bg-white/5">
              See What’s Trending
            </button>
          </div>
        </div>
      </div>

      {/* DISCOVER BY MOOD — FULL WIDTH RAIL */}
      <div className="absolute bottom-32 left-0 right-0 z-10">
        <p className="text-center text-sm text-text-muted mb-6">
          Or pick your mood
        </p>

        <div className="flex justify-center gap-x-6 px-16 max-w-[1400px] mx-auto">
          {[
            "Chill",
            "Romantic",
            "Thrilling",
            "Mind-bending",
            "Feel-good",
            "Dark",
            "Funny",
            "Inspirational",
          ].map((mood) => (
<button
  key={mood}
  onClick={() => {
    window.location.href = `/discover?mood=${mood
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  }}
  className="
    px-8 py-3.5
    rounded-full
    bg-white/15
    backdrop-blur-md
    text-base font-semibold
    tracking-wide
    transition-all duration-200
    hover:bg-white/20
    hover:scale-[1.08]
    active:scale-[0.96]
  "
>
  {mood}
</button>
          ))}
        </div>
      </div>
    </section>
  );
}
