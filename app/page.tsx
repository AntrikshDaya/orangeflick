import Hero from "@/components/Hero";
import PosterRow from "@/components/PosterRow/PosterRow";
import { movies } from "@/data/movies";


export default function Home() {
    const trendingMovies = movies
    .filter((movie) =>
      movie.moods.some((mood) =>
        ["mind-bending", "feel-good", "thrilling"].includes(mood)
      )
    )
    .slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Today’s Recommendation */}
      <section className="bg-bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Today’s <span className="text-accent-primary">Recommendation</span>
          </h2>

          <div
            className="relative w-full aspect-video rounded-xl overflow-hidden bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/today-recommendation.jpg')",
              backgroundSize: "contain",
              backgroundColor: "#000",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-end p-8 md:p-12">
              <div className="max-w-xl space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Tonight’s Must-Watch
                </h3>

                <p className="text-text-secondary">
                  Handpicked for you — a solid pick to end your day right.
                </p>

                <button className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-md transition hover:brightness-110">
                  Watch Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
<section id="trending" className="py-24">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-2">
        Trending right now
      </h2>
      <p className="text-text-secondary">
        Popular picks people are loving at the moment.
      </p>
    </div>

    {trendingMovies.length > 0 ? (
      <PosterRow movies={trendingMovies} />
    ) : (
      <p className="text-text-muted">
        Trending picks coming soon.
      </p>
    )}
  </div>
</section>

    </main>
  );
}
