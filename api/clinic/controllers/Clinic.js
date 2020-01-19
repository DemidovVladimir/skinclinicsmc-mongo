'use strict';

/**
 * Clinic.js controller
 *
 * @description: A set of functions called "actions" for managing `Clinic`.
 */

module.exports = {

  /**
   * Retrieve clinic records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.clinic.search(ctx.query);
    } else {
      return strapi.services.clinic.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a clinic record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.clinic.fetch(ctx.params);
  },

  /**
   * Count clinic records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.clinic.count(ctx.query);
  },

  /**
   * Create a/an clinic record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.clinic.add(ctx.request.body);
  },

  /**
   * Update a/an clinic record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.clinic.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an clinic record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.clinic.remove(ctx.params);
  }
};
