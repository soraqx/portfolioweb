import { query } from 'convex/server';

export const getResume = query({
  handler: async (ctx) => {
    const resume = await ctx.db.query('resume_data').first();
    return resume || null;
  },
});
