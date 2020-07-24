import React from "react";
import styled from "styled-components";

const questions = [
  {
    question: "Do you allow walk ins or do I need to make a reservation?",
    answer:
      "Yes we do allow walk-ins (upon availability) but we prefer that you make a reservation prior to renting. Reservations are available online.",
  },
  {
    question: "How much does it cost? What payment methods do you accept?",
    answer:
      "Please visit the package page of our website for costs. We only accept card payments",
  },
  {
    question:
      "Do you provide the proper life jackets in the rental or do I need to bring my own?",
    answer:
      "WaveRunning Rentals provides each costumer with proper lifejackets that will fit and abide by the safety rules of Florida.",
  },
  {
    question: "I’ve never been on a jet ski before, is it dangerous?",
    answer:
      "Jet skis are just like cars, bikes, motorcycles, etc. except they DON'T have brakes! You must know how to obey all boating rules and regulations from the test provided during the paperwork. Our trained staff provides a full orientation on how to operate and where to operate your jet ski for your safe riding pleasure before heading out to our riding area.",
  },
  {
    question:
      "How old do I need to be in order to rent, ride and drive a Jet Ski at your locations? Do I need a valid boaters license?",
    answer:
      "In order to rent a Jet Ski, you must be 18 years of age with a valid government issued ID, have a major credit card and or $200 cash for a refundable security deposit on each ski. You can be 16 years of age to drive a jet ski alone, but must have a valid government issued ID, along with parent/guardian consent (parent or guardian will be responsible for any and all damages that are done to the jet ski and or any other personal property jet ski makes contact with). A Boaters License is recommended but not required. We are authorized by the Department of Natural resources Police to provide a temporary license for renters who do not have a boaters license. We provide all the necessary literature and resources to pass a quiz for the temporary license. Children riding on the ski must be at least 6 to 7 years old. Children able to ride must sit behind the driver (not in front) and be able to hold on.",
  },
  {
    question:
      "What if I don’t show up for my rental? Do you hold any deposits?",
    answer:
      "When you make your reservation online, you will pay in full. You cannot change or cancel your reservation within the 24 hours prior to your reservation. The rental spot(s) reserved are designated for you, if you are a “no-show” or arrive late, your temporary hold will not be released and used to pay for your designated rental slot. There are no rescheduling or refunds.",
  },
  {
    question: "Will I need to pay for the gas in the jet ski?",
    answer: "Nope! Your rental comes gassed up and ready to go!",
  },
  {
    question: "Will the weather affect my Jet Ski Rental?",
    answer:
      "We are open rain or shine! However, if in the event of heavy rain, wind warnings, or thunderstorms, it will be at the customers discretion and obligation to reschedule your trip for a different time or day. Trips returned due to inclement weather and under 45 minutes will be rescheduled for a later date. Trips returned due to inclement weather that extend past 45 minutes, will be counted as a full trip and no rescheduling or refunds will be allowed. ",
  },
  {
    question: "Do you offer insurance for your jet skis",
    answer:
      "Due to the nature of the industry, rental insurance does not exist. It is the responsibility of the renter to maintain proper safety while operating the jet ski. ",
  },
  {
    question: "What Do consider a full day rental",
    answer: "Six hours is considered a full day rental.",
  },
  {
    question: "Am I responsible for damaged equipment or accessories ",
    answer:
      "All jet skis are inspected before and after rentals. If there is a problem with the jet ski we will determine the cause and make a determination of who is responsible for the damages. As part of the rental agreement the renter is responsible for the jet ski and equipment while in their possession and any damages that occur during time of rental. For any questions please ask beforehand.",
  },
];

const Faq = () => {
  return (
    <Container id="faq">
      <h1>FAQ</h1>
      <Questions>
        {questions &&
          questions.map((item) => (
            <Question key={item.question}>
              <h3>
                <span>Q:</span>
                {item.question}
              </h3>
              <h4>
                <span>A:</span>
                {item.answer}
              </h4>
            </Question>
          ))}
      </Questions>
    </Container>
  );
};

const Question = styled.div`
  margin-top: 3rem;
  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  h4 {
    /* color: white */
  }
  span {
    color: white;
    font-size: 1.2rem;
  }
`;

const Questions = styled.div`
  height: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  overflow: auto;
  height: 95%;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  #faq::-webkit-scrollbar {
    display: none;
  }
  h1 {
    color: ${({ theme }) => theme.primary};
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    margin: 2rem 0;
  }
`;
export default Faq;
