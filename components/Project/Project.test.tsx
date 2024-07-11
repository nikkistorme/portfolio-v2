// Test the Project component

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Project from './Project';

describe('Project', () => {
  it('renders a project', () => {
    const project = {
      title: 'Hyah UI',
      description: 'This is a test description',
      repo: 'https://github.com/nikkistorme/hyah-ui',
      url: 'https://hyah-ui.vercel.app',
      imgs: [
        {
          "alt": "Hyah UI on Desktop",
          "srcset": [ { "src": "/project-images/hyah-desktop.png" } ]
        },
        {
          "alt": "Hyah UI on Mobile",
          "srcset": [ { "src": "/project-images/hyah-mobile.png" } ]
        }
      ]
    };

    render(<Project project={project} />);

    // The Project is contained in an article element
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
    // The Project title is a link
    const title = screen.getByRole('link', { name: project.title });
    expect(title).toHaveAttribute('href', project.url);
    expect(title).toBeInTheDocument();
    // The Project description is rendered
    const description = screen.getByText(project.description);
    expect(description).toBeInTheDocument();
    // The Project repo link is rendered
    const repo = screen.getByRole('link', { name: `View the GitHub repository for ${project.title}` });
    expect(repo).toHaveAttribute('href', project.repo);
    expect(repo).toBeInTheDocument();
    // The Project images are rendered
    const mobileImage = screen.getByAltText(project.imgs[1].alt);
    expect(mobileImage).toBeInTheDocument();
    const desktopImage = screen.getByAltText(project.imgs[0].alt);
    expect(desktopImage).toBeInTheDocument();
  });
});