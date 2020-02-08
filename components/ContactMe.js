import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 0 1em;
  font-family: ${props => props.theme.fontHeading};
  font-size: 2rem;
`;

const ContactBlurb = styled.p`
`;

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  img {
    width: 32px;
    margin: 0 15px 0 0;
    &.angel-list { width: 25px; }
  }
  p {
    margin: 15px 0;
  }
`;

const ContactMe = () => (
  <ContactContainer>
    <ContactBlurb>I'm available to reach at any of the following places:</ContactBlurb>
    <ContactLinkContainer>
      <ContactRow>
        <a href="mailto:nikkistorme@gmail.com" target="_blank"><img src="/mail-icon.png" alt="Mail Icon" /></a>
        <p>Email</p>
      </ContactRow>
      <ContactRow>
        <a href="https://github.com/Nikkistorme" target="_blank"><img src="/GitHub-Mark-32px.png" alt="GitHub Icon" /></a>
        <p>GitHub</p>
      </ContactRow>
      <ContactRow>
        <a href="https://www.linkedin.com/in/nicholas-bright-2458b2161/" target="_blank"><img src="/LI-In-Bug.png" alt="LinkedIn Icon" /></a>
        <p>LinkedIn</p>
      </ContactRow>
      <ContactRow>
        <a href="https://angel.co/nicholas-bright-3/" target="_blank"><img className="angel-list" src="/AngelList_Black_Victory_Hand.png" alt="AngelList Icon" /></a>
        <p>AngelList</p>
      </ContactRow>
    </ContactLinkContainer>
  </ContactContainer>
)

export default ContactMe;