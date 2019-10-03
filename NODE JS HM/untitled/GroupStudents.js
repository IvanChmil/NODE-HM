const fs = require('fs');

function timeStudent(group,student) {

    fs.mkdir(`./${group}`,err => {
        if(!err){
            console.log("Group created")
        }
    });

    fs.mkdir(`./${group}/${student}`,err => {
        if(!err){
            console.log("Student created")
        }
    })
}

module.exports= timeStudent;