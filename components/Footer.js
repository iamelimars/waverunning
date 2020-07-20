import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h3>
        Copyright © 2020 Wave Running Jet Ski Rentals - All Rights Reserved.
      </h3>
      <h4>
        Built by{" "}
        <a href="https://www.instagram.com/iamelimarss/?hl=en" target="_blank">
          EliCodes
        </a>
      </h4>
    </Container>
  );
};

const Container = styled.div`
  h3 {
    text-align: center;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    font-size: 0.6rem;
  }
  h4 {
    text-align: center;
    font-size: 0.6rem;
    font-weight: 900;

    a {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export default Footer;
