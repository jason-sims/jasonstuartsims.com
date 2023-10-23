// WorkItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkItem from '../components/WorkItem';
import portfolioImg from '../public/assets/workitem/portfolio.jpg';

describe('WorkItem', () => {
  it('renders title, role, background image, project URL, summary and button call to action', () => {
    render(
      <WorkItem
        title="Portfolio Test"
        backgroundImg={portfolioImg}
        projectUrl="/portfolio"
        role="Web Developer"
        summary="My portfolio site built using Next.js & Tailwind"
        buttoncta="Find out more"
      />
    );

    // Check if the title, image, and description are present
    expect(screen.getByText('Portfolio Test')).toBeInTheDocument();
    expect(screen.getByText('Web Developer')).toBeInTheDocument();
    expect(
      screen.getByText('My portfolio site built using Next.js & Tailwind')
    ).toBeInTheDocument();
    expect(screen.getByText('Find out more')).toBeInTheDocument();
  });
});
