import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainer = styled.div`

`;

class Projects extends React.Component {
  render() {
    const reactJS = {
      name: "ReactJS",
      tech: "javascript"
    }
    const javaScript = {
      name: "JavaScript",
      tech: "javascript"
    }
    const nodeJS = {
      name: "NodeJS",
      tech: "framework"
    }
    const firebase = {
      name: "Firebase",
      tech: "database"
    }
    const styledComponents = {
      name: "Styled Components",
      tech: "style"
    }
    const sass = {
      name: "Sass",
      tech: "style"
    }
    return (
      <ProjectContainer>
        <ProjectCard
          title="Cooked"
          info="A web app that I use to manage the inventory of my kitchen"
          tech={[reactJS, nodeJS, firebase, styledComponents]}
          img="/cooked-screenshot.png"
          repo="https://github.com/Nikkistorme/cooked"
        />
        <ProjectCard
          title="Dashboard"
          info="Mock dashboard displaying a variety of ways to display information to users"
          tech={[javaScript, sass]}
          img="/dashboard-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-7"
        />
        <ProjectCard
          title="Circles"
          info="A static site displaying an example design system"
          tech={[sass]}
          img="/circles-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-4"
        />
      </ProjectContainer>
    )
  }
}

export default Projects;