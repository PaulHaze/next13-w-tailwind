import styles from './page.module.scss';

export default function Test() {
  return (
    <div className="bg-blue-500 h-screen">
      <div className={styles.testbg}>
        <p>Test Placeholder</p>
      </div>
    </div>
  );
}
