import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  max-width: 1230px;
  @media (min-width: 900px) {
    flex-direction: row;
    margin-top: 3em;
  }
  img {
    width: 175px;
    @media (min-width: 900px) {
      width: 300px;
      margin-right: 30px;
    }
  }
  .description-box {
    max-width: 500px;
  }
`;

const SpecialText = styled.span`
  color: ${(props) => props.theme.blue};
  line-height: normal;
  &.big-boi {
    font-family: ${(props) => props.theme.fontHeading};
    font-size: 3rem;
    font-weight: bold;
  }
`;

class AboutMe extends React.Component {
  render() {
    return (
      <AboutMeContainer>
        <img
          src="/my-face.png"
          alt="A picture of Nikki when he was looking particularly handsome."
        />
        <div className="description-box">
          <p>
            <SpecialText className="big-boi">Hi! </SpecialText>I’m Nikki, a
            front-end developer from Texas. I’m a self-taught coder with a
            background in the service-industry, so I pride myself on my work
            ethic and communication skills. I love getting to work and
            collaborate on cool new projects, so I’m open to freelance and
            contract work.
          </p>
          <p>
            In my free time (when I’m not working on exciting new coding
            projects, of course) I love to read fantasy novels, play Magic: The
            Gathering, lift weights, play tennis, and make cheese boards.
          </p>
          <p>
            Interested in contacting me? Email me or use any of the links in the
            header to reach me in a way that makes your heart soar.
          </p>
        </div>
      </AboutMeContainer>
    );
  }
}

export default AboutMe;
