import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};
