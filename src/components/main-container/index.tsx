import React from 'react';

import styles from './style.less';

const MainContainer: React.FC = props => {
  return <div className={styles.mainContainer}>{props.children}</div>;
};

export default MainContainer;
