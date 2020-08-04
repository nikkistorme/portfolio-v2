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
    const vueJS = {
      name: "Vue.js",
      tech: "javascript",
      url: "https://vuejs.org/"
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
          title="Shelf"
          info="Add books to shelves and look at all the cool books you've read!"
          tech={[vueJS, firebase, sass]}
          img="/shelf-screenshot.png"
          repo="https://github.com/Nikkistorme/shelf"
          link="https://shelfapp.xyz/"
        />
        <ProjectCard
          title="Open Movie Search"
          info="Search through the Open Movie database and view search history"
          tech={[vueJS, sass]}
          img="/open-movie-search-screenshot.png"
          repo="https://github.com/Nikkistorme/open-movie-search"
          link="https://open-movie-search-git-master.nikkistorme.vercel.app/"
        />
        <ProjectCard
          title="Cooked"
          info="A web app that I use to manage the inventory of my kitchen"
          tech={[reactJS, nextJS, firebase, styledComponents]}
          img="/cooked-screenshot.png"
          repo="https://github.com/Nikkistorme/cooked"
          link="https://cooked-nine-chi.now.sh/"
        />
        <ProjectCard
          title="Dashboard"
          info="Mock dashboard displaying a variety of ways to display information to users"
          tech={[javaScript, sass]}
          img="/dashboard-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-7"
          link="https://nikkistorme.github.io/dashboard/dashboard"
        />
        <ProjectCard
          title="Wheel of Success"
          info="A web based hang-man-style game"
          tech={[javaScript, css]}
          img="/wheel-of-success-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-6"
          link="https://nikkistorme.github.io/wheel-of-success/wheel-of-success"
        />
        <ProjectCard
          title="Circles"
          info="A static site displaying an example design system"
          tech={[sass]}
          img="/circles-screenshot.png"
          repo="https://github.com/Nikkistorme/techdegree-project-4"
          link="https://nikkistorme.github.io/circles/circles"
        />
      </ProjectContainer>
    )
  }
}

export default Projects;