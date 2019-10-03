const fs = require('fs');

function addInfo(group,student,data) {
    fs.writeFile(`./${group}/${student}/info.txt`, data, err => {
        if (!err) {
            console.log('info write');
        }
})}
module.exports = addInfo;




