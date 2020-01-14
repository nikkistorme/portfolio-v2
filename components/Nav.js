import Link from 'next/link';
import styled from 'styled-components';

const TopNav = styled.nav`
  background: ${props => props.theme.blue};
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    li {
      margin: 5px;
    }
  }
`;

const Nav = () => (
  <TopNav>
    <ul>
      <li><Link href="/"><a>Nikki Bright</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/projects"><a>Projects</a></Link></li>
      <li><Link href="/blog"><a>Blog</a></Link></li>
      <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
  </TopNav>
)

export default Nav;