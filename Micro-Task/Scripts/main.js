let buttons = document.querySelectorAll("button");
let logList = document.querySelector("#log");
let videoFeed = document.querySelector("#videoFeed");
let canvas = document.querySelector("#canvas");
let snapshot = document.querySelector("#snapshot");
let stream = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let newItem = document.createElement("li");
        newItem.textContent = "Button " + button.textContent + " Clicked";
        logList.appendChild(newItem);

        if (button.id === "startBtn") {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then((s) => {
                stream = s;
                videoFeed.srcObject = stream;
            });
        }

        if (button.id === "stopBtn" && stream) {
            stream.getTracks().forEach(track => track.stop());
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
