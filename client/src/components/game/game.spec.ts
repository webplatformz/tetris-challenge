import {newSpecPage} from '@stencil/core/testing';
import {Game} from "./game";

describe('app-game', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'WebSocket', {
      value: function () {
        return {};
      }
    })
  });

  it('should render', async () => {
    const page = await newSpecPage({
      components: [Game],
      html: `<app-game></app-game>`,
    });

    expect(page.root).toBeDefined();
  });
});
