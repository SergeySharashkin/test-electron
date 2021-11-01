// import peopleTpl from "../templates/peopleTpl.hbs"
import { dataPeople } from "../data/people.js";
import { dataAccounts } from "../data/accounts.js";
import{dataGroups} from "../data/groups.js";
// const Handlebars = require("handlebars");
// const template = Handlebars.compile("peopleTpl");

// import { dataAccount } from "../data/accounts"

const refs = {
  accounts: document.querySelector("#accounts"),
  peopleOnline: document.querySelector("#online-people"),
  peopleOfline: document.querySelector("#ofline-people"),
  people: document.querySelector("#people"),
  money: document.querySelector("#money"),
  muvie: document.querySelector("#muvie"),
  present: document.querySelector("#present"),
  funny: document.querySelector("#funny"),
  music: document.querySelector("#music"),
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
    .map(({ picture }) => {
      return `
      <button class="account-card" style="background-image: linear-gradient(to right, rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)), url('${picture}')"> 
    
      </button>`;
    })
    .join("");
}
refs.accounts.addEventListener("click", onAccountClick);
function onAccountClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const currentBtn = document.querySelector(".account-card-current");
  if (currentBtn) {
    currentBtn.classList.remove("account-card-current");
  }
  e.target.classList.add("account-card-current");
  //   console.log("aaa");
}
const groupMoneyMarkup = createGroupsMarkup(dataGroups, "money");
const groupMuvieMarkup = createGroupsMarkup(dataGroups, "muvie");
const groupPresentMarkup = createGroupsMarkup(dataGroups, "present");
const groupFunnyMarkup = createGroupsMarkup(dataGroups, "funny");
const groupMusicMarkup = createGroupsMarkup(dataGroups, "music");

// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

refs.money.insertAdjacentHTML("beforeend", groupMoneyMarkup);
refs.muvie.insertAdjacentHTML("beforeend", groupMuvieMarkup);
refs.present.insertAdjacentHTML("beforeend", groupPresentMarkup);
refs.funny.insertAdjacentHTML("beforeend", groupFunnyMarkup);
refs.music.insertAdjacentHTML("beforeend", groupMusicMarkup);

function createGroupsMarkup(dataGroups, status) {
  return dataGroups
    .filter((group) => group.category == status)
    .map(({ picture, groupName, category }) => {
      return `<li class = "group-card">
      <div class= account-img-contain><img
          class="group-image"
          src="${picture}"
          alt="${groupName}"
          
        />
        </div>
      <p class = "group-tittel"> ${groupName}</p>
        
    </li>`;
    })
    .join("");
}
refs.people.addEventListener("click", onPeopleClick);
function onPeopleClick(e) {
  if (e.target.nodeName!=='LI') {
      console.log(e.target.nodeName)
    return;
  }
  const currentPiople = document.querySelector(".people-current");
  if (currentPiople) {
    currentPiople.classList.remove("people-current");
  }
  e.target.classList.add("people-current");
  //   console.log("aaa");
}