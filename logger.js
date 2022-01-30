// const fs = require(`fs`);

// const readStream = fs.createReadStream(`./docs/blog2.txt`, {
//   encoding: `utf8`,
// });
// const writeStream = fs.createWriteStream(`./docs/blog3.txt`, {
//   encoding: `utf8`,
// });
// // readStream.on(`data`, (chunk) => {
// //   console.log(`---------new--------`);
// //   console.log(chunk);
// //   writeStream.write(`\n new chunk\n`);
// //   writeStream.write(chunk);
// // });

// readStream.pipe(writeStream);
const express = require(`express`);
//express app
const app = express();
//listen for req
app.listen(3001);
app.get(`/`, (req, res) => {
  res.send(`<p> home page</p>`);
});
