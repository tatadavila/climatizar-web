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
              <span>
                <h1>
                  Ventas y Servicio
                  <br />
                  Técnico
                </h1>
                <br />
                <a href="Tel:+573106308024">
                  <p class="call-button">+573106308024</p>
                </a>
              </span>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 137px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 117px;
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
  grid-gap: 117px;
  ${'' /* background-color: yellow; */}

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 37px;

    > ${Art} {
      order: 2;
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
    text-align: center;
  }

  > span {
    border-radius: 20px;
    background-color: #2cf2ed;
    padding: 7px;
    text-align: center;

    > a {
      text-align: center;
    }
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
