import React, { useState } from "react";

import { staticQueryTitle } from "../selectors/selectors";
import Main from '../layouts/main';

export default (props) => {
    const [count, setCount] = useState(0);
    const clickHandler = () => setCount(count + 1);

    return (
        <Main title={staticQueryTitle(props)}>
            <div>Hello Gatsby {count} time{count === 1 ? '' : 's'}</div>
            <div>
                <button onClick={clickHandler}>Greet me more</button>
            </div>
        </Main>
    );
};