/**
 * Created by Роман on 05.08.2017.
 */
var percents = 100;
var finished = false;
var progressBar = document.querySelector(".loadLine");
var img = document.querySelector("img");
var paragraph = document.querySelector("p");
var article = document.querySelector("article");
var button = document.querySelector(".action");

function onRejected() {
    console.log("Sorry, something went wrong");
}

function countBack() {
    if (percents > 0) {
        percents--;
        progressBar.style.width = percents + "%";
    }
}

function reverseCounter() {
    setInterval(countBack, 50);
}

function onFinish() {
    finished = true;

    var prom = new Promise(function(resolve, reject) {
        if (finished === true) {
            resolve();
        } else {
            reject();
        }
    });

    prom
        .then(firstMethod)
        .then(secondMethod)
        .then(thirdMethod)
        .catch(onRejected);
}

function rem(el) {
    el.remove();
}

var firstMethod = function() {
    var promise = new Promise(function(resolve, reject) {});

    promise.then(rem(img));
};

var secondMethod = function() {
    var promise = new Promise(function(resolve, reject) {});

    promise.then(rem(paragraph));
};

var thirdMethod = function() {
    var promise = new Promise(function(resolve, reject) {});

    promise.then(rem(article));
    button.remove();
};

progressBar.addEventListener("transitionend", onFinish);

button.addEventListener("click",reverseCounter);
