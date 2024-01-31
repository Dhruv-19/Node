const oS= require('os');

//Info for current user

const user= oS.userInfo();

console.log(user);

//Method returns the uptime of user

console.log(`system uptime is ${oS.uptime} Seconds`);

const Currensys={
    name: oS.type(),
    relese: oS.release(),
    Totalmem: oS.totalmem(),
    FreeMem: oS.freemem(),
}
console.log(Currensys);

const path= require('path');
const filepath= path.join('/content', 'subfoldeer/', 'text.txt')
console.log(filepath);

const base=path.basename(filepath);
console.log(base);

const absolute= path.resolve(__dirname,'content','subfoldeer','text.txt');
console.log(absolute);