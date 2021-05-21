/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const ulStyle = { marginLeft: '1rem' }

  return (
    <div className="bio">
      {author?.name && (
        <div>
          <strong>blog by {author.name}</strong>
          <p>{author?.summary || null}</p>
          <p style={{ marginTop: '1rem' }}>
            say hi:
            <ul style={ulStyle}>
              <a href={`mailto:${social?.email || ``}`}>
                email  
              </a>
            </ul>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
