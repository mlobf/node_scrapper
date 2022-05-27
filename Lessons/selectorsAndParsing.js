const request = require("request-promise");
const cheerio = require("cheerio");
const URL = "https://www.imdb.com/title/tt0102926/";

/*
    Using JQuery selector to find elements to 
        scrapping.


    Todo
        1-Get the movie poster.
        2-
*/

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
    // To solve GZIP problem
    gzip: true,
  });

  let $ = cheerio.load(response);
  let title = $('div[class="sc-94726ce4-1 iNShGo"] > h1').text().trim();

  let rate = $('div[data-testid="hero-rating-bar__aggregate-rating__score"]')
    .text()
    .trim();

  let poster = $(
    'div[class="ipc-media ipc-media--poster-27x40 ipc-image-media-ratio--poster-27x40 ipc-media--baseAlt ipc-media--poster-l ipc-poster__poster-image ipc-media__img"] > img'
  )
    .attr("src")
    .trim();

  let rating = $('div[class="sc-7ab21ed2-3 dPVcnq"]').valueOf().text();

  let releaseDate = $(
    'a[class="ipc-link ipc-link--baseAlt ipc-link--inherit-color sc-8c396aa2-1 WIUyh"]'
  )
    .text()
    .trim();

  const arrMovieGender = [];

  let movieGender = $(
    'li[class="ipc-inline-list__item ipc-chip__text"]'
  ).text();

  movieGender = movieGender.split(" ")[0];

  console.log("movie gender =====> ", movieGender);

  // ipc-inline-list__item ipc-chip__text
  // ipc-inline-list__item ipc-chip__text
  /*
  console.log("==========");
  console.log("The title ->", title);
  console.log("The rate ->", rate);
  console.log("The Poster ->", poster);
  console.log("==========");
  console.log("The rating ->", rating);
  console.log("==========");
  console.log("The release Date ->", releaseDate);
  */
})();
