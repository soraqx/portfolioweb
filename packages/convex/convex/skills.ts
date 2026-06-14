import { query } from 'convex/server';
import { v } from 'convex/values';

export const getSkills = query({
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let queryBuilder = ctx.db.query('skills');

    if (args.category) {
      queryBuilder = queryBuilder.filter((q) =>
        q.eq(q.field('category'), args.category!)
      );
    }

    return await queryBuilder.collect();
  },
});

export const getSkillsByCategory = query({
  handler: async (ctx) => {
    const skills = await ctx.db.query('skills').collect();
    const grouped: Record<string, any[]> = {};

    for (const skill of skills) {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    }

    return grouped;
  },
});
