import React from 'react';
import { Link, graphql } from "gatsby";

import Main from '../layouts/main';
import { markdownArticles, articleFromList } from '../selectors/selectors';

import articleItemStyles from './article-item.css';

const styledArticleItem = ({ title, slug, date }) => (
    <li key={`article-${slug}`}>
        <Link to={slug} className={articleItemStyles.link}>{title}, <em>{date}</em></Link>
    </li>
);

export default (props) => {
    const { articles } = markdownArticles(props);
    console.log({ articles });

    return (
        <Main title="Read more">
            <p>Here are the articles:</p>

            <ul>{
                articles
                    .map(articleFromList)
                    .map(styledArticleItem)
            }</ul>
        </Main>
    );
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;