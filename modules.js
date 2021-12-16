// const os = require("os");

// info about current user

// const user = os.userInfo();

// console.log(user);

//returns syste uptime in secs

// console.log(os.uptime());

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMEM: os.totalmem(),
//   freeMEM: os.freemem(),
// };

// console.log(currentOS);

// const path = require("path");

// console.log(path.sep);

// const filepath = path.join("/content", "subfolder", "test.txt");

// console.log(filepath);

// const base = path.basename(filepath);

// console.log(base);

// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

// console.log(absolute);

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

// writeFileSync(
//   "./content/result-sync.txt",
//   `here is the result ${first}, ${second}`,
//   { flag: "a" }
// );

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first}, ${second}`,
//       { flag: "a" },
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Yo!");
  } else if (req.url === "/about") {
    res.end("ABout");
  } else {
    res.end(`<h1>Oops!</h1>
  <p>can't find page</p>
  <a href = "/">home</a>`);
  }

  // res.write("Hello server");
  // res.end();
});

server.listen(5000);
