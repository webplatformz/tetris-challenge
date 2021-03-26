import {newSpecPage} from '@stencil/core/testing';
import {Root} from "./root";

describe('app-root', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Root],
      html: `<app-root></app-root>`,
    });

    expect(page.root).toBeDefined();
  });
});
