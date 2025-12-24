import FeaturedRecommendation from "@/components/FeaturedRecommendation";
import PosterRow from "@/components/PosterRow/PosterRow";
import { movies } from "@/data/movies";

const moods = [
  "chill",
  "feel-good",
  "funny",
  "thrilling",
  "mind-bending",
  "emotional",
];

export default function DiscoverPage({
  searchParams,
}: {
  searchParams: { mood?: string };
}) {
  const activeMood = searchParams.mood ?? "mind-bending";

  // FILTER MOVIES BY MOOD
  const filteredMovies = movies.filter((movie) =>
    movie.moods.includes(activeMood)
  );

  const hasMovies = filteredMovies.length > 0;
  const featuredMovie = filteredMovies[0];
  const remainingMovies = filteredMovies.slice(1);

  return (
    <main className="bg-bg-primary min-h-screen px-6 md:px-12 py-10">
      {/* PAGE CONTEXT */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Discover</h1>
        <p className="text-text-muted">
          Showing recommendations for:{" "}
          <span className="text-text-primary font-medium capitalize">
            {activeMood.replace("-", " ")}
          </span>
        </p>
      </header>

      {/* MOOD SELECTOR */}
      <section className="mb-16 flex flex-wrap gap-4">
        {moods.map((mood) => {
          const isActive = mood === activeMood;

          return (
            <a
              key={mood}
              href={`/discover?mood=${mood}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-accent-primary text-white"
                  : "bg-white/10 text-text-primary hover:bg-white/20"
              }`}
            >
              {mood.replace("-", " ")}
            </a>
          );
        })}
      </section>

      {/* FEATURED RECOMMENDATION */}
      <section className="py-20">
        {hasMovies ? (
          <FeaturedRecommendation
            title={featuredMovie.title}
            backdropUrl={featuredMovie.backdrop}
            reason={featuredMovie.reason}
          />
        ) : (
          <p className="text-text-muted text-center">
            We’re still curating picks for this mood. Try another vibe ✨
          </p>
        )}
      </section>

      {/* SECONDARY PICKS */}
      <section className="mt-24">
        <h2 className="text-xl font-semibold mb-6">
          More picks you might like
        </h2>

        {remainingMovies.length > 0 ? (
          <PosterRow movies={remainingMovies} />
        ) : (
          <p className="text-text-muted">
            More recommendations coming soon for this mood.
          </p>
        )}
      </section>
    </main>
  );
}
