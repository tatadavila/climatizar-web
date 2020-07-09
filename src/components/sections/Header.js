import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1277) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h3>
                Ingeniería aplicada a
                <br />
                la climatización.
              </h3>
              <h1>
                Ventas y Servicio
                <br />
                Tecnico
                <br />
                Tel: 310-6308024
              </h1>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 107px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 97px;
  ${'' /* background-color: yellow; */}

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
      ali
    }
  }
`;

const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > h3 {
    font-style: italic;
  }

  > h1 {
    border-radius: 20px;
    background-color: #2cf2ed;
    padding: 7px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    height: 120%;
    padding: 10px;
  }
`;

// const StyledExternalLink = styled(ExternalLink)`
//   color: inherit;
//   text-decoration: none;

//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
// `;

export default Header;
