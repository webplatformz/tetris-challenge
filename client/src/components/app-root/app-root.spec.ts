import {newSpecPage} from '@stencil/core/testing';
import {AppRoot} from "./app-root";

describe('app-root', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [AppRoot],
      html: `<app-root></app-root>`,
    });

    expect(page.root).toBeDefined();
  });
});
