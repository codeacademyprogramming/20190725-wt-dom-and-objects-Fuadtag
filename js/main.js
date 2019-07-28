"use strict";


let inputs = document.getElementsByClassName("students");
let students = [];
let trow = "";
let tsrow = "";
let scorerow = "";

function Student(name, surname, email, birthday, score) {
    this.name = name,
        this.surname = surname,
        this.email = email,
        this.birthday = birthday,
        this.score = []
}
this.getAverageScore = function() {
    let average = 0;
    if (this.scores.length > 0) {
        for (let i = 0; i < this.scores.length; i++) {
            average += this.scores[i];
        }
        average = average / this.scores.length;
    }
    return average;
};


function generateTableItems(value) {
    trow += `<tr><td>${value.name}</td><td>${value.surname}</td><td>${value.email}</td><td>${value.birthday}</td></tr>`
}

function generateScoreTable(value) {
    tsrow += `<tr><td>${students.name}</td><td>${students.score}</td></tr>`
}

function fillTable(value) {
    students.forEach(generateTableItems);
    reset()
}




function reset() {

    document.getElementById("tablebody").innerHTML = trow;
    trow = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";


}
let student;

function getStudentsinfo(value) {

    student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);

    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
        students.push(student);
        students.forEach(generateTableItems);



    } else {
        alert("error")
    }

    reset()
}

function getStudentsScore(student) {
    let val = document.getElementById("check-email").value;

    let score = document.getElementById("add-score").value;
    for (let i = 0; i < students.length; i++) {
        if (student[i].email.toLowerCase() == val.toLowerCase()) {
            student.push(score);
            student.forEach(generateScore);
            resetscore()
        }
    }

}

function generateScore() {
    trow += `<tr><td>${students.name}</td><td>${students.score}</td></tr>`
}

function resetscore() {

    document.getElementById("table-bodyfirst").innerHTML = tsrow;
    tsrow = "";
    inputs[0].value = "";
    inputs[1].value = "";
}