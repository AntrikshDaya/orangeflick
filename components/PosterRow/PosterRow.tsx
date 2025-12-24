"use client";

import PosterCard from "@/components/PosterCard";

type Movie = {
  id: string;
  title: string;
  poster: string;
};

export default function PosterRow({ movies }: { movies: Movie[] }) {
  const scrollLeft = () => {
    const el = document.getElementById("poster-row");
    el?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = document.getElementById("poster-row");
    el?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          z-10
          bg-black/60 hover:bg-black/80
          text-white
          w-10 h-10
          rounded-full
          flex items-center justify-center
        "
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          z-10
          bg-black/60 hover:bg-black/80
          text-white
          w-10 h-10
          rounded-full
          flex items-center justify-center
        "
      >
        ›
      </button>

      {/* POSTER ROW */}
      <div
        id="poster-row"
        className="
          flex gap-6
          overflow-x-auto
          pb-4
          no-scrollbar
          px-12
        "
      >
        {movies.map((movie) => (
          <PosterCard
            key={movie.id}
            title={movie.title}
            posterUrl={movie.poster}
          />
        ))}
      </div>
    </div>
  );
}
