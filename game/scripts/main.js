function fadeInText(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.opacity = 0;
    let o = 0;
    const i = setInterval(() => {
      o += 0.02;
      el.style.opacity = o;
      if (o >= 1) clearInterval(i);
    }, 50);
  }
  
  window.onload = () => fadeInText("p");