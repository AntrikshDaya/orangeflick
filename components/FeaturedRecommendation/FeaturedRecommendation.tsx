"use client";

type FeaturedRecommendationProps = {
  title: string;
  backdropUrl: string;
  reason: string;
  onViewDetails?: () => void;
  onReject?: () => void;
};

export default function FeaturedRecommendation({
  title,
  backdropUrl,
  reason,
  onViewDetails,
  onReject,
}: FeaturedRecommendationProps) {
  return (
   <section className="
  relative w-full h-[480px]
  rounded-2xl overflow-hidden
  bg-bg-secondary
  border border-white/5
">

      {/* Backdrop Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"

        style={{ backgroundImage: `url(${backdropUrl})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-10 pb-14 pt-20 md:px-14 md:pb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>

        <p className="text-text-secondary max-w-2xl mb-6 text-balance">
          {reason}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={onViewDetails}
            className="
              px-6 py-3
              bg-accent-primary
              text-white
              font-semibold
              rounded-md
              transition
              hover:brightness-110
            "
          >
            View Details
          </button>

<button
  onClick={onReject}
  className="
    text-sm
    font-medium
    text-text-secondary/80
    transition
    hover:text-text-primary
    hover:underline
    underline-offset-4
  "
>
  Not my vibe
</button>

        </div>
      </div>
    </section>
  );
}
