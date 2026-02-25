import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We deeply explore your goals and challenges to identify high-impact AI opportunities.',
  },
  {
    num: '02',
    title: 'Data & Infrastructure Assessment',
    desc: 'We evaluate your data ecosystem and design an optimal AI architecture.',
  },
  {
    num: '03',
    title: 'Custom AI Development',
    desc: 'We build your solution with technical excellence and ethical AI principles.',
  },
  {
    num: '04',
    title: 'Optimization & Support',
    desc: 'Post-launch we continuously monitor, optimize, and evolve your solution.',
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>How It Works</div>
          <h2 className={styles.title}>
            Our Process for
            <br />
            Smarter AI Solutions
          </h2>
        </div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.stepItem}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
