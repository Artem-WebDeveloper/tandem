import styles from './Tile.module.scss';

export default function Tile({
  title,
  count,
  description,
}: {
  title: string;
  count: number;
  description: string;
}) {
  return (
    <div className={styles.tile}>
      <p>{title}</p>
      <h3>{count}</h3>
      <p>{description}</p>
    </div>
  );
}
