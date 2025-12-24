"use client";

type PosterCardProps = {
  title: string;
  posterUrl: string;
  onClick?: () => void;
};

export default function PosterCard({
  title,
  posterUrl,
  onClick,
}: PosterCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        aspect-[2/3] w-[220px] shrink-0
        rounded-xl
        overflow-hidden
        bg-bg-secondary
        cursor-pointer
        transition-transform
        hover:scale-[1.03]
      "
    >
<div
  className="absolute inset-0 bg-cover bg-center bg-bg-secondary"
  style={{
    backgroundImage: posterUrl ? `url(${posterUrl})` : undefined,
  }}
/>


      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/70
          opacity-0
          group-hover:opacity-100
          transition-opacity
          flex items-end
          p-4
        "
      >
        <p className="text-sm font-semibold text-white leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
}
