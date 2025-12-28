function getGreetingByTime(hours) {
  if (hours < 12) return "Good morning";
  if (hours < 18) return "Good afternoon";
  return "Good evening";
}

function formatDateNow() {
  const now = new Date();
  return now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function typeText(el, text, speed = 35) {
  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i += 1;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

(function init() {
  const greetingEl = document.getElementById("greeting");
  const dateLineEl = document.getElementById("dateLine");
  const yearEl = document.getElementById("year");

  const now = new Date();
  const greeting = `${getGreetingByTime(now.getHours())}, Farhan 👋`;

  dateLineEl.textContent = formatDateNow();
  yearEl.textContent = String(now.getFullYear());

  typeText(greetingEl, greeting);
})();
