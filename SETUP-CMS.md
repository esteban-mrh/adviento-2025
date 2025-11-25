# 🎉 CMS Setup Guide - Netlify with Git Gateway

## ✅ What Has Been Done

Your Advent Calendar project now includes **Decap CMS** (formerly Netlify CMS), a **100% free** content management system that works with Netlify!

### Changes Made:

1. **CMS Admin Interface**: Located at `/admin/`
2. **Content Structure**: All calendar data in JSON format
3. **Dynamic Loading**: React app loads content from JSON files
4. **Netlify Configuration**: Ready for deployment with `netlify.toml`
5. **Git Gateway Backend**: Uses Netlify Identity for authentication

## 🚀 Complete Setup Instructions

### Step 1: Deploy to Netlify

1. **Create a Netlify account** (FREE): https://app.netlify.com/signup

2. **Import your repository**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `adviento-2025` repository

3. **Configure build settings** (should be auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)
   
4. **Click "Deploy site"**

5. **Wait for deployment** (1-2 minutes)
   - Your site will be live at: `https://random-name-123.netlify.app`
   - You can customize the domain later in Site settings

### Step 2: Enable Identity (Auth0 Integration)

Netlify Identity now uses **Auth0** behind the scenes for authentication:

1. **Enable Netlify Identity**:
   - Go to your site dashboard
   - Navigate to: **Site settings** → **Identity**
   - Click **"Enable Identity"**

2. **Configure Identity settings**:
   - **Registration preferences**: Set to "Invite only" (recommended)
   - **External providers** (optional): You can enable GitHub, Google, etc.
   - **Services**: Will configure Git Gateway in next step

3. **Enable Git Gateway**:
   - In Identity settings, go to **Services** section
   - Find **"Git Gateway"** and click **"Enable Git Gateway"**
   - This allows the CMS to commit to your GitHub repo

### Step 3: Invite Yourself as a User

1. **Go to Identity tab** in your Netlify site dashboard

2. **Click "Invite users"**

3. **Enter your email address** and send invitation

4. **Check your email** for the invitation link

5. **Click the link** and **set your password**

6. **Done!** You now have admin access

### Step 4: Access Your CMS

1. Visit your CMS admin panel:
   ```
   https://your-site-name.netlify.app/admin/
   ```

2. Click **"Login with Netlify Identity"**

3. Enter your **email and password** (that you set in Step 3)

4. **Start editing content!**

## 📖 How to Use the CMS

### Edit Calendar Days:
1. Go to "Días del Calendario" in the sidebar
2. Click on any day (1-24)
3. Edit the content
4. Click "Save" then "Publish now"

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

## 🛠️ Local Development

### Option 1: Using Local Backend Proxy (Recommended)

1. **Install Decap CMS proxy**:
   ```bash
   npm install -g decap-server
   ```

2. **Start the proxy** (in one terminal):
   ```bash
   npx decap-server
   ```
   This will run on `http://localhost:8081`

3. **Start your dev server** (in another terminal):
   ```bash
   npm run dev
   ```
   This will run on `http://localhost:5173`

4. **Access the local CMS**:
   ```
   http://localhost:5173/adviento-2025/admin/
   ```
   
5. **No login required** - local backend allows direct access

### Option 2: Using Production Identity (Advanced)

1. Start dev server: `npm run dev`
2. Access: `http://localhost:5173/adviento-2025/admin/`
3. Login with your Netlify Identity credentials
4. This will commit directly to your repo

## 🌐 Custom Domain (Optional)

1. **Go to Site settings** → **Domain management**
2. **Add custom domain** or **Change site name**
3. For custom domain: Update DNS settings with your provider
4. Netlify provides free SSL certificates

## 🔄 Content Update Workflow

When you edit content through the CMS:

1. **Edit** in the CMS admin panel
2. **Save** to create a draft (Editorial Workflow)
3. **Publish** to commit changes to GitHub
4. **Netlify auto-rebuilds** (1-2 minutes)
5. **Changes are live!**

## ⚠️ Important Notes

### Authentication
- **Netlify Identity** uses **Auth0** under the hood (modern, secure)
- You don't need to configure Auth0 directly - Netlify handles it
- Old "Netlify Identity" widget is still supported but uses Auth0 backend

### Content Location
- Content is stored as JSON files in `content/` directory
- Media files go to `public/media/`
- All changes are committed to your GitHub repository

### Git Gateway
- Allows CMS to write to GitHub without GitHub OAuth
- Uses your Netlify Identity for authentication
- More secure than direct GitHub access

## 🎯 Key Features

✅ **100% Free** - Netlify free tier is generous
✅ **Auto-Deploy** - Push to GitHub → auto-deploy
✅ **CDN** - Global content delivery network
✅ **SSL** - Free HTTPS certificates
✅ **Git-based** - All changes versioned in Git
✅ **Auth0 Integration** - Modern, secure authentication
✅ **No server management** - Fully managed platform

## 🐛 Troubleshooting

### CMS not loading?
- Verify site is deployed to Netlify
- Check that Identity is enabled
- Clear browser cache and try again

### Can't login?
- Make sure you accepted the email invitation
- Check if Identity is enabled in Netlify settings
- Verify Git Gateway is enabled
- Try password reset if needed

### Changes not appearing?
- Make sure you clicked "Publish now" (not just "Save")
- Wait 1-2 minutes for Netlify to rebuild
- Check the deploy log in Netlify dashboard
- Clear browser cache

### "Unable to access" error?
- Verify Git Gateway is enabled
- Check that your user has the right permissions
- Re-invite yourself if needed

### Local backend not working?
- Make sure `decap-server` is running on port 8081
- Check that `local_backend: true` is in config.yml
- Restart both the proxy and dev server

## 📚 Additional Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Identity Docs](https://docs.netlify.com/security/secure-access-to-sites/identity/)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Git Gateway Guide](https://docs.netlify.com/security/secure-access-to-sites/identity/git-gateway/)

## 🎉 You're All Set!

Your Advent Calendar is now fully integrated with Netlify and has a professional CMS powered by Auth0!

**Happy editing! 💕🎄✨**
