# My Portfolio Website 🚀

A professional, modern, and fully responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
🎨 **Professional Styling** - Clean, modern interface with a professional color scheme
📱 **Mobile Menu** - Hamburger menu for mobile navigation
⚡ **Smooth Scrolling** - Smooth transitions between sections
📝 **Contact Form** - Functional contact form with validation
🔍 **SEO Optimized** - Proper meta tags and semantic HTML
🎯 **Multiple Sections** - About, Projects, Certificates, and Contact sections
🌐 **Social Links** - Easy integration with GitHub, LinkedIn, Twitter, and Instagram

## Project Structure

```
my-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Getting Started

### 1. Edit Your Information

Open `index.html` and replace the following placeholder text with your information:

- **Your Name** - Replace "Your Name" in the hero section
- **Subtitle** - Update the professional description
- **About Section** - Add your personal bio and skills
- **Projects** - Add your 3 main projects with descriptions
- **Certificates** - List your certificates and achievements
- **Contact Info** - Add your email, phone, and location
- **Social Links** - Update GitHub, LinkedIn, Twitter, Instagram URLs

### 2. Key Sections to Customize

#### Hero Section (Top Banner)
```html
<h1>Your Name</h1>
<p class="subtitle">Your Professional Title Here</p>
```

#### About Section
- Update your bio in the "about-text" div
- Modify the skill tags in the "skill-list" div

#### Projects Section
- Add/remove project cards as needed
- Update project names, descriptions, technologies, and links
- Add your GitHub and live project links

#### Certificates Section
- Add your certificates with issuing organization and date
- Replace certificate links with actual certificate URLs

#### Contact Section
- Update email: `mailto:your.email@example.com`
- Update phone: `tel:+1234567890`
- Update location
- Update social media links

## How to View Locally

1. **Using Live Server (VS Code)**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   - Your portfolio will open in your browser at `http://localhost:5500`

2. **Using Python (if installed)**
   ```bash
   # Python 3.x
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Using Node.js (if installed)**
   ```bash
   npx http-server
   ```

4. **Direct File Opening**
   - Simply double-click `index.html` to open in your browser

## Customization Guide

### Colors
You can change the color scheme by editing the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #1e3c72;      /* Main blue color */
    --secondary-color: #2a5298;    /* Secondary blue */
    --accent-color: #00d4ff;       /* Cyan accent */
    --text-color: #333;            /* Text color */
    --light-bg: #f5f5f5;           /* Light background */
}
```

### Fonts
To change the font family, update the `body` rule in `css/styles.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Adding More Sections
1. Add a new `<section>` in `index.html`
2. Add corresponding CSS in `css/styles.css`
3. Add navigation link in the navbar

### Adding More Projects
Copy and paste a project card in the Projects section:

```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description here</p>
    <div class="project-tech">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/yourprojects" target="_blank">
            <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://yourproject.com" target="_blank">
            <i class="fas fa-external-link-alt"></i> Live
        </a>
    </div>
</div>
```

## Contact Form Notes

The contact form includes client-side validation for:
- Empty fields
- Valid email format

⚠️ **Important**: Currently, the form displays a success message but doesn't actually send emails. To enable email functionality, you'll need to:

1. **Use a Backend Service** like:
   - EmailJS (free, client-side email service)
   - Formspree (form submission service)
   - Your own backend API

2. **Example with EmailJS**:
   ```javascript
   // Add EmailJS script to index.html
   // Then use EmailJS SDK to send emails
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization Tips

1. Update the `<title>` tag in `index.html`
2. Add a `<meta name="description">` tag
3. Update Open Graph meta tags for social sharing
4. Add a `robots.txt` file if deploying
5. Ensure all links are working

## Deployment Options

### Free Hosting Services

1. **GitHub Pages**
   - Push your files to a GitHub repository
   - Enable GitHub Pages in settings
   - Your site will be live at `https://yourusername.github.io/my-portfolio`

2. **Netlify**
   - Drag and drop your folder to Netlify.com
   - Done! Your site goes live instantly

3. **Vercel**
   - Import your GitHub repository
   - Automatic deployments on every push

4. **Firebase Hosting**
   - Install Firebase CLI
   - Run `firebase deploy`

## Tips for a Great Portfolio

✅ **Keep it clean and professional**
✅ **Use high-quality project images/descriptions**
✅ **Ensure all links work correctly**
✅ **Test on mobile devices**
✅ **Use clear, concise writing**
✅ **Highlight your best 3-5 projects**
✅ **Include technologies/skills you're proficient in**
✅ **Update regularly with new projects**

## Resources

- **Font Awesome Icons**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/
- **Web Accessibility**: https://www.w3.org/WAI/

## License

Feel free to use this template for your portfolio. Customize it as you wish!

## Support

If you have questions or issues:
1. Check the HTML/CSS/JS for typos
2. Open browser Developer Tools (F12) to check for errors
3. Ensure all files are in the correct directories

---

Happy building! 🎉 Make your portfolio stand out and showcase your amazing work!
