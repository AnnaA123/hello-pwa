"use strict";
window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      const worker = await navigator.serviceWorker.register("./sw.js");
      console.log("Service Worker Registered");
    } catch (e) {
      console.log(e.message);
    }
  }
});

/*
window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};
*/
