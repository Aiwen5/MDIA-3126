import GenreItem from "../GenreItem/GenreItem";
import styles from "./GenreList.module.css";

export default function GenreList({ genres }) {
  if (genres.length === 0) {
    return <p>Click "Get Genres" to get 5 random genres</p>;
  }

  return (
    <>
      <div className={styles.listContainer}>
        {genres.map((genre, index) => (
          <GenreItem key={index} genre={genre} />
        ))}
      </div>
    </>
  );
}