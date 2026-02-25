import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Working with Narix was game-changing. Their AI solutions reduced our bounce rate by 40% and transformed our customer engagement.',
    author: 'Jenny W.',
    role: 'Fintech Startup',
    avatar: 'JW',
  },
  {
    text: 'Narix built us a custom AI solution that tripled our process speed and cut costs significantly. Their team is exceptional.',
    author: 'Michael K.',
    role: 'E-commerce Director',
    avatar: 'MK',
  },
  {
    text: 'Their AI strategy consulting reshaped our business model. The solutions they recommended worked from day one.',
    author: 'Thomas A.',
    role: 'SaaS Founder',
    avatar: 'TA',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Testimonials</div>
          <h2 className={styles.title}>
            Data-Driven Design
            <br />
            Empowering Innovation
          </h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.author} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>&quot;{t.text}&quot;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div className={styles.authorInfo}>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
