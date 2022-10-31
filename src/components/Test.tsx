import * as React from 'react';

import styles from './Test.module.scss';

export function Test() {
  return (
    <div className="bg-blue-800 text-white py-10">
      <p>Test Placeholder</p>
      <div className={styles.testMod}>test</div>
      <div className={styles.main}>g4</div>
    </div>
  );
}
