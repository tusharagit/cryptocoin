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
      "name": "tushara-theme" ,     
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "articles",
              "/articles/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }      
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://tyserwork.wordpress.com/",
          "postsPage":"/articles/"         
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
