jest.mock('../../restApi');

import {newSpecPage} from '@stencil/core/testing';
import {Lobby} from './lobby';
import * as restApi from '../../restApi';

describe('app-lobby', () => {
  it('should render', async () => {
    jest.spyOn(restApi, 'requestGames').mockReturnValue(Promise.resolve([]));
    const page = await newSpecPage({
      components: [Lobby],
      html: `<app-lobby></app-lobby>`,
    });

    expect(page.root).toBeDefined();
  });
});
