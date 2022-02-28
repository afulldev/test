var request = new XMLHttpRequest()

request.open('GET', 'https://api.adviceslip.com/advice', true)


request.onload = function () {
// Begin accessing JSON data here
 var data = JSON.parse(this.response)

const collection_id = document.getElementsByClassName("advice__id")
collection_id[0].innerHTML = data.slip.id;

const collection = document.getElementsByClassName("advice__content")
collection[0].innerHTML = data.slip.advice;
}

// document.querySelector('.next__button').addEventListener("click", clickDemo)
// function clickDemo(){
//  console.log("Hi there")
 
//}

request.send()