import Index from '../pages/index';
import { render, screen } from '@testing-library/react';

describe('Index page', () => {
  it('should render', () => {
    render(<Index />);
  });
});
