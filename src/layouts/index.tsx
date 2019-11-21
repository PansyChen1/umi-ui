import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  console.log("props: ", props);
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
