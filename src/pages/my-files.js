import React from "react";
import { graphql } from "gatsby";

import Main from '../layouts/main';

export default ({
    data,
    data: {
        allFile: {
            edges: files
        },
    },
}) => (
        <Main title="My files">
            <p>My files:</p>
            <ul>
                {files.map(
                    ({ node: { id, relativePath: name, birthTime: date } }) => <li key={id}>{name}, {date}</li>
                )}
            </ul>
        </Main>
    );

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;