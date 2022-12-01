import { unmountComponentAtNode } from 'react-dom';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    unmountComponentAtNode(div);
  });
});
