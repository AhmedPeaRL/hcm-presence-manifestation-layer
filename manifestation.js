const input = document.getElementById("signal");
const manifestation = document.getElementById("manifestation");

const STORAGE_KEY = "hcm_presence_log";

function loadLog() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveLog(entry) {
  const log = loadLog();
  log.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}

function manifest(text) {
  manifestation.textContent = text;
  manifestation.classList.add("visible");
  setTimeout(() => {
    manifestation.classList.remove("visible");
  }, 6000);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    const entry = {
      type: "encounter",
      content: input.value.trim(),
      timestamp: new Date().toISOString()
    };

    saveLog(entry);

    manifest("أُخذ الأثر.");
    input.value = "";
  }
});
