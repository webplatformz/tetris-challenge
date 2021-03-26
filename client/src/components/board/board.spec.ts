import {newSpecPage} from '@stencil/core/testing';
import {Board} from "./board";

describe('app-board', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [Board],
      html: `<app-board></app-board>`,
    });

    expect(page.root).toBeDefined();
  });
});
