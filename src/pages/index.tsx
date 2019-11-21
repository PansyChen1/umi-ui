import React from 'react';
import styles from './index.css';
import Redirect from 'umi/redirect';

export default function() {
  return (
    <Redirect to={{
        pathname: '/pageFrame',
        state: {}
    }} />
  );
}
