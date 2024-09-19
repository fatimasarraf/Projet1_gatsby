/*

// src/pages/authors.js
import React from "react"
import { graphql } from "gatsby"

const AuthorsPage = ({ data }) => {
  const authors = data.allMarkdownRemark.nodes

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map(author => (
          <li key={author.id}>{author.frontmatter.name}</li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/authors/" } }) {
      nodes {
        id
        frontmatter {
          name
          bio
        }
      }
    }
  }
`

export default AuthorsPage
*/

# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3


