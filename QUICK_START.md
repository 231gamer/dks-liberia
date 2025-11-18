# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run build
```

### 3. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site!

## 📁 Key Files to Know

- **`pages/index.tsx`** - Homepage
- **`pages/about.tsx`** - About page
- **`pages/programs.tsx`** - Programs page
- **`pages/impact.tsx`** - Impact page
- **`pages/stories.tsx`** - Stories listing
- **`pages/stories/[slug].tsx`** - Single story page
- **`pages/contact.tsx`** - Contact page
- **`data/`** - JSON data files (edit these to update content)
- **`components/`** - Reusable components
- **`styles/globals.css`** - Global styles

## 🎨 Updating Content

### Update Stories
Edit `data/posts.json` - Add, remove, or modify blog posts.

### Update Programs
Edit `data/programs.json` - Modify program details.

### Update Team
Edit `data/team.json` - Update team member information.

### Update Impact Stats
Edit `data/impact.json` - Update statistics and yearly data.

### Update Partners
Edit `data/partners.json` - Add or remove partner organizations.

## 🎯 Customization

### Colors
Edit `tailwind.config.js` - Modify the color palette in the `theme.extend.colors` section.

### Fonts
Edit `styles/globals.css` - Update Google Fonts import and font-family settings.

### Images
Replace placeholder images in data files with your own image URLs.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

See `DEPLOYMENT.md` for detailed deployment instructions.

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is in use, Next.js will automatically use the next available port.

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Image Loading Issues
- Check that image URLs in data files are accessible
- Verify `next.config.js` includes the image domain in `remotePatterns`

## 📚 Need Help?

- Check `PROJECT_SUMMARY.md` for project overview
- Check `DEPLOYMENT.md` for deployment guide
- Check `README.md` for general information

## ✅ Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Customize content in data files
4. ✅ Update images and branding
5. ✅ Test all pages and forms
6. ✅ Deploy to Vercel
7. ✅ Configure custom domain
8. ✅ Integrate backend services (when ready)

Happy coding! 🎉

