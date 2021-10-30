// import peopleTpl from "../templates/peopleTpl.hbs"
import { dataPeople } from "../data/people.js";
import { dataAccounts } from "../data/accounts.js";
// const Handlebars = require("handlebars");
// const template = Handlebars.compile("peopleTpl");

// import { dataAccount } from "../data/accounts"
console.log(dataPeople);
const refs = {
  accounts: document.querySelector("#accounts"),
  peopleOnline: document.querySelector("#online-people"),
  peopleOfline: document.querySelector("#ofline-people"),
  groups: document.querySelector("#groups ul"),
  content: document.querySelector("#content.div"),
};
const peopleOnlineMarkup = createPeopleMarkup(dataPeople, true);
const peopleOflineMarkup = createPeopleMarkup(dataPeople, false);
console.log(refs.people);
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

refs.peopleOnline.insertAdjacentHTML("beforeend", peopleOnlineMarkup);
refs.peopleOfline.insertAdjacentHTML("beforeend", peopleOflineMarkup);
function createPeopleMarkup(dataPeople, status) {
  return dataPeople
    .filter((people) => people.online === status)
    .map(({ picture, name, online }) => {
      return `<li class = "people-card">
      <p class = "people-tittel"> ${name}</p>
        <img
          class="people-image"
          src="${picture}"
          alt="${name}"
          width="100"
        />
     
    </li>`;
    })
    .join("");
}
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
const accountMarkup = createAccountMarkup(dataAccounts);
// console.log(refs.people);
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

refs.accounts.insertAdjacentHTML("beforeend", accountMarkup);
function createAccountMarkup(dataAccounts) {
  return dataAccounts
    .map(({ picture, name }) => {
      return `
      <button class="account-card"> 
    
        <img
          class="account-image"
          src="${picture}"
          alt="${name}"
          
        />
      </button>`;
    })
    .join("");
}
refs.accounts.addEventListener("click", (e) => {
  if (e.target.type == 'BUTTON') {
    e.target.classList.add("account-card-current");
  }
});
