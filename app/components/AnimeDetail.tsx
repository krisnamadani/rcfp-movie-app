import Image from "next/image";

export default function AnimeDetail({ anime }: { anime: any }) {
  if (anime.length === 0) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div className="flex flex-row gap-5">
        <div className="w-full">
          <Image
            src={anime.images.jpg.large_image_url}
            width={250}
            height={0}
            alt={anime.title}
          />
        </div>
        <div>
          <div><strong>Title:</strong> {anime.title}</div>
            <div><strong>Synopsis:</strong> {anime.synopsis}</div>
            <div><strong>Type:</strong> {anime.type}</div>
            <div><strong>Episodes:</strong> {anime.episodes}</div>
            <div><strong>Duration:</strong> {anime.duration}</div>
            <div><strong>Status:</strong> {anime.status}</div>
            <div><strong>Score:</strong> {anime.score}</div>
            <div><strong>Rating:</strong> {anime.rating}</div>
            <div><strong>Rank:</strong> {anime.rank}</div>
            <div><strong>Popularity:</strong> {anime.popularity}</div>
            <div><strong>Members:</strong> {anime.members}</div>
        </div>
      </div>
    </div>
  );
}
