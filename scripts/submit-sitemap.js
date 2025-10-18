// Submit sitemap to Google
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

// You'll need to set up these environment variables
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SITE_URL = 'https://houseofwellnessbyn.com';

async function submitSitemap() {
  try {
    // Submit sitemap to Google
    const googleUrl = `https://www.googleapis.com/indexing/v3/urlNotifications:publish?key=${GOOGLE_API_KEY}`;
    const googleSitemapUrl = `${SITE_URL}/sitemap.xml`;
    
    console.log(`Submitting sitemap to Google: ${googleSitemapUrl}`);
    
    const response = await fetch(googleUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: googleSitemapUrl,
        type: 'URL_UPDATED'
      })
    });
    
    const data = await response.json();
    console.log('Google response:', data);
    
    console.log('Sitemap submission complete!');
  } catch (error) {
    console.error('Error submitting sitemap:', error);
  }
}

submitSitemap();
