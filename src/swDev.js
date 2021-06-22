/**
 * generate vapid public key
 * @returns
 */
function determineAppServerKey() {
  const vapidPublicKey =
    "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
  return urlBase64ToUint8Array(vapidPublicKey);
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
export default function swDev() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  //Register service worker
  navigator.serviceWorker
    .register(swURL)
    .then((response) => {
      console.log("response", response);
      return response.pushManager.getSubscription().then((subscription) => {
        response.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey(),
        });
      });
    })
    .catch((e) => {
      console.log("error", e);
    });
}
