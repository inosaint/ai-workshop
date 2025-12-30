# Analytics Guide

This project uses PostHog for analytics tracking. Here's what you can track and how to analyze it.

## What's Being Tracked

### 1. Page Views
Every page view is automatically tracked with:
- **Module name** (e.g., "Introduction", "GitHub Setup")
- **Module order** (1-11, representing progression through the course)
- **Course section** ("Start Here", "Setup", "Build Your Project", etc.)
- **Page path** (full URL path)

### 2. User Progression
Each user has properties tracking:
- **Last module viewed** - The most recent page they visited
- **Furthest module order** - The highest module number they've reached
- **Last section** - Which section of the course they're in

### 3. Checkpoint Engagement
When users scroll past checkpoint boxes (✅ Checkpoint), we track:
- Which page they were on
- Which checkpoint they reached

## How to Analyze in PostHog

### Creating a Course Completion Funnel

1. Go to **Insights** → **New Insight** → **Funnel**
2. Add these steps in order:
   - Page viewed (module_order = 1) - Introduction
   - Page viewed (module_order = 3) - GitHub Setup
   - Page viewed (module_order = 4) - Install Claude Code
   - Page viewed (module_order = 7) - Building with Claude
   - Page viewed (module_order = 9) - Deploy to GitHub Pages
3. This shows you the drop-off rate at each major step

### Finding Drop-Off Points

1. Go to **Insights** → **Trends**
2. Event: `page_viewed`
3. Group by: `module_order`
4. This shows which modules get the most traffic and where people stop

### Popular Pages Report

1. Go to **Insights** → **Trends**
2. Event: `page_viewed`
3. Group by: `module`
4. Sort by: Total count (descending)
5. This shows your most and least visited pages

### Average Completion Rate

1. Go to **Insights** → **SQL** (or use Trends)
2. Create a metric for users who reached module 9+ (completed deployment)
3. Compare to total unique users

### Section Engagement

1. Go to **Insights** → **Trends**
2. Event: `page_viewed`
3. Group by: `course_section`
4. This shows which sections are most engaging

### Checkpoint Views

1. Go to **Insights** → **Trends**
2. Event: `checkpoint_viewed`
3. Group by: `page_path`
4. This shows which pages users are actually reading (not just visiting)

## Custom Events You Can Add

Want to track more? Add custom events by modifying `src/components/Head.astro`:

```javascript
// Track external link clicks
posthog.capture('external_link_clicked', {
  url: linkUrl,
  module: currentModule
});

// Track code block interactions
posthog.capture('code_copied', {
  module: currentModule,
  code_language: language
});
```

## User Cohorts

Create cohorts based on progression:
- **Beginners**: furthest_module_order <= 3
- **Active learners**: furthest_module_order >= 4 AND furthest_module_order < 9
- **Completers**: furthest_module_order >= 9

## Dashboard Recommendations

Create a dashboard with:
1. **Course Funnel** - Completion rates through all 11 modules
2. **Daily Active Users** - Unique visitors per day
3. **Popular Modules** - Page views by module
4. **Average Progression** - Average furthest_module_order value
5. **Checkpoint Engagement** - Checkpoint views vs page views ratio

## Privacy Note

We use `person_profiles: 'identified_only'` which means PostHog only creates detailed profiles for users who explicitly identify themselves. Anonymous users are still tracked for aggregate metrics but not individually profiled.
