import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderTotal = styled.header`
  background: ${props => props.theme.blue};
  padding: 0 2em;
  height: 33vh;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
  .inner-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
  }
  .title-name {
    position: absolute;
    margin-top: 10px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  .mobile-h3 {
    text-align: center;
    margin-top: 10px;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  .bigger-h3 {
    display: none;
    text-align: center;
    margin: 20px auto;
    max-width: 500px;
    @media (min-width: 768px) {
      display: inline-block;
    }
  }
`;

const HeaderPageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .icons {
    img {
      width: 30px;
      margin-right: 10px;
      &.angel-list {
        width: 21px;
      }
    }
  }
  h1 {
    text-align: right;
    margin: 5px 0;

  }
`;

const makePageTitle = (pathname) => {
  if (pathname === '/') {
    return('Projects');
  } else if (pathname === '/about') {
    return('About');
  } else if (pathname === '/contact') {
    return('Contact');
  } else if (pathname === '/blog') {
    return('Blog');
  }
}

function Header() {
  const router = useRouter();
  return (
    <HeaderTotal>
      <div className="inner-box">
        <Nav />
        <h1 className="title-name"><Link href="/"><a>Nikki Bright</a></Link></h1>
        <HeaderContent>
          <HeaderTitleContainer>
            <h3 className="mobile-h3">Front-end Developer</h3>
            <h3 className="bigger-h3">Creates custom, functional sites for individuals and businesses.</h3>
          </HeaderTitleContainer>
          <HeaderPageTitle>
            <div className="icons">
              <a href="mailto:nikkistorme@gmail.com" target="_blank"><img src="/mail-icon.png" alt="Mail Icon" /></a>
              <a href="https://angel.co/nicholas-bright-3/" target="_blank"><img className="angel-list" src="/AngelList_Black_Victory_Hand.png" alt="AngelList Icon" /></a>
              <a href="https://www.linkedin.com/in/nicholas-bright-2458b2161/" target="_blank"><img src="/linkedin-black.png" alt="LinkedIn Icon" /></a>
              <a href="https://github.com/Nikkistorme" target="_blank"><img src="/GitHub-Mark-32px.png" alt="GitHub Icon" /></a>
            </div>
            <h1>| {makePageTitle(router.pathname)}</h1>
          </HeaderPageTitle>
        </HeaderContent>
      </div>
    </HeaderTotal>
  )
}

export default Header;