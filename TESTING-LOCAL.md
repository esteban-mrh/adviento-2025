# 🧪 Testing Guide - Local CMS Development

## Overview

This guide explains how to test the CMS locally before deploying to Netlify.

## 🚀 Quick Start - Local Testing

### Prerequisites

- Node.js 18+ installed
- Repository cloned and dependencies installed (`npm install`)

### Option 1: Local Backend Proxy (Recommended)

This method allows you to test the CMS locally without authentication.

#### Step 1: Install Decap Server

```bash
npm install -g decap-server
```

Or use it without installing globally:

```bash
npx decap-server
```

#### Step 2: Start the Proxy Server

Open a **new terminal** and run:

```bash
npx decap-server
```

You should see:
```
Decap CMS development server running on http://localhost:8081
```

**Keep this terminal running!**

#### Step 3: Start the Development Server

In a **different terminal**, run:

```bash
npm run dev
```

You should see:
```
VITE v7.2.4  ready in xxx ms

➜  Local:   http://localhost:5173/adviento-2025/
```

#### Step 4: Access the CMS

Open your browser and navigate to:
```
http://localhost:5173/adviento-2025/admin/
```

**No login required!** The local backend allows direct access.

### Option 2: Using Netlify Identity (Advanced)

If you've already deployed to Netlify and set up Identity:

1. Start the dev server: `npm run dev`
2. Go to: `http://localhost:5173/adviento-2025/admin/`
3. Login with your Netlify Identity credentials
4. Changes will commit directly to your GitHub repo

## 🧪 Testing Checklist

### Basic CMS Functionality

- [ ] CMS admin panel loads without errors
- [ ] Can navigate to "Días del Calendario"
- [ ] Can view existing calendar days
- [ ] Can create a new calendar day
- [ ] Can edit an existing calendar day
- [ ] Can save changes (creates draft in local backend)
- [ ] Can navigate to "Mensajes del Banner"
- [ ] Can view/edit banner messages
- [ ] Can navigate to "Configuración"
- [ ] Can view/edit general settings

### Content Types Testing

Test each content type:

- [ ] **Text**: Create/edit a text-type day
- [ ] **Letter**: Create/edit a letter-type day
- [ ] **Photo**: Upload and preview an image
- [ ] **Audio**: Upload and preview audio file
- [ ] **Video**: Enter video URL and preview
- [ ] **URL**: Create URL content with link
- [ ] **Custom**: Create custom content with list items

### Media Upload

- [ ] Can click on image upload field
- [ ] Can select an image from computer
- [ ] Image uploads to `public/media/`
- [ ] Can preview uploaded image in CMS
- [ ] Can upload audio file
- [ ] Can upload video file (if using direct video type)

### Editorial Workflow

- [ ] Save creates a draft
- [ ] Can see draft in "Workflow" section
- [ ] Can set to "In review"
- [ ] Can publish from workflow
- [ ] Publishing creates/updates JSON files in `content/` directory

## 🔍 Troubleshooting Local Development

### CMS doesn't load

**Symptoms**: Blank page or error when accessing `/admin/`

**Solutions**:
1. Check browser console for errors (F12)
2. Verify both dev server and proxy are running
3. Clear browser cache (Ctrl+Shift+R)
4. Try accessing: `http://localhost:5173/adviento-2025/admin/index.html` directly

### "Error loading config.yml"

**Symptoms**: CMS shows error about config.yml

**Solutions**:
1. Verify `public/admin/config.yml` exists
2. Check YAML syntax is valid
3. Restart the dev server

### "Not found" or 404 errors

**Symptoms**: Admin page shows 404

**Solutions**:
1. Verify you're using the correct URL with `/adviento-2025/` prefix
2. Check that `npm run dev` is running
3. Try accessing `http://localhost:5173/adviento-2025/` first (main app)

### Local backend not connecting

**Symptoms**: CMS asks for login even with local backend

**Solutions**:
1. Verify `decap-server` is running on port 8081
2. Check that `local_backend: true` is in `config.yml`
3. Look for errors in the terminal running `decap-server`
4. Restart both servers

### Changes not saving

**Symptoms**: Save button doesn't work or shows error

**Solutions**:
1. Check terminal running `decap-server` for errors
2. Verify you have write permissions in the repository
3. Check that no files are locked or in use
4. Restart the proxy server

### Media files won't upload

**Symptoms**: Upload button doesn't work or shows error

**Solutions**:
1. Check file size (should be < 10MB)
2. Verify file format is supported (JPG, PNG, GIF for images)
3. Check `public/media/` directory exists
4. Look for errors in browser console

## 📝 Manual Testing Procedures

### Test Content Creation

1. Go to "Días del Calendario"
2. Click "New Días del Calendario"
3. Enter day number (1-24)
4. Select a content type
5. Fill in the content fields
6. Click "Save"
7. Check that file appears in `content/calendar/`
8. Click "Publish"
9. Verify changes in the frontend

### Test Media Upload

1. Create/edit a photo-type day
2. Click on the image upload field
3. Select an image from your computer
4. Wait for upload to complete
5. Verify image appears in preview
6. Save and publish
7. Check that image file is in `public/media/`
8. Verify image displays in the frontend

### Test Settings

1. Go to "Configuración" → "Configuración General"
2. Change site title
3. Toggle demo mode
4. Change year or month
5. Save changes
6. Check `content/settings/general.json` for updates
7. Verify changes reflect in the frontend

## 🎯 Frontend Testing

After making CMS changes, test the frontend:

### View Changes

1. Refresh the main app: `http://localhost:5173/adviento-2025/`
2. Verify banner messages rotate correctly
3. Check that calendar days display properly
4. Click on a day to open modal
5. Verify content displays correctly
6. Test all content types you created

### Test Responsive Design

1. Open browser dev tools (F12)
2. Toggle device toolbar (mobile view)
3. Test on different screen sizes
4. Verify CMS admin is also responsive

## 🔧 Advanced Testing

### Test Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Access: `http://localhost:4173/adviento-2025/`

### Test Without Base Path (Netlify Simulation)

```bash
# Set environment variable for Netlify-like build
VITE_BASE_PATH=/ npm run build

# Preview
npm run preview
```

Access: `http://localhost:4173/`

### Lint Code

```bash
npm run lint
```

Fix any errors before deploying.

## 📊 Success Criteria

Before deploying to Netlify, ensure:

- [ ] CMS loads without errors locally
- [ ] Can create/edit all content types
- [ ] Media upload works
- [ ] Changes save to files correctly
- [ ] Frontend displays changes correctly
- [ ] Build completes without errors
- [ ] No linting errors
- [ ] All documentation is updated

## 🚀 Ready to Deploy?

Once local testing is complete:

1. Commit all changes: `git add . && git commit -m "Your message"`
2. Push to GitHub: `git push`
3. Follow the [Netlify Deployment Guide](./DEPLOY-NETLIFY.md)

## 📚 Additional Resources

- [Decap CMS Local Development](https://decapcms.org/docs/beta-features/#working-with-a-local-git-repository)
- [Vite Development](https://vitejs.dev/guide/)
- [Main CMS Guide (Spanish)](./GUIA-CMS.md)

## 💡 Tips

- Keep both terminals (proxy and dev server) visible
- Use browser dev tools to debug issues
- Check both terminals for error messages
- Clear browser cache if you see old content
- Use private/incognito mode to test fresh state

Happy testing! 🎉
