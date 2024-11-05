import styles from "./GenreItem.module.css";

export default function GenreItem({ genre }) {
  return (
    <>
      <div className={styles.genreItem}>{genre}</div>
    </>
  );
}