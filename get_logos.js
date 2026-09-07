const fs = require('fs');
const https = require('https');

async function getWikiImage(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`;
  const res = await fetch(url);
  const json = await res.json();
  const pages = json.query.pages;
  const pageId = Object.keys(pages)[0];
  console.log(title + ': ' + (pages[pageId].thumbnail ? pages[pageId].thumbnail.source : 'None'));
}

(async () => {
  await getWikiImage('Harvard_University');
  await getWikiImage('University_of_Oxford');
  await getWikiImage('Stanford_University');
  await getWikiImage('Massachusetts_Institute_of_Technology');
  await getWikiImage('University_of_Toronto');
  await getWikiImage('Imperial_College_London');
  await getWikiImage('University_of_Melbourne');
  await getWikiImage('ETH_Zurich');
})();
