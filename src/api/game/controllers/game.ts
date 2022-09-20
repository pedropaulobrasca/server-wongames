/**
 * game controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::game.game', ({ strapi }) => {
  return {
    async populate(ctx) {
      console.log('🚀 Starting population of games...')

      await strapi.service('api::game.game').populate()

      console.log('👌 Finished population of games.')

      ctx.send({
        message: 'ok',
      });
    },
  }
});
