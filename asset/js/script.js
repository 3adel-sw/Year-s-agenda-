// Clock and Date
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("ar-EG", options);

  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
