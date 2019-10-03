const fs = require('fs');

const dirMaker = require('./GroupStudents');
const infoStudents = require('./infoStudents');

dirMaker('jscx-1800','Barney Stinson');
dirMaker('jscx-2000','Ted Mosby');

let Barney = 'Age: 30, Skill: magic tricks, Work: P.L.E.A.S.E.';
let Ted = 'Age: 28, Skill: drink, Work: architect';

infoStudents('jscx-1800','Barney Stinson',Barney);
infoStudents('jscx-2000','Ted Mosby',Ted);

fs.createReadStream('../images/Barney.png').pipe(fs.createWriteStream('./jscx-1800/Barney Stinson/images.png'));
fs.createReadStream('../images/Ted.jpeg').pipe(fs.createWriteStream('./jscx-2000/Ted Mosby/images.jpeg'));




