import React, { useState } from "react";
import styled from "styled-components";
import { scrollTo, Icon, Anchor, Button, Div, Image } from "atomize";
import Menu from "./Menu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Wrapper>
        <Container>
          <Image
            w={{ xs: "150px", lg: "200px" }}
            src="/WaveRunning.svg"
            alt=""
          />
          <Links d={{ xs: "none", lg: "flex" }}>
            <a onClick={() => scrollTo("#test")}>About</a>
            <a onClick={() => scrollTo("#locations")}>Locations</a>
            <a onClick={() => scrollTo("#test")}>Packages</a>
            <a onClick={() => scrollTo("#test")}>Contact</a>
            <a onClick={() => scrollTo("#test")}>FAQ</a>
          </Links>
          <BookBtn
            d={{ xs: "none", lg: "flex" }}
            bg="secondary"
            shadow="2"
            hoverShadow="4"
          >
            Book Now
          </BookBtn>
          <Anchor
            onClick={() => setShowMenu(true)}
            d={{ xs: "flex", lg: "none" }}
          >
            <Icon name="Menu" size="25px" color="secondary" />
          </Anchor>
        </Container>
      </Wrapper>
      <Menu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Nav;

const Wrapper = styled.div`
  position: absolute;
  z-index: 101;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  padding: 1rem;
  @media (max-width: 991px) {
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

const Links = styled(Div)`
  margin: 0 3rem;
  display: flex;
  align-items: center;

  a {
    padding: 0 1rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    transition: transform 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const BookBtn = styled(Button)`
  background: ${({ theme }) => theme.secondary};
  border-radius: 14px;
  color: white;
  font-weight: bold;
  padding: 0 1.3rem;
`;
