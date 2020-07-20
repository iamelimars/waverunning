import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Packages from "../components/Packages/Packages";
import { Button, Modal, Icon } from "atomize";
import { useSiteContext } from "../context/context";
import Policy from "../components/Policy";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Popup = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;

  body::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }
`;

const Embed = styled.div`
  min-width: 320px;
  height: 630px;
`;

const AlignCenterModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      align="center"
      rounded="md"
      h={{ xs: "90vh", md: "90vh" }}
      maxW={{ xs: "90vw", md: "90vw" }}
      // m="0"
      bg="#fff"
      p={{
        x: { xs: "1rem", md: "0.2rem" },
        t: { xs: "3rem", md: "1rem" },
        b: "5px",
      }}
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="25px"
        color="primary"
        onClick={onClose}
        cursor="pointer"
      />
      <Popup
        // src="https://squareup.com/appointments/book/ouxfjo8dfqenei/8G9CPASP3E2Q4/services"
        src="https://squareup.com/appointments/book/mcw1nr2ban48z5/D77N6JXWHW3JY/services"
        // src="https://calendly.com/emarshall3235?background_color=fff&text_color=1e2246&primary_color=f8bf30"
        frameBorder="0"
      ></Popup>
    </Modal>
  );
};

const FaqModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="0"
      maxW="100vw"
      m="0"
      h="100vh"
      bg="secondary"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="30px"
        onClick={onClose}
        cursor="pointer"
        color="primary"
      />
      <Faq />
    </Modal>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    isBookingOpen,
    setIsBookingOpen,
    isFaqOpen,
    setIsFaqOpen,
  } = useSiteContext();

  return (
    <>
      <Head>
        <title>WaveRunning Jetski Rentals - South Florida</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Hero />
      <Locations />
      <Packages />
      <Policy />
      <About />
      <Contact />
      <Footer />
      <AlignCenterModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  );
};

export default Home;
