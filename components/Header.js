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

const NameLine = styled.span`
  height: 86px;
  display: block;
  position: absolute;
  left: -10px;
  border-left: solid 2.5px ${props => props.theme.white};
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .title {
    margin-top: 10px;
    font-size: 1.6rem;
  }
  .description {
    font-size: 1.6rem;
    display: none;
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
    border-top: solid 2.5px ${props => props.theme.white};
    padding-top: 10px;
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
        <h1 className="title-name">
          <NameLine/>
          <Link href="/"><a>Nikki Bright</a></Link>
        </h1>
        <HeaderContent>
          <HeaderTitleContainer>
            <h4 className="title">Front-end Developer</h4>
            <h4 className="description">Custom, functional sites for individuals and businesses</h4>
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