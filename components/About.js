import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <h1>ABOUT</h1>
        <Text>
          <p>
            We can deliver our jet-skis to any of the <span>7</span> locations
            listed about. Just schedule a time & place!
          </p>
          <p>
            <span>Life vests, safety equipment</span>, and first full tank of{" "}
            <span>gas</span> always included! (Any additional fuel to be paid by
            renter!)
          </p>
          <p>
            We have two <span>2012 Kawasaki Jet Ski Ultra 300LX’s</span> that
            comfortably seat 2 people. <br /> See the <span>specs</span> below
          </p>
        </Text>
        <Specs>
          <SpecRow>
            <h4>Engine</h4>
            <p>
              Supercharged and intercooled, four-stroke, DOHC, four valves per
              cylinder, inline four-cylinder
            </p>
          </SpecRow>
          <SpecRow>
            <h4>Displacement</h4>
            <p>1,498 cc</p>
          </SpecRow>
          <SpecRow>
            <h4>Maximum horsepower</h4>
            <p>
              300hp* * Horsepower measured in PS at the crankshaft under
              controlled conditions. Actual performance may vary.
            </p>
          </SpecRow>
          <SpecRow>
            <h4>Cooling system</h4>
            <p>Inducted water</p>
          </SpecRow>
          <SpecRow>
            <h4>Induction</h4>
            <p>
              Eaton Twin Vortices Series roots-type supercharger with
              air-to-water intercooler
            </p>
          </SpecRow>
          <SpecRow>
            <h4>Maximum boost</h4>
            <p>17.0 psi</p>
          </SpecRow>
          <SpecRow>
            <h4>Top Speed</h4>
            <p>65 mph</p>
          </SpecRow>
        </Specs>
      </Wrapper>
    </Container>
  );
};

const SpecRow = styled.div`
  display: flex;
  margin-bottom: 2rem;
  h4 {
    width: 50%;
    color: ${({ theme }) => theme.secondary};
  }
  p {
    width: 50%;
    color: white;
    font-weight: bold;
  }
`;

const Specs = styled.div`
  padding: 1rem;
`;

const Text = styled.div`
  p {
    color: white;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.primary};
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  h1 {
    color: white;
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    margin: 3rem 0;
  }
`;

export default About;
