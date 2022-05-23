const request = require("request-promise");
const cheerio = require("cheerio");
const URL = "https://www.imdb.com/title/tt0102926/";

(async () => {
  //const response = await request(URL);

  const response = await request({
    uri: url,
    headers: {
      "User-Agent": "Request-Promise",
    },
  });

  let $ = cheerio.load(response);
  // class sc-94726ce4-1 iNShGo
  let title = $('div[class="sc-94726ce4-1 iNShGo"] > h1').text();
  console.log(title);
  let rate = $('span[class="sc-7ab21ed2-1 jGRxWM"]').text();
  console.log(rate);
})();
