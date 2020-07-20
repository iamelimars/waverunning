import React from "react";
import styled from "styled-components";

const Policy = () => {
  return (
    <Container>
      <h1>
        POLICY <span>&</span> REQUIREMENTS
      </h1>
      <Text>
        <h2>
          Florida law states that anyone born on or after Jan 1, 1988, must have
          a boating license to operate a jet ski.
        </h2>
        <ul>
          <li>
            PWC (waverunner/jet ski) renters (operators or passengers) under the
            age of 18, must have a parent or legal guardian sign a waiver of
            permission and liability in order to rent.
          </li>
          <li>
            In order to operate a boat or jetski without a boating license, you
            must have a date of birth before January 1, 1988. If you are under
            the legal age and do not already have a boating license, we can
            administer a test. Upon passing the test, you will receive a
            temporary boating license (valid for one year).
          </li>
          <li>
            IMPORTANT: Regardless of whether you need a boating license or not,
            anyone operating a boat or jet ski rental must have a valid
            government issued photo ID with them on the vessel.
          </li>
          <li>
            The scheduled time is the time of departure. You must arrive 15
            minutes ahead to fill out forms, safety briefing and have life
            jackets fitted.{" "}
          </li>
        </ul>
      </Text>

      <Disclaimer>
        <h3>
          BOATING SAFETY COURSE <span>MUST</span> BE COMPLETED PRIOR TO ARRIVAL
          WITH <span>PROOF</span> OF COMPLETION. GET IT DONE FOR{" "}
          <span>FREE</span> WHEN YOU USE THE LINK BELOW!
        </h3>
        <h3>
          GET THE PWC CHECKLIST <span>COMPLETED, PRINTED & SIGNED</span> PRIOR
          TO ARRIVAL. IF NOT WE CAN DO IT WHEN YOU ARRIVE! BUT IT WILL TAKE
          LONGER TO GET STARTED WITH THE <span>FUN</span>!
        </h3>
      </Disclaimer>

      <Buttons>
        <ButtonRow>
          <p>*REQUIRED</p>
          <a href="http://www.boatus.org/free/" target="_blank">
            <button className="course">BOATING & SAFETY COURSE</button>
          </a>
        </ButtonRow>
        <ButtonRow>
          <p>*REQUIRED</p>
          <a
            href="https://img1.wsimg.com/blobby/go/3bd2fb7f-5b5d-4232-b459-7ab9dab773ea/downloads/1c9g4vb4l_490501.pdf?ver=1561678920085"
            target="_blank"
          >
            <button className="checklist">PWC CHECKLIST</button>
          </a>
        </ButtonRow>
      </Buttons>
    </Container>
  );
};

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ButtonRow = styled.div`
  margin-bottom: 2rem;
  p {
    font-size: 0.6rem;
    font-weight: 900;
  }
  button {
    cursor: pointer;
    width: 300px;
    height: 50px;
    border-radius: 15px;
    font-weight: 900;
    font-size: 12px;
    color: white;

    transition: all 0.2s ease-in;

    &:hover {
      box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
        0 6px 6px -1px rgba(8, 11, 14, 0.1);
      transform: translateY(-3px);
    }
  }

  .course {
    background: ${({ theme }) => theme.primary};
  }

  .checklist {
    background: ${({ theme }) => theme.secondary};
  }
`;

const Disclaimer = styled.div`
  margin-top: 4rem;
  h3 {
    color: ${({ theme }) => theme.primary};
    text-align: center;
    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme.secondary};
    font-size: 1rem;
  }
`;

const Text = styled.div`
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  ul {
    margin-top: 2rem;

    li {
      margin-top: 1rem;
    }
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  @media (max-width: 768px) {
    h1 {
      font-size: 20px;
    }
  }

  h1 {
    color: ${({ theme }) => theme.secondary};
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    margin: 2rem 0;

    span {
      color: ${({ theme }) => theme.blueText};
    }
  }
`;

export default Policy;
