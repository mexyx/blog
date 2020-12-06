import React from 'react';
import { Link } from 'umi';

import styles from './style.less';

const PostPreview = () => {
  return (
    <div className={styles.postPreview}>
      <Link to="/">
        <div className={styles.title}>Android 操作系统架构开篇</div>
        <div className={styles.summary}>
          基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。基于Android
          6.0或更高版本的源码，专注于分享Android系统原理、架构分析的原创文章，这是Android系列文章的开篇。
        </div>
      </Link>
      <div className={styles.meta}>发布于 2020/12/03</div>
    </div>
  );
};

const PostList = () => {
  return (
    <div className={styles.postList}>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <Link to="/" className={styles.nextLink}>
        NEXT →
      </Link>
    </div>
  );
};

export default PostList;
