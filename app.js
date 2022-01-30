// // const fs = require(`fs`);

// // //reading files
// // // fs.readFile(`./docs/blog1.txt`, (err, data) => {
// // //   if (err) {
// // //     console.log(err);
// // //   }
// // //   console.log(data.toString());
// // // });

// // // console.log("last line");

// // //writing files
// // // fs.writeFile(`./docs/blog1.txt`, `hello,world`, () => {
// // //   console.log("file was written");
// // // });
// // // fs.writeFile(`./docs/blog2.txt`, `hello,agine`, () => {
// // //   console.log("file was written");
// // // });
// // //directories
// // // if (!fs.existsSync(`./assets`)) {
// // //   fs.mkdir(`./assets`, (err) => {
// // //     if (err) {
// // //       console.log(err);
// // //     }
// // //     console.log(`folder created`);
// // //   });
// // // } else {
// // //   fs.rmdir(`./assets`, (err) => {
// // //     if (err) {
// // //       console.log(err);
// // //     }
// // //     console.log(`folder deleted`);
// // //   });
// // // }
// // //deleting files
// // if (fs.existsSync(`./docs/deletme.txt`)) {
// //   fs.unlink(`./docs/deletme.txt`, (err) => {
// //     if (err) {
// //       console.log(err);
// //     }
// //     console.log(`file deleted`);
// //   });
// // }

// const http = require(`http`);
// const _ = require("lodash");
// const fs = require(`fs`);
// // const server = http.createServer((req, res) => {
// //   // const num = _.random(0, 20);
// //   // console.log(num);
// //   // console.log("request made");
// //   console.log(req.url, req.method);
// //   //set header content type
// //   res.setHeader(`Content-Type`, `text/plain`);
// //   res.write(`hello, ninjas`);
// //   res.end();
// // });

// // server.listen(3001, `localhost`, () => {
// //   console.log(`listenung for request on 3001`);
// // });
// const server = http.createServer((req, res) => {
//   const num = _.random(0, 20);
//   console.log(num);

//   const greet = _.once(() => {
//     console.log(`helo`);
//   });
//   greet();
//   greet();
//   console.log(req.url, req.method);

//   //set header content type
//   res.setHeader(`Content-Type`, `text/html`);

//   let path = `./views/`;
//   switch (req.url) {
//     case `/`:
//       path += `index.html`;
//       res.statusCode = 200;
//       break;
//     case `/about`:
//       path += `about.html`;
//       res.statusCode = 200;
//       break;
//     case `/about-me`:
//       res.statusCode = 301;
//       res.setHeader(`Location`, `/about`);
//       res.end();
//       break;
//     default:
//       path += `404.html`;
//       res.statusCode = 404;
//       break;
//   }

//   //send an html file
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       // res.write(data);

//       res.end(data);
//     }
//   });

//   // res.write(`<head><link rel="styleseet" herf="#"></head>`);
//   // res.write(`<p>hello, ninjas</p>`);
//   // res.write(`<p>hello again, ninjas</p>`);
//   // res.end();
// });

// server.listen(3001, `localhost`, () => {
//   console.log(`listenung for request on 3001`);
// });

// readStream.pipe(writeStream);
const express = require(`express`);
//express app
const app = express();
//listen for req
app.listen(3001);
app.get(`/`, (req, res) => {
  res.send(`<p> home pag</p>`);
});
app.listen(3001, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
