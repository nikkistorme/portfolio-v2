import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderTotal = styled.header`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.blue};
  padding: 0 2em;
  height: 300px;
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderTitleContainer = styled.div`
  margin-top: 30px;
  h3 {
    text-align: center;
    margin-top: 10px;
  }
`;

const HeaderPageTitle = styled.h1`
  text-align: right;
  margin: 5px 0;
`;

const Header = () => (
  <HeaderTotal>
    <Nav />
    <HeaderContent>
      <HeaderTitleContainer>
        <h1><Link href="/"><a>Nikki Bright</a></Link></h1>
        <h3>Front-end Developer</h3>
      </HeaderTitleContainer>
      <HeaderPageTitle>| Projects</HeaderPageTitle>
    </HeaderContent>
  </HeaderTotal>
)

export default Header;