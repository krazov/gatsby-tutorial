import React from 'react';
import { Link } from 'gatsby';

import Main from '../layouts/main';

export default () => (
    <Main title="Page not found">
        <p><Link to="/">Go home</Link></p>
    </Main>
);