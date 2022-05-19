const request = require("request-promise");
const cheerio = require("cheerio");
const URL = "https://www.imdb.com/title/tt0102926/";

(async () => {
  const response = await request(URL);

  console.log(response);
})();
