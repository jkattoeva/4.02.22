var vasya = {
  name: "Vasiliy",
  lastName: "Petrovskiy",
  age: 25,
  hobbies: {
    art: "drawing, singing",
    display: function() {
      document.write(`I love ${this.art}.`);
    },
  },
  greet: function() { //method
    document.write(`Hello , my name is ${this.name}! I'm ${this.age} years old . <br>`);
  }
}

// vasya.greet();
// vasya.hobbies.display();

// 1. Call 'greet' method multiple times.

// 2. Include age in the greeting.
// 2. Try changing name and age.
// 4. Create method 'bye'.



// document.body.style.background = "red"; 
// document.body.textContent = "Hello world";

// document.getElementById("hello-world").textContent = "Nice to meet you!";
// document.getElementById("hello-world").style.color = "white";
// document.getElementById("hello-world").style.background = "blue";


// getElementById 
let helloWorldDiv = document.getElementById("hello-world");

helloWorldDiv.textContent = "Nice to meet you!";
helloWorldDiv.style.background = "green";
helloWorldDiv.style.color = "white";
helloWorldDiv.style.textDecoration = "underline";
helloWorldDiv.style.fontSize = "28px";


// getElementByTagName
let allParagraphs =  document.getElementsByTagName("P");

for (let paragraph of allParagraphs) {
  paragraph.style.backgroundColor = "blue";
  paragraph.style.color = "yellow";
  paragraph.style.fontWeight = "bold";
  paragraph.style.fontSize = "18px";

}

//getElementsByClassName
// italic

//  document.getElementsByClassName("hello-world");

// // for (let helloWorld of /*allHelloWorlds*/) {
// //   helloWorld.style.backgroundColor = "yellow";
// //   helloWorld.style.color = "red";
// //   helloWorld.style.fontStyle = "italic";
  
// }
//querySelector
let helloWorld2 = document.querySelector("#hello-world");
helloWorld2.style.backgroundColor = "purple";

//querySelectorAll
let allHelloWorlds2 = document.querySelectorAll(".hello-world");

for (let helloWorld of allHelloWorlds2) {
  helloWorld2.style.fontSize = "15px"
}

document.querySelector('p:first-of-type').textContent = "HELLO";


