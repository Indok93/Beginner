const myApp = document.getElementById("app");
const newHeader = document.createElement("header");

console.log(newHeader);
console.log(myApp);

newHeader.innerHTML = "<h1>hellow world</h1>"

myApp.appendChild(newHeader);