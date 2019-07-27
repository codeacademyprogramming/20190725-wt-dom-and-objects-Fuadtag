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

function generateTableItems(value) {
    trow += `<tr><td>${value.name}</td><td>${value.surname}</td><td>${value.email}</td><td>${value.birthday}</td></tr>`
}

// function generateScoreTable(value) {
//     tsrow += `<tr><td>${students.name}</td><td>${students.score}</td></tr>`
// }

function fillTable(value) {
    students.forEach(generateTableItems);
    reset()
}




function reset() {
    document.getElementById("tablebody").innerHTML = trow;
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";

}

function getStudentsinfo(value) {

    let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);

    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
        students.push(student);
        students.forEach(generateTableItems);
        reset()
        return
    } else {
        alert("error")
    }

}

function getStudentsScore(value) {
    let inputscore = document.getElementById("add-score");
    let getemail = document.getElementById("check-email");
    let scoretable = document.getElementById("table-bodyfirst")
    if (students.find(getemail)) {
        scoretable.innerHTML = `<tr><td>${students.name}</td><td>${inputscore}</td></tr>`
    }

}