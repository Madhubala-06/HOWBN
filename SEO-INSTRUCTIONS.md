# Google Search Engine Optimization Guide for House of Wellness BYN

**Note: This guide has been updated to reflect your site's structure with sections on the homepage rather than separate pages.**

This guide will help you complete the setup for Google Search Console and improve your website's visibility in search results.

## What's Been Implemented

✅ Enhanced metadata with comprehensive SEO information  
✅ Added structured data (JSON-LD) for better search result presentation  
✅ Improved sitemap configuration for optimal crawling  
✅ Created comprehensive meta descriptions for each page  
✅ Set up proper canonical URLs to prevent duplicate content  
✅ Updated robots.txt for better crawl efficiency  
✅ Created Google Search Console verification file  
✅ Added sitemap submission script  

## Next Steps to Complete

### 1. Set Up Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Select "URL prefix" and enter your website URL: `https://houseofwellnessbyn.com/`
4. For verification, choose "HTML file" method
5. Download the HTML verification file from Google
6. Replace the content in `/public/google-site-verification.html` with the correct verification code
7. Deploy your website with the updated verification file
8. Complete verification in Google Search Console

### 2. Submit Your Sitemap

After verifying your site in Google Search Console:

1. In the left sidebar, click "Sitemaps"
2. Enter `sitemap.xml` in the field and click "Submit"
3. Google will now periodically crawl your sitemap

### 3. Get Google API Key for Automated Submission (Optional)

For automatic sitemap submission:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project for your website
3. Enable the "Indexing API" for your project
4. Create API credentials (API key)
5. Create a `.env` file at the root of your project
6. Add your API key: `GOOGLE_API_KEY=your_key_here`

Then run:

```bash
npm install dotenv node-fetch
npm run submit-sitemap
```

### 4. Monitor Search Performance

Once your site is verified:

1. Wait a few days for Google to index your content
2. Check "Performance" in Google Search Console to see:
   - Search impressions and clicks
   - Which queries bring users to your site
   - Which pages get the most traffic
3. Address any crawl errors that appear in the "Coverage" section

## Ongoing SEO Maintenance

- Keep your content fresh and regularly updated
- Add new blog posts at least monthly
- Check Google Search Console weekly for any issues
- Re-submit your sitemap after major content changes
- Use descriptive, keyword-rich titles for all new pages and blog posts

---

For additional help, consider consulting an SEO specialist or contact the website developer for assistance.
