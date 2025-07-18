let celebrated = false;

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

  $("#clock").text(time);
  $("#date").text(date);
}

function updateCountdown(targetDate, message, elementId) {
  const now = new Date();
  const diff = targetDate - now;
  const $element = $("#" + elementId);

  if (diff <= 0 && !celebrated) {
    $element.text(message).addClass("celebrate");
    const $sound = $("#celebrate-sound");
    if ($sound.length) $sound[0].play();
    celebrated = true;
    return;
  }

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    $element.text(
      `الوقت المتبقي: ${days} يوم، ${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية`
    );
  }
}

const countdowns = [
  {
    date: new Date("2025-09-05T00:00:00"),
    message: "تيمبليكس",
    elementId: "countdown-championship",
  },
  {
    date: new Date("2025-10-16T00:00:00"),
    message: "💍 تم عقد الزواج! ألف مبروك!",
    elementId: "countdown-wedding",
  },
  {
    date: new Date("2025-09-19T00:00:00"),
    message: "💍 تم عقد القران! ألف مبروك!",
    elementId: "countdown-contract",
  },
  {
    date: new Date("2025-06-06T00:00:00"),
    message: "🎉 عيد الأضحى قد حل! كل عام وأنتم بخير!",
    elementId: "countdown-eid",
  },
];

// تحديث جميع العد التنازلي
function updateAllCountdowns() {
  countdowns.forEach(({ date, message, elementId }) => {
    updateCountdown(date, message, elementId);
  });
}

//  play
setInterval(() => {
  updateClock();
  updateAllCountdowns();
}, 1000);

// play first
$(document).ready(() => {
  updateClock();
  updateAllCountdowns();
});

// play
setInterval(() => {
  updateClock();
  updateAllCountdowns();
}, 1000);
