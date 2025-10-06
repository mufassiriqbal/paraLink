let blinkCount = 0;
let lastBlinkTime = 0;
let calibrationClicks = 0;

function speak(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

function detectBlink(prediction) {
  if (!prediction) return false;
  let leftEAR = prediction.eyeLeft ? prediction.eyeLeft.height : 0;
  let rightEAR = prediction.eyeRight ? prediction.eyeRight.height : 0;
  if (leftEAR + rightEAR < 6) {
    const now = Date.now();
    if (now - lastBlinkTime > 200) {
      blinkCount++;
      lastBlinkTime = now;
      if (blinkCount >= 3) {
        blinkCount = 0;
        return true;
      }
    }
  }
  return false;
}

window.onload = async function() {
  await webgazer.setRegression('ridge')
               .setTracker('clmtrackr')
               .begin();

  webgazer.showVideoPreview(false).showPredictionPoints(true);

  // Calibration
  const points = document.querySelectorAll(".calib-point");
  const startBtn = document.getElementById("startBtn");

  points.forEach(p => {
    p.addEventListener("click", () => {
      calibrationClicks++;
      p.style.background = "green";
      webgazer.recordScreenPosition(p.offsetLeft, p.offsetTop, 'click');
      if (calibrationClicks >= 9) {
        startBtn.style.display = "block";
      }
    });
  });

  startBtn.onclick = () => {
    document.getElementById("calibration").style.display = "none";
    document.getElementById("board").style.display = "grid";

    const icons = document.querySelectorAll(".icon");
    let focusedIcon = null;

    setInterval(() => {
      webgazer.getCurrentPrediction().then(prediction => {
        if (!prediction) return;
        const x = prediction.x, y = prediction.y;
        focusedIcon = null;

        icons.forEach(icon => {
          const rect = icon.getBoundingClientRect();
          if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
            icon.classList.add("active");
            focusedIcon = icon;
          } else {
            icon.classList.remove("active");
          }
        });

        if (detectBlink(prediction) && focusedIcon) {
          generateResponse(focusedIcon.dataset.text).then(finalText => {
            speak(finalText);
          });
        }
      });
    }, 200);
  };
};
