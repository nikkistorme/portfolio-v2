import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 3em 1em 1em 1em;
  display: flex;
  h2 {
    color: ${props => props.theme.blue}
  }
`;

const CardContentContainer = styled.div`
  flex: 1.2;
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a { line-height: 0; }
  img {
    width: 20px;
    height: 20px;
  }
`;

const CardImage = styled.div`
  width: 340px;
  margin-left: 1em;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15);
  height: min-content;
  flex: 1;
  img {
    width: 100%;
    height: auto;
  }
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TechPill = styled.span`
  font-family: ${props => props.theme.fontHeading};
  color: ${props => props.theme.white};
  font-size: 1rem;
  padding: 3px 5px;
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  min-width: 45px;
  text-align: center;
  &.javascript {
    background-color: ${props => props.theme.red};
  }
  &.framework {
    background-color: ${props => props.theme.brown};
  }
  &.database {
    background-color: ${props => props.theme.orange};
  }
  &.style {
    background-color: ${props => props.theme.pink};
  }
`;

class ProjectCard extends React.Component {
  render() {
    return (
      <CardContainer>
        <CardContentContainer>
          <CardTitleContainer>
            <h2>{this.props.title}</h2>
            <a href={this.props.repo} target="_blank"><img src="/GitHub-Mark-32px.png" alt="GitHub Icon" /></a>
          </CardTitleContainer>
          <p>{this.props.info}</p>
          <PillContainer>
            {Object.keys(this.props.tech).map( (key) =>
              <TechPill
                key={key}
                className={this.props.tech[key].tech}
                >{this.props.tech[key].name}
              </TechPill>
            )}
          </PillContainer>
        </CardContentContainer>
        <CardImage>
          <img src={this.props.img} alt={this.props.info} />
        </CardImage>
      </CardContainer>
    )
  }
}

export default ProjectCard;