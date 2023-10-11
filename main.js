const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const cards = document.getElementById("cards");
const dogCards = document.getElementById("dog-cards");

let users = [];

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.data.forEach((user) => users.push(user.name));
  })
  .catch((err) => console.error(err));

function showUsers(e) {
  e.preventDefault();
  users.forEach((user) => {
    cards.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${user}</h5>
  </div></div>`;
  });
}
btn.addEventListener("click", showUsers);

//extras
axios
  .get("https://dog.ceo/api/breeds/list/all")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));

axios
  .get("https://dog.ceo/api/breed/hound/images")
  .then((res) => {
    res.data.message.forEach((imageUrl) => {
      dogCards.innerHTML += `
      <img src="${imageUrl}" alt="">`;
    });
  })
  .catch((err) => console.error(err));

axios
  .get("https://dog.ceo/api/breed/boxer/images")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));

let breeds = [];
function showBreeds(e) {
  e.preventDefault();
  breeds.forEach((breed) => {
    dogCards.innerHTML += `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${breed}</h5>
    </div></div>`;
  });
}
btn2.addEventListener("click", showBreeds);
