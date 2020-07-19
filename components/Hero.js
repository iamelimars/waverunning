import React from "react";
import styled from "styled-components";
import { Button } from "atomize";

const Hero = () => {
  return (
    <>
      <Container bgImg="/bg.jpg" className="banner">
        <Overlay bgImg="/overlay.svg" />
        <Header>
          <h1>
            <span>#1</span> JET SKI
            <br />
            RENTAL <span>in</span>
            <br />
            SOUTH FLORIDA
          </h1>

          <h3>
            We are one of the top groups <br /> in Florida that offer <br /> Jet
            Ski rentals
          </h3>
          <Button
            h="2.5rem"
            w="10rem"
            bg="secondary"
            shadow="2"
            hoverShadow="4"
            rounded="circle"
            m={{ t: "1.5rem" }}
            textSize="body"
          >
            Rent a JetSki Now!
          </Button>
        </Header>
      </Container>
    </>
  );
};

export default Hero;

const Header = styled.div`
  max-width: 1000px;
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  h1 {
    z-index: 100;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 55px;
    line-height: 66px;
    @media (max-width: 1024px) {
      font-size: 50px;
    }
  }
  span {
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
  }
  h3 {
    z-index: 100;
    margin-top: 2rem;
  }
  button {
    z-index: 100;
  }
`;

const Container = styled.div`
  background: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center;
  /* width: 100vw; */
  height: 100vh;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(30, 34, 70, 0.79);
      opacity: 0.7;
      z-index: 1;
    }
  }
`;

const Overlay = styled.div`
  background: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
