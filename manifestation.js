let touched = false;

document.addEventListener("mousemove", () => {
  if (!touched) {
    touched = true;
    document.body.classList.add("presence-aware");
  }
});

setTimeout(() => {
  if (!touched) {
    document.body.classList.add("presence-silent");
  }
}, 60000);
