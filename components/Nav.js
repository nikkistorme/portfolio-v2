import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const TopNav = styled.nav`
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  * {
    color: ${props => props.theme.white};
  }
  ul {
    display: flex;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    li {
      margin: 5px;
      &.active {
        border-bottom: 2px solid;
      }
    }
  }
`;

const isCurrentPage = (pathname, link_name) => pathname === link_name ? true : false
// {
//   if (pathname === link_name) {
//     true
//   } else {
//     false
//   }
// }

function Nav() {
  const router = useRouter();
  return (
    <TopNav>
      <ul>
        <li className={isCurrentPage(router.pathname, "/") ? "active" : null}><Link href="/"><a>Projects</a></Link></li>
        <li className={isCurrentPage(router.pathname, "/about") ? "active" : null}><Link href="/about"><a>About</a></Link></li>
        {/* <li><Link href="/blog"><a>Blog</a></Link></li> */}
        {/* <li><Link href="/contact"><a>Contact</a></Link></li> */}
      </ul>
    </TopNav>
  )
}

export default Nav;