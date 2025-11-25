# 🎉 CMS Integration Complete - Setup Instructions

## ✅ What Has Been Done

Your Advent Calendar project now includes **Decap CMS** (formerly Netlify CMS), a **100% free** content management system that works perfectly with GitHub Pages!

### Changes Made:

1. **CMS Admin Interface**: Located at `/admin/`
2. **Content Structure**: All calendar data converted to JSON format
3. **Dynamic Loading**: React app now loads content from JSON files
4. **Comprehensive Documentation**: Complete user guide in Spanish

## 🚀 Next Steps to Complete Setup

### Step 1: Test Locally (Optional)

```bash
# Start the development server
npm run dev

# Visit the admin panel
# Open: http://localhost:5173/adviento-2025/admin/
```

### Step 2: Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

Wait 1-2 minutes for GitHub Pages to update.

### Step 3: Configure Authentication for Production

To use the CMS in production, you need to set up authentication. **Choose ONE option:**

#### Option A: GitHub OAuth with Netlify Git Gateway (Recommended - Easy)

1. **Create a Netlify account** (it's FREE): https://app.netlify.com
   - No need to deploy your site to Netlify
   - We're only using it for authentication

2. **Import your GitHub repository:**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `adviento-2025`
   - **Important**: You can skip the build settings (click "Deploy site")

3. **Enable Identity & Git Gateway:**
   - Go to: Site settings → Identity → Enable Identity
   - Go to: Site settings → Identity → Services → Git Gateway
   - Click "Enable Git Gateway"

4. **Invite yourself as a user:**
   - Go to: Identity → Invites
   - Click "Invite users"
   - Enter your email
   - Check your email and accept the invitation

5. **Done!** Now you can access:
   ```
   https://esteban-mrh.github.io/adviento-2025/admin/
   ```
   And login with your email/password.

#### Option B: Direct GitHub OAuth (More technical)

1. **Create GitHub OAuth App:**
   - Go to: https://github.com/settings/developers
   - Click "New OAuth App"
   - Fill in:
     - Application name: `Advent Calendar CMS`
     - Homepage URL: `https://esteban-mrh.github.io/adviento-2025/`
     - Authorization callback URL: `https://esteban-mrh.github.io/adviento-2025/admin/`

2. **Get Client ID and Secret:**
   - After creating the app, copy your Client ID
   - Generate and copy a new Client Secret

3. **Set up authentication server:**
   - You'll need to deploy a simple authentication server
   - Options: Netlify Functions, Vercel Functions, or AWS Lambda
   - This is more complex - **we recommend Option A instead**

### Step 4: Access Your CMS

Once authentication is configured:

1. Visit: `https://esteban-mrh.github.io/adviento-2025/admin/`
2. Click "Login with Netlify Identity" (Option A) or "Login with GitHub" (Option B)
3. Start editing your content!

## 📖 How to Use the CMS

### Edit Calendar Days:
1. Go to "Días del Calendario" in the sidebar
2. Click on any day (1-24)
3. Edit the content
4. Click "Save" then "Publish"

### Edit Banner Messages:
1. Go to "Mensajes del Banner"
2. Edit existing messages or create new ones
3. Use the "Orden" field to change the order
4. Save and publish

### Upload Images/Audio/Video:
1. When editing a day with photo/audio/video type
2. Click on the file field
3. Select "Upload" and choose your file
4. Files are saved to `public/media/`

### Change General Settings:
1. Go to "Configuración" → "Configuración General"
2. Modify site title, year, demo mode, etc.
3. Save and publish

## 📚 Documentation

- **Complete User Guide**: See `GUIA-CMS.md` for detailed instructions in Spanish
- **Updated README**: The main README now includes CMS sections
- **Decap CMS Docs**: https://decapcms.org/docs/

## 🎯 Key Features

✅ **100% Free** - No costs, no limits
✅ **No Backend Required** - Works with static hosting
✅ **Git-based** - Changes saved directly to GitHub
✅ **User-friendly** - Visual interface for editing
✅ **Media Upload** - Manage images, audio, video
✅ **Editorial Workflow** - Draft → Review → Publish

## 🔄 Content Update Workflow

When you edit content through the CMS:

1. **Edit** in the CMS admin panel
2. **Save** to create a draft
3. **Publish** to commit to GitHub
4. **Wait 1-2 minutes** for GitHub Pages to rebuild
5. **See your changes** on the live site!

## ⚠️ Important Notes

- **Content Location**: Your content is now in JSON files under `content/` and `public/content/`
- **Backward Compatibility**: The old `calendarData.ts` file is still there but is no longer used by the app
- **Build Process**: When you run `npm run build`, the content files are automatically included
- **GitHub Pages**: Make sure GitHub Pages is enabled in your repo settings

## 🐛 Troubleshooting

### CMS not loading?
- Check that `public/admin/index.html` and `public/admin/config.yml` exist
- Verify the site is deployed to GitHub Pages
- Check browser console for errors

### Can't login?
- Make sure you've completed Step 3 (authentication setup)
- Try clearing browser cache
- Verify Git Gateway is enabled (Option A) or OAuth app is configured (Option B)

### Changes not appearing?
- Make sure you clicked "Publish" (not just "Save")
- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear browser cache and refresh

### Media files not loading?
- Files must be under 10MB
- Check that files are in `public/media/`
- Verify file formats are web-compatible (JPG, PNG, MP3, MP4)

## 🎓 Learn More

Read the complete guide:
```bash
# Open the CMS guide
cat GUIA-CMS.md
```

Or view it on GitHub after pushing your changes.

## 🎉 You're All Set!

Your Advent Calendar now has a professional CMS! You can edit all content without touching code.

**Happy editing! 💕🎄✨**
