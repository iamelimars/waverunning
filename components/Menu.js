import React from "react";
import { SideDrawer, Icon, scrollTo, Button } from "atomize";
import styled from "styled-components";
import { useSiteContext } from "../context/context";

const Menu = ({ isOpen, onClose }) => {
  const { setIsBookingOpen, setIsFaqOpen } = useSiteContext();

  const onPress = (location) => {
    scrollTo(location);
    onClose();
  };
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w="100vw" bg="secondary">
      <Close onClick={onClose}>
        <Icon name="Cross" color="primary" size="35px" />
      </Close>
      <Links>
        <a onClick={() => onPress("#about")}>ABOUT</a>
        <a onClick={() => onPress("#locations")}>LOCATIONS</a>
        <a onClick={() => onPress("#packages")}>PACKAGES</a>
        <a onClick={() => onPress("#contact")}>CONTACT</a>
        <a
          onClick={() => {
            onClose();
            setIsFaqOpen(true);
          }}
        >
          FAQ
        </a>
        <BookBtn
          bg="primary"
          textWeight="900"
          fontFamily="Montserrat"
          w="250px"
          h="50px"
          textSize="1.5rem"
          onClick={() => {
            onClose();
            setIsBookingOpen(true);
          }}
        >
          BOOK NOW
        </BookBtn>
      </Links>
    </SideDrawer>
  );
};

export default Menu;

const Close = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const BookBtn = styled(Button)`
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 2rem;
  margin-top: 2rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: "Montserrat";
  a {
    font-weight: 900;
    font-size: 2rem;
    text-decoration: uppercase;
    padding: 1.5rem 0;
    color: ${({ theme }) => theme.primary};
  }
`;
