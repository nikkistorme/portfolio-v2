// Test the BlogPost component

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BlogPost from './BlogPost';

describe('BlogPost', () => {
  it('renders a blog post', () => {
    const post = {
      title: 'Test Post',
      brief: 'This is a test post',
      url: 'https://example.com',
      publishedAt: '2023-06-20T16:49:18.377Z',
      coverImage: {
        url: 'https://example.com/image.jpg',
      },
    };

    render(<BlogPost post={post} />);

    // The BlogPost is contained in an article element
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
    // Check that the title link is rendered
    const title = screen.getByRole('link', { name: post.title });
    expect(title).toBeInTheDocument();
    // Check that the image is rendered and has alt text
    const image = screen.getByAltText(post.title);
    expect(image).toBeInTheDocument();
    // Check that the brief text is rendered
    const brief = screen.getByText(post.brief);
    expect(brief).toBeInTheDocument();
    // Check that the published date is rendered correctly as Jun 20, 2023
    const date = screen.getByText('Jun 20, 2023');
    expect(date).toBeInTheDocument();
  });
});