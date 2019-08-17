import React from 'react';
import { Link } from 'gatsby';

import styles from './navigation.css';

const styledLink = ([url, name], index) => (
    <Link key={`nav-${index}`} className={styles.navLink} to={url}>{
        name
    }</Link>
);

export default () => (
    <nav className={styles.nav}>
        {[
            ['/', 'Home'],
            ['/articles', 'Articles'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
            ['/my-files', 'My files'],
            ['/nothing', 'Nothing'],
        ].map(styledLink)}
    </nav>
);