import React from "react";
import { useStaticQuery } from "gatsby"

import Navigation from '../components/navigation';
import Header from '../components/header';

import './main.css';

export default ({
    title,
    children
}) => {
    const {
        site: {
            siteMetadata: {
                title: defaultTitle,
            } = {},
        } = {},
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Navigation />
            {title ? <Header content={title} /> : <Header content={defaultTitle} />}
            <main>{children}</main>
        </>
    );
}