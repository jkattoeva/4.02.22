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

document.getElementById("hello-world").textContent = "Nice to meet you!";
document.getElementById("hello-world").style.color = "white";
document.getElementById("hello-world").style.background = "blue";