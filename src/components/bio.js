/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import SocialLogo from 'social-logos';

function Bio() {
  function clickSocialLink(url) {
    window.open(url, "_blank");
  }

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong>, living in a happy life w/ a lovely wife. <br/>
              <span style={{ cursor: 'pointer' }}>
                <SocialLogo icon="twitter" size={32} onClick={() => clickSocialLink(`https://twitter.com/${social.twitter}`)} />
              </span>
              <span style={{ cursor: 'pointer' }}>
                <SocialLogo icon="github" size={32} onClick={() => clickSocialLink(`https://github.com/${social.github}`)} />
              </span>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          github
        }
      }
    }
  }
`

export default Bio
