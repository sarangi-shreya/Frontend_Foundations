let buttons = document.querySelectorAll("button");  //Returns list of all 3 three buttons.
let logList = document.querySelector("#log");

buttons.forEach((button) => {       //Used to loop through each button and add event listener to it.
    button.addEventListener("click", () => {
        let newItem = document.createElement("li");
        newItem.textContent = "Button " + button.textContent + " Clicked";
        logList.appendChild(newItem);
    });
});