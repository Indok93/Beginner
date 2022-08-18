const myApp = document.getElementById("app");
const newDiv = document.createElement("div");

console.log(newDiv);
console.log(myApp);

newDiv.innerHTML = "<h1>hellow world</h1>"

myApp.appendChild(newDiv);