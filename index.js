// var res = document.querySelector(".result");
// var sound = document.querySelector(".sound");
// var button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//   var input = document.querySelector(".input").value.toUpperCase();
//   console.log(input);
//   let data = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input);
//   data
//     .then((umar) => {
//       return umar.json();
//     })
//     .then((item) => {
//       console.log(item);
//       res.innerHTML = `<div class="word">
//           <h3>${input}</h3>
//           <button onclick="Playsound()">
//             <i class="fa-solid fa-volume-high"></i>
//           </button>
//         </div>
//         <div class="details">
//           <p>${item[0].meanings[0].partOfSpeech}</p>
//           <p>${item[0].phonetic ?? item[0].phonetics[2].text}</p>
//         </div>
//         <h3 class = "def">Definition : </h3>
//         <p class="word-meanings">
//           ${item[0].meanings[0].definitions[0].definition}
//         </p>
//         <h3 class = "meaning">Meaning : </h3>
//         <p class="word-example">
//         ${item[0].meanings[0].synonyms[0] ?? "Not Available"}
//         </p>`;
//       sound.setAttribute("src", `${item[0].phonetics[0].audio}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// function Playsound() {
//   sound.play();
// }

var box = document.querySelector(".box");
var btn = document.querySelector(".btn");
var text = document.querySelector(".text");
var Author = document.querySelector(".author");
btn.addEventListener("click", () => {
  let data = fetch("https://api.quotable.io/random");
  data
    .then((umar) => {
      return umar.json();
    })
    .then((item) => {
      console.log(item);
      text.textContent = item.content;
      Author.textContent = item.author;
    })
    .catch((err) => {
      console.log(err);
    });
});
