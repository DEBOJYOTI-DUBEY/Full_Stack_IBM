document.getElementById("parent").style.backgroundColor ="yellow"
document.getElementById("parent").style.border="5px solid black"
document.getElementById("parent").style.height="300px"
document.getElementById("parent").style.width="100%"

let element = document.createElement("Button")
element.innerText = "submit"
element.style.backgroundColor = "red"
element.style.padding = "10px"
document.getElementById("parent").append(element)

var num = 10;
console.log(num)

num = 15
console.log(num)

function myfunction(){
    console.log(num)
}

myfunction()
console.log(num)

