const settings = {
  "name": "cryptocoinbazar",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "tushara-theme" 
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://tyserwork.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
