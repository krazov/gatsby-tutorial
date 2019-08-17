export const staticQueryTitle = ({
    data: {
        site: {
            siteMetadata: {
                title,
            } = {},
        } = {},
    } = {},
}) => title;

export const markdownArticles = ({
    data: {
        allMarkdownRemark: {
            totalCount,
            edges: articles,
        } = {},
    } = {},
}) => ({ totalCount, articles });

export const articleFromList = ({
    node: {
        frontmatter: {
            title,
            date,
        } = {},
        fields: {
            slug
        } = {}
    } = {},
} = {}) => ({ title, slug, date });

export const articleWithSlug = ({
    data: {
        markdownRemark: {
            frontmatter: {
                title,
                date,
            } = {},
            html,
        } = {},
    } = {},
} = {}) => ({ title, date, html });

