export default function swDev() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  //Register service worker
  navigator.serviceWorker
    .register(swURL)
    .then((result) => {
      console.log("result", result);
    })
    .catch((e) => {
      console.log("error", e);
    });
}
