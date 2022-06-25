// https://api.adviceslip.com/advice

// connect to api by xmlrequest
// let myreq = new XMLHttpRequest();
// myreq.open("GET", "https://api.adviceslip.com/advice");
// myreq.send();
// myreq.onload = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(myreq.responseText);
//   }
// };

// connect to api by promise
// let mypromReq = (api) =>
//   new Promise((res, rej) => {
//     let myreq = new XMLHttpRequest();
//     myreq.open("GET", api);
//     myreq.send();
//     myreq.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         res(JSON.parse(myreq.responseText));
//       } else {
//         rej("access denied");
//       }
//     };
//   });

// mypromReq("https://api.adviceslip.com/advice").then((res) => {
//   console.log(res);
// });

// connect to api by fetch
// let prom = fetch("https://api.adviceslip.com/advice");
// prom
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// connect to api by async and fetch
// get advice q and id span
let advQ = document.querySelector(".adviceCont blockquote q");
let advSpanId = document.querySelector(".adviceCont h2 span");
async function getData(api) {
  let myprom = await fetch(api);
  let apiData = await myprom.json();
  let advice = apiData["slip"]["advice"];
  let id = apiData["slip"]["id"];
  // submit data to dom
  advQ.innerHTML = advice;
  advSpanId.innerHTML = id;
}

// get advice every 2 second
// getData("https://api.adviceslip.com/advice");
// setInterval(() => {
//   getData("https://api.adviceslip.com/advice");
// }, 2000);

let dice = document.querySelector(".adviceCont .dice-cont");

dice.addEventListener("click", () => {
  dice.style.backgroundColor = "red";
  setTimeout(() => {
    getData("https://api.adviceslip.com/advice");
    advQ.classList.remove("first");
    setTimeout(() => {
      dice.style.backgroundColor = "var(--Neon-Grean)";
    }, 500);
  }, 500);
});
