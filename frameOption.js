// require('@electron/remote/main').initialize()
// const { remote } = require('electron')

document.getElementById("close").addEventListener("click", ()=> window.close());
document.getElementById("minimise").addEventListener("click", ()=> window.minimize());
// function closeWindow() {
//   let window = remote.getCurrentWindow();
//   window.close();
// }
// function minimizeWindow() {
//   let window = remote.getCurrentWindow();
//   window.minimize();
// }
// console.log(remote);
// export const win = {
//  close: document.querySelector("#close"),
//  min: document.querySelector("#minimise")
// }
