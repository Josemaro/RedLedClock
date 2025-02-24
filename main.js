document.body.style.backgroundColor = "black";
const container = document.getElementById("container");
container.style.color = "red";
container.style.textShadow = "0 0 5px red";

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = timeString;
  styleColons();
}

function updateDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const timezoneOffset = now.getTimezoneOffset();
  const gmtOffset = timezoneOffset / 60;
  const gmtString = `GMT${gmtOffset >= 0 ? "-" : "+"}${Math.abs(gmtOffset)}`;
  const dateString = `${day}/${month}/${year}`;

  document.getElementById("date").textContent = dateString;
  document.getElementById("gmt").textContent = gmtString;
}

function styleColons() {
  const clockElement = document.getElementById("clock");
  const timeString = clockElement.textContent;
  const styledTimeString = timeString.replace(
    /:/g,
    '<span style="letter-spacing: 0;">:</span>'
  );
  clockElement.innerHTML = styledTimeString;
}

document
  .getElementById("switchBackgroundButton")
  .addEventListener("click", function () {
    const body = document.body;
    if (body.style.backgroundColor === "black") {
      body.style.backgroundColor = "white";
    } else {
      body.style.backgroundColor = "black";
    }
  });

document.getElementById("switchColor").addEventListener("click", function () {
  const container = document.getElementById("container");
  if (container.style.color === "red") {
    container.style.color = "limegreen";
    container.style.textShadow = "0 0 5px limegreen";
  } else {
    container.style.color = "red";
    container.style.textShadow = "0 0 5px red";
  }
});

setInterval(updateDate, 1000 * 60 * 60 * 24);
setInterval(updateTime, 1000);
updateTime();
updateDate();
