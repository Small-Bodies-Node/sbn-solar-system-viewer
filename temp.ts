import axios from 'axios';

const d = new Date();
const myprint = (...msg: any[]) => {
  const newD = new Date();
  console.log('>>>', +newD - +d, '>>>', ...msg);
};

async function main() {
  // --->>

  process.env.UV;
  const urls: string[] = [...new Array(700)].map(_ => 'https://www.google.com');

  myprint(...urls);

  const results = await Promise.all(
    urls.map(url => {
      return axios.get(url).then(_ => _.status);
    })
  );

  myprint(...results);
}

main();
