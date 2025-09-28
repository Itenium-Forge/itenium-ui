import { render } from '@testing-library/react';

import IteniumUi from './ui';

describe('IteniumUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IteniumUi />);
    expect(baseElement).toBeTruthy();
  });
});
