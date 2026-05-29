const myImage = document.querySelector("img");    //Stored the reference to the image element in a variable called myImage

myImage.addEventListener("click", () => {     //assigned it a click event handler function
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/moon_img.jpeg") {
    myImage.setAttribute("src", "images/moon_img1.jpg");
  } else {
    myImage.setAttribute("src", "images/moon_img.jpeg");
  }
});

let myButton = document.querySelector("button"); //Storing reference of <button> tag
console.log(myButton);
let myHeading = document.querySelector("h1");   //Storing reference of <h1> tag

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
  return; // just do nothing if cancelled
    }
  else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}

//localStorage saves small pieces of text that persist even after the browser is closed. 
// The setUserName() function prompts the user to enter their name, and if they do, it saves that name in localStorage and updates the heading text to include the user's name. 
// When the page loads, it checks if a name is already stored in localStorage and updates the heading accordingly.
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});