const myApp = document.getElementById("app");
const newH1 = document.createElement("h1");

console.log(newH1);
console.log(myApp);

newH1.innerHTML = "<h1>hellow world</h1>"

myApp.appendChild(newH1);