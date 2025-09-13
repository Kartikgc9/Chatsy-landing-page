# Deployment Guide for Vercel

## Environment Variables Setup

When deploying to Vercel, you need to set up the following environment variables in your Vercel project settings:

1. `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

## Steps to Deploy

1. **Push your changes to GitHub** (make sure the updated package.json is committed)

2. **Set Environment Variables in Vercel:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the two Supabase environment variables mentioned above

3. **Redeploy:**
   - Go to the Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger automatic deployment

## Fixed Issues

✅ Added missing `@supabase/supabase-js` dependency to package.json
✅ Removed unnecessary framework dependencies (Vue, Svelte, Remix)
✅ Updated React and TypeScript versions to resolve peer dependency warnings
✅ Build now compiles successfully locally and should work on Vercel

## Verification

The build should now complete successfully without the "Module not found: Can't resolve '@supabase/supabase-js'" error.