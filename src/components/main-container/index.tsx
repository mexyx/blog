import React from 'react';

import styles from './style.less';

interface MainContainerInterface {
  main: React.ReactNode;
  aside: React.ReactNode;
}

const MainContainer: React.FC<MainContainerInterface> = props => {
  return (
    <div data-flex="main:justify" className={styles.mainContainer}>
      <div className={styles.main}>{props.main}</div>
      <div className={styles.aside}>{props.aside}</div>
    </div>
  );
};

export default MainContainer;
