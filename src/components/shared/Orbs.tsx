import styles from './Orbs.module.css';

export default function Orbs() {
  return (
    <>
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden />
    </>
  );
}
