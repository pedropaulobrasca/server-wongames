"use strict";
/**
 * game controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::game.game', ({ strapi }) => {
    return {
        async populate(ctx) {
            console.log('🚀 Starting population of games...');
            await strapi.service('api::game.game').populate();
            console.log('👌 Finished population of games.');
            ctx.send({
                message: 'ok',
            });
        },
    };
});
