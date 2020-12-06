import React from 'react';
import { Link } from 'umi';

import styles from './style.less';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">首页</Link>
      <Link to="/">目录</Link>
    </div>
  );
};

interface PageHeaderInterface {
  title: string;
  signature: string;
}

const PageHeader: React.FC<PageHeaderInterface> = props => {
  return (
    <div className={styles.pageHeader}>
      <div data-flex="main:justify cross:center" className={styles.top}>
        <Link to="/" className={styles.logo}>
          XYX
        </Link>
        <Navbar />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>{props.title}</div>
        <div className={styles.signature}>{props.signature}</div>
      </div>
    </div>
  );
};

export default PageHeader;
