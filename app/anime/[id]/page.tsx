"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/NavigationBar";
import AnimeDetail from "@/app/components/AnimeDetail";

export default function AnimeById({ params }: { params: { id: string } }) {
  const [id, setId] = useState(params.id);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnimeById = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const data = await response.json();
      setAnime(data.data);
    };

    fetchAnimeById();
  }, [id]);

  return (
    <div>
      <Navbar />
      <AnimeDetail anime={anime} />
    </div>
  );
}
