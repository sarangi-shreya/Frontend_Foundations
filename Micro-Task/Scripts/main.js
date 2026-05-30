let buttons = document.querySelectorAll("button"); //Stores all buttons as a list of elements in the variable buttons
let logList = document.querySelector("#log");
let videoFeed = document.querySelector("#videoFeed"); //Stores the video element in the variable videoFeed
let canvas = document.querySelector("#canvas");      //Stores the canvas element in the variable canvas
let snapshot = document.querySelector("#snapshot");  //Stores the img element for snapshot in the variable snapshot
let stream = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let newItem = document.createElement("li");
        newItem.textContent = "Button " + button.textContent + " Clicked";
        logList.appendChild(newItem);

        if (button.id === "startBtn") {
            navigator.mediaDevices.getUserMedia({ video: true }) //Navigator gives info about browser and media
            .then((s) => {                                       //mediaDevices in one of the properties of navigator that gives access to connected medid devices
                stream = s;                                      // Request permission from the user to access camera. If granted, the stream is stored in the variable stream
                videoFeed.srcObject = stream;
            });
        }

        if (button.id === "stopBtn" && stream) {
            stream.getTracks().forEach(track => track.stop());  //Stops all tracks in the stream to stop camera feed
            videoFeed.srcObject = null;
            stream = null;
        }

        if (button.id === "captureBtn") {
            canvas.width = videoFeed.videoWidth;
            canvas.height = videoFeed.videoHeight;
            canvas.getContext("2d").drawImage(videoFeed, 0, 0);
            snapshot.src = canvas.toDataURL("image/png");
            snapshot.style.display = "block";
        }
    });
});
