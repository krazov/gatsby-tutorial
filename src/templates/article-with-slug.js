import React from 'react';
import { graphql } from "gatsby";

import { articleWithSlug } from '../selectors/selectors';
import Main from '../layouts/main';
import styles from './article-with-slug.css';

export default (props) => {
    const { title, html } = articleWithSlug(props);

    return (
        <Main title="Read more every day">
            <article>
                <header className={styles.title}>
                    <h2>{title}</h2>
                </header>

                <section
                    className={styles.articleBody}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </article>
        </Main>
    )
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`;