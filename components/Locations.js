import React from "react";
import styled from "styled-components";

const locationsList = [
  {
    name: "John Prince Park",
    address: "2700 6th Ave S, Lake Worth, FL 33461",
  },
  {
    name: "Boynton Beach inlet Park",
    address: "6990 N Ocean Blvd, Boynton Beach, FL 33435",
  },
  {
    name: "Lake Ida West Park",
    address: "1455 Lake Ida Rd, Delray Beach, FL 33444",
  },
  {
    name: "Harvey E. Oyer Jr. Park",
    address: "2010 N Federal Hwy, Boynton Beach, FL 33435 ",
  },
  {
    name: "Bryant Park",
    address:
      "Lake Avenue and Golfview on the Intracoastal Waterway Lake Worth Beach, FL 33460",
  },
  {
    name: "Peanut Island",
    address: "Intracoastal waterway, near the Lake Worth Inlet, Riviera Beach",
  },
  {
    name: "Knowles Park",
    address: "1001 S Federal Hwy, Delray Beach, FL 33483",
  },
  {
    name: "Silver Palm Park",
    address: "600 E Palmetto Park Rd, Boca Raton, FL 33432",
  },
];

const Locations = () => {
  return (
    <Container id="locations">
      <h1>LOCATIONS</h1>
      <Wrapper>
        {locationsList &&
          locationsList.map((location) => (
            <Location key={location.address}>
              <h2>{location.name}</h2>
              <h3>{location.address}</h3>
            </Location>
          ))}
      </Wrapper>
    </Container>
  );
};

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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Location = styled.div`
  padding: 1.5rem 8px;
  width: 48%;
  @media (max-width: 768px) {
    width: 95%;
  }

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.secondary};
    font-weight: 900;
    font-size: 18px;
  }
  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    color: rgba(30, 34, 70, 0.38);
    padding: 8px;
  }
`;

export default Locations;
