import React from "react";
import styled from "styled-components";
import Card from "./Card";

const packages = [
  {
    time: "1",
    type: "HOUR",
    price: "75",
    timeframe: "",
    promotion: "",
  },
  {
    time: "2",
    type: "HOUR",
    price: "120",
    timeframe: "",
    promotion: "",
  },
  {
    time: "3",
    type: "HOUR",
    price: "160",
    timeframe: "",
    promotion: "$10 OFF CODE: 3HRSPLASH",
  },
  {
    time: "FULL",
    type: "DAY",
    price: "350",
    timeframe: "6 HOURS",
    promotion: "",
  },
];

const Packages = () => {
  return (
    <Container>
      <Wrapper>
        <h1>PACKAGES</h1>
        <Row>
          {packages &&
            packages.map((item) => <Card key={item.price} item={item} />)}
        </Row>
        <Disclaimer>
          <p>
            <span>REQUIRED</span> damage deposit is <span>$200.00</span> for
            each jet ski rented.
          </p>
          <p>
            All deposits are to be paid upfront and will be{" "}
            <span>refunded</span> when skis are returned undamaged & on time!
          </p>
          <p>
            <span>3</span> DAY <span>CANCELLATION</span> FEE
            <br />
            <span>$25</span> when canceled <span>2</span> days before scheduled
            date
            <br />
            <span>$50</span> when canceled <span>1</span> day before scheduled
            date
            <br />
            <span>FULL PRICE</span> when canceled on the <span>day</span> of
            scheduled appt
          </p>
        </Disclaimer>
        <script src="https://square.site/appointments/buyer/widget/mltr6gvje939ke/8G9CPASP3E2Q4.js"></script>
      </Wrapper>
    </Container>
  );
};

const Disclaimer = styled.div`
  margin: 2rem 0;
  p {
    color: white;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    margin-top: 1rem;
  }

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
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

const Container = styled.div`
  background: ${({ theme }) => theme.primary};
`;

export default Packages;
