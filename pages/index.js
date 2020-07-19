import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Packages from "../components/Packages/Packages";
import { Div, Button, Modal, Icon, Text } from "atomize";

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
      bg="#FBFCFD"
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
        // src="https://squareup.com/appointments/book/mcw1nr2ban48z5/D77N6JXWHW3JY/services"
        // src="https://my.setmore.com/bookingpage/948be9b6-e463-4847-af15-75395f636ca0"
        src="https://calendly.com/emarshall3235?background_color=fff&text_color=1e2246&primary_color=f8bf30"
        frameBorder="0"
      ></Popup>
    </Modal>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Head>
        <title>WaveRunning Rentals</title>
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
      <AlignCenterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Home;
