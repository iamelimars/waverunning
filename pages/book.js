import React from "react";
import Head from "next/head";
import styled from "styled-components";

const book = () => {
  return (
    <>
      <Head>
        <title>Book An Appt</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://square.site/appointments/buyer/widget/mcw1nr2ban48z5/D77N6JXWHW3JY.js"></script>
      </Head>
      <Popup
        src="https://squareup.com/appointments/book/ouxfjo8dfqenei/8G9CPASP3E2Q4/services"
        frameBorder="0"
      ></Popup>
    </>
  );
};

export default book;

const Popup = styled.iframe`
  width: 100vw;
  height: 100vh;
`;
