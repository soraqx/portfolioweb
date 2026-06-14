import { v } from 'convex/values';
import { defineSchema, defineTable } from 'convex/server';

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    links: v.object({
      live: v.optional(v.string()),
      github: v.optional(v.string()),
    }),
    featured: v.boolean(),
    date: v.string(),
  })
    .index('by_date', ['date'])
    .index('by_featured', ['featured']),

  skills: defineTable({
    category: v.string(),
    skill: v.string(),
    proficiency: v.union(
      v.literal('beginner'),
      v.literal('intermediate'),
      v.literal('advanced'),
      v.literal('expert')
    ),
  })
    .index('by_category', ['category']),

  contact_submissions: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    timestamp: v.number(),
  })
    .index('by_timestamp', ['timestamp']),

  resume_data: defineTable({
    url: v.string(),
    updatedAt: v.number(),
  }),
});
