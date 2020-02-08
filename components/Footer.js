import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.blue};
  font-family: ${props => props.theme.fontHeading};
  color: ${props => props.theme.white};
  padding: 10px;
  p {
    margin: 0;
  }
`;

const FooterNav = styled.ul`
  display: flex;
  li { margin: 0 5px; }
`;

const Footer = () => (
  <FooterContainer>
    <p>Nikki Bright, Web Developer</p>
    <FooterNav>
      <li><Link href="/"><a>Projects</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      {/* <li><Link href="/blog"><a>Blog</a></Link></li> */}
      <li><Link href="/contact"><a>Contact</a></Link></li>
    </FooterNav>
    <p>Copyright &copy; 2020</p>
  </FooterContainer>
)

export default Footer;