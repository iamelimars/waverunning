import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <h1>CONTACT</h1>
      <Text>
        <h2>
          <span>EMAIL:</span> waverunningjetskirentals@yahoo.com{" "}
        </h2>
        <h2>
          <span>INSTAGRAM:</span> waverunningjetskirentals
        </h2>
      </Text>
    </Container>
  );
};

const Text = styled.div`
  padding: 2rem 0;
  h2 {
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.primary};
    font-weight: 900;
    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;

  h1 {
    color: ${({ theme }) => theme.blueText};
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    margin: 2rem 0;
  }
`;

export default Contact;
