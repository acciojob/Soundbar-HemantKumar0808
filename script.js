const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

// Create sound buttons
sounds.forEach(sound => {
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = sound;

    button.addEventListener("click", () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });

    buttonsContainer.appendChild(button);
});

// Create Stop button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "stop";

stopButton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

buttonsContainer.appendChild(stopButton);