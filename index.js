const request = require("request-promise");
const cheerio = require("cheerio");
const URL = "https://www.imdb.com/title/tt0102926/";

(async () => {
  const response = await request({
    uri: URL,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-encoding": "gzip, deflate, br",
      "Accept-language": "en-US,en;q=0.9",
      "Cache-control": "no-cache",
      "Upgrade-insecure-requests": "1",
      "User-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
    },
    gzip: true,
  });

  let $ = cheerio.load(response);
  let title = $('div[class="sc-94726ce4-1 iNShGo"] > h1').text();
  //let rate = $('span[class="sc-7ab21ed2-1 jGRxWM"]').text();

  let rate = $(
    'div[data-testid="hero-rating-bar__aggregate-rating__score"]'
  ).text();

  // rate = 8.6/108.6/10
  console.log(rate);
  //console.log(title, rate);
})();
