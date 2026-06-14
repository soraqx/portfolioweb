import { query } from 'convex/server';
import { v } from 'convex/values';

export const getProjects = query({
  args: {
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let queryBuilder = ctx.db.query('projects');

    if (args.featured) {
      queryBuilder = queryBuilder.filter((q) =>
        q.eq(q.field('featured'), true)
      );
    }

    return await queryBuilder.order('date', 'desc').collect();
  },
});

export const getProjectById = query({
  args: {
    id: v.id('projects'),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
