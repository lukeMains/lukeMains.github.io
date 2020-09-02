/*
 * Author: luke_mains
 * Date: 31 August 2020
 * Copyright:
 */

// Imports

// Global Variables
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let myUser = document.getElementById('username');

// Functions
function switchImage() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/green-shades.png') {
        myImage.setAttribute('src', 'images/red-shades.png');
    } else {
        myImage.setAttribute('src', 'images/green-shades.png');
    }
}

function setUsername() {
    let myName = prompt('Enter username:');
    if(!myName) {
        localStorage.setItem('name', '');
        myUser.innerHTML = '<strong>Username:</strong> ';
    } else {
        localStorage.setItem('name', myName);
        myUser.innerHTML = '<strong>Username:</strong> ' + myName;
    }
}

// Start of main.js
myImage.onclick = function() { switchImage() };
/*myUser.onclick = function() { setUsername() };

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myUser.innerHTML = '<strong>Username:</strong> ' + storedName;
}*/
