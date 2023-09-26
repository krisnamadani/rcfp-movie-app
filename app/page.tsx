"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'

import Navbar from "./components/NavigationBar";
import Anime from "./components/Anime";

export default function Home() {
  const searchParams = useSearchParams()

  const [anime, setAnime] = useState([])

  const search = searchParams.get('query') || ''
  const page = searchParams.get('page') || 1

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=${page}`);
      const data = await response.json()
      setAnime(data.data)
    };

    fetchAnime();
  }, [search, page]);

  return (
    <div>
      <Navbar />
      <Anime anime={anime} />
    </div>
  );
}
