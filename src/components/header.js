import React from 'react';

import styles from './header.css';

export default ({ content }) => (
    <header className={styles.mainHeader}>
        <h1 className={styles.mainHeaderH1}>{content}</h1>
    </header>
);