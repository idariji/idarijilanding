# Blogger API Setup Instructions

## Getting Your Blog ID

1. Go to your Blogger dashboard: https://www.blogger.com
2. Select your blog
3. In the URL, you'll see something like: `https://www.blogger.com/blog/posts/1234567890123456789`
4. The long number (1234567890123456789) is your Blog ID
5. Replace the BLOG_ID in `/src/app/blog/page.tsx` with your actual Blog ID

## Current Setup

- ✅ API Key: Already configured in `.env.local`
- ✅ Blogger API integration: Complete
- ⚠️ Blog ID: Needs to be updated with your actual blog ID

## Features

- Fetches real blog posts from Blogger
- Shows loading states while fetching
- Fallback to sample posts if API fails
- Responsive design with hover effects
- External link indicators
- Automatic excerpt generation
- Date formatting
- Author information display

## Testing

1. Update the BLOG_ID in the blog page
2. Make sure your blog is public
3. Run `npm run dev` to test the integration