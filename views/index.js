const URL = "http://localhost:3000/plr"

const list = document.querySelector("#list");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

async function loadList() {
  const res = await fetch(URL);
  const elements = await res.json();
  
  console.log(elements)
  for(element of elements) {
    console.log(JSON.stringify(element))
    list.innerHTML += `<li>${element.item} <img src="../assets/trash-bin.svg" style="height:20px;width:20px;" class="delete" id="${element.id}"></li>`
  }
  const trashBin = document.querySelectorAll(".delete");
  trashBin.forEach(icon => {
    icon.addEventListener("click", () => {
      fetch(`${URL}/${icon.id}`, {
        method: 'DELETE'
      })
      .then(res => location.reload())
      location.reload();
    })
  })
}

loadList();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"item": input.value })
  })
  .then(res => console.log(res));
  
})