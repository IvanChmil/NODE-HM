const fs = require('fs');

function timeStudent(time,student) {

    fs.mkdir(`./${time}`,err => {
        if(!err){
            console.log("Group created")
        }
    });

    fs.mkdir(`./${time}/${student}`,err => {
        if(!err){
            console.log("Student created")
        }
    })
}

module.exports= timeStudent;
