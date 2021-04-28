//modules
// const names = require('./name');
// const sayHi = require('./util');
// const data = require('./alternative-flavor');
// console.log(data);

// require('./mind-grenade');
// sayHi('abc');
// sayHi(names.peter);
// sayHi(names.john);


// const os = require('os');

// // info about current user
// const user = os.userInfo();
// console.log(user);

// const currentOs = {
//     name :os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOs);


// const path = require('path');
// console.log(path.sep);
// const filePath = path.join('/content','subfolder', 'text.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder', 'text.txt');
// console.log(absolute);

// const {readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('./content/subfolder/first.txt','utf-8');
// const second = readFileSync('./content/subfolder/text.txt','utf-8');

// writeFileSync('./content/result-sync.txt', `here is the result : ${first},${second} `
// ,
// {flag: 'a'})


// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our home page')
//     } else if(req.url === '/about') {
//         res.end('Here is about section');
//     } else {
//         res.end(`<h1>OOPs!</h1>`)
//     }

// });

// server.listen(5000);


