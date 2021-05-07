import { newSpecPage } from '@stencil/core/testing';
import { AppChooseUsername } from './app-choose-username';

describe('app-choose-username', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppChooseUsername],
      html: `<app-choose-username></app-choose-username>`,
    });
    expect(page.root).toBeDefined();
  });
});
