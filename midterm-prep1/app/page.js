"use client";

import { useState } from "react";
import GenreList from "./components/GenreList/GenreList";
import styles from "./page.module.css"

export default function Home() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch genres from the Genrenator API
  async function fetchGenres() {
    setLoading(true);
    try {
      const response = await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/5/");
      const data = await response.json();
      setGenres(data);
    } catch (error) {
      console.error("Error fetching genres:", error);
    } finally {
      setLoading(false);
    }
  }

  // Clear genres from the display
  function clearGenres() {
    setGenres([]);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Random Music Genres</h1>
      <button onClick={fetchGenres} className={styles.button}>
        {genres.length > 0 ? "Refresh Genres" : "Get Genres"}
      </button>
      <button onClick={clearGenres} className={styles.button}>
        Clear
      </button>
      {loading ? <p>Loading...</p> : <GenreList genres={genres} />}
    </div>
  );
}