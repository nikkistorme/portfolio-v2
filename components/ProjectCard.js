import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0 0 2em 0;
  padding: 15px;
  display: flex;
  max-width: 369px;
  width: 100%;
  h2 {
    color: ${(props) => props.theme.blue};
  }
`;

const CardContentContainer = styled.div`
  flex: 1.2;
  @media (min-width: 900px) {
    p {
      font-size: 1.6rem;
    }
  }
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    line-height: 0;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

const CardImage = styled.div`
  width: 340px;
  margin-left: 1em;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  /* height: min-content; */
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TechPill = styled.span`
  font-family: ${(props) => props.theme.fontHeading};
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  padding: 3px 5px;
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  min-width: 45px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
  &.javascript {
    background-color: ${(props) => props.theme.red};
  }
  &.framework {
    background-color: ${(props) => props.theme.brown};
  }
  &.database {
    background-color: ${(props) => props.theme.orange};
  }
  &.style {
    background-color: ${(props) => props.theme.pink};
  }
`;

class ProjectCard extends React.Component {
  render() {
    return (
      <CardContainer>
        <CardContentContainer>
          <CardTitleContainer>
            <h2>
              <a
                href={this.props.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {this.props.title}
              </a>
            </h2>
            <a href={this.props.repo} target="_blank">
              <img src="/GitHub-Mark-32px.png" alt="GitHub Icon" />
            </a>
          </CardTitleContainer>
          <p>{this.props.info}</p>
          <PillContainer>
            {Object.keys(this.props.tech).map((key) => (
              <TechPill key={key} className={this.props.tech[key].tech}>
                <a href={this.props.tech[key].url} target="_blank">
                  {this.props.tech[key].name}
                </a>
              </TechPill>
            ))}
          </PillContainer>
        </CardContentContainer>
        <CardImage>
          <a href={this.props.link} target="_blank">
            <img src={this.props.img} alt={this.props.info} />
          </a>
        </CardImage>
      </CardContainer>
    );
  }
}

export default ProjectCard;
