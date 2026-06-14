import { mutation, action } from 'convex/server';
import { v } from 'convex/values';

export const submitContact = action({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const submission = {
      name: args.name,
      email: args.email,
      message: args.message,
      timestamp: Date.now(),
    };

    const id = await ctx.runMutation(internal.contact.createSubmission, {
      ...submission,
    });

    return { success: true, id };
  },
});

const internal = {
  contact: {
    createSubmission: mutation({
      args: {
        name: v.string(),
        email: v.string(),
        message: v.string(),
        timestamp: v.number(),
      },
      handler: async (ctx, args) => {
        return await ctx.db.insert('contact_submissions', {
          name: args.name,
          email: args.email,
          message: args.message,
          timestamp: args.timestamp,
        });
      },
    }),
  },
};

export const getSubmissions = query({
  handler: async (ctx) => {
    return await ctx.db
      .query('contact_submissions')
      .order('timestamp', 'desc')
      .collect();
  },
});
