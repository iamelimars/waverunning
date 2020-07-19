import React from "react";
import styled from "styled-components";

const Card = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Title className={item.timeframe ? "full" : "normal"}>
          {item.time} <span>{item.type}</span>
        </Title>
        <h3>RENTAL</h3>
        {item.timeframe && <h4 className="timeframe">{item.timeframe}</h4>}
        <Price>
          <span>$</span>
          {item.price}
        </Price>
        <h4>per jetski</h4>
        <button>BOOK NOW</button>
      </Wrapper>
      {item.promotion && <h4 className="promotion">{item.promotion}</h4>}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 200px;
  margin: 2rem 1rem;
  .promotion {
    margin-top: 2rem;
    color: #fff;
  }
`;

const Title = styled.h1`
  span {
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
  }
`;

const Price = styled.h2`
  font-weight: 900;
  font-size: 60px;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  margin-top: 2rem;
  span {
    font-size: 30px;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1e2246;
  border: 4px solid ${({ theme }) => theme.secondary};
  box-shadow: 0px 19px 13px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 1rem;
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  .full,
  .normal {
    font-size: 2rem;
    margin-bottom: 6px;
  }

  .full {
    font-size: 1.8rem;
  }

  h3 {
    font-weight: 900;
    text-align: center;
    /* margin-bottom: 1rem; */
  }

  h4 {
    text-align: center;
    font-weight: 400;
    font-size: 0.7rem;
  }

  button {
    padding: 0.7rem;
    background: #fff;
    margin: 1rem 0;
    border-radius: 2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.secondary};
    font-family: Montserrat;
    font-size: 1rem;
  }
`;
