import {newSpecPage} from '@stencil/core/testing';
import {AppBoard} from "./app-board";

describe('app-board', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [AppBoard],
      html: `<app-board></app-board>`,
    });

    expect(page.root).toBeDefined();
  });
});
