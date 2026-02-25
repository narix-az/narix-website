import styles from './Stats.module.css';

const stats = [
  { num: '298', suffix: '+', label: 'AI Projects Delivered' },
  { num: '978', suffix: '+', label: 'AI Bots Deployed' },
  { num: '300', suffix: '%', label: 'Faster Time to Market' },
  { num: '95', suffix: 'x', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <section id="stats" className={styles.section}>
      <div className="container">
        <div className={`${styles.grid} fade-up`}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statNum}>
                {stat.num}
                <span>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
