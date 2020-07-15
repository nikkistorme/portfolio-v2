import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1230px;
`;

class Projects extends React.Component {
  render() {
    const reactJS = {
      name: "ReactJS",
      tech: "javascript",
      url: "https://reactjs.org/"
    }
    const jQuery = {
      name: "jQuery",
      tech: "javascript",
      url: "https://jquery.com/"
    }
    const javaScript = {
      name: "JavaScript",
      tech: "javascript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    }
    const nextJS = {
      name: "NextJS",
      tech: "framework",
      url: "https://nextjs.org/"
    }
    const firebase = {
      name: "Firebase",
      tech: "database",
      url: "https://firebase.google.com/"
    }
    const styledComponents = {
      name: "Styled Components",
      tech: "style",
      url: "https://styled-components.com/"
    }
    const sass = {
      name: "Sass",
      tech: "style",
      url: "https://sass-lang.com/"
    }
    const css = {
      name: "CSS3",
      tech: "style",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    }
    return (
      <ProjectContainer>
        <ProjectCard
          title="Cooked"
          info="A web app that I use to manage the inventory of my kitchen (active)"
          tech={[reactJS, nextJS, firebase, styledComponents]}
          img="/cooked-screenshot.png"
          repo="https://github.com/Nikkistorme/cooked"
          link="https://cooked-nine-chi.now.sh/"
        />
        <ProjectCard
          title="Dashboard"
          info="Mock dashboard displaying a variety of ways to display information to users (inactive)"
          tech={[javaScript, sass]}
          img="/dashboard-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-7"
          link="https://nikkistorme.github.io/dashboard/dashboard"
        />
        <ProjectCard
          title="Wheel of Success"
          info="A web based hang-man-style game (inactive)"
          tech={[javaScript, css]}
          img="/wheel-of-success-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-6"
          link="https://nikkistorme.github.io/wheel-of-success/wheel-of-success"
        />
        <ProjectCard
          title="Gallery"
          info="An interactive photo gallery (inactive)"
          tech={[jQuery, sass]}
          img="/gallery-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-5"
          link="https://nikkistorme.github.io/gallery/gallery"
        />
        <ProjectCard
          title="Circles"
          info="A static site displaying an example design system (inactive)"
          tech={[sass]}
          img="/circles-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-4"
          link="https://nikkistorme.github.io/circles/circles"
        />
        <ProjectCard
          title="Code Review Form"
          info="A static example of a variety of input types in a form (inactive)"
          tech={[css]}
          img="/code-review-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-3"
          link="https://nikkistorme.github.io/code-review-form/code-review-form"
        />
      </ProjectContainer>
    )
  }
}

export default Projects;