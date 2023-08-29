const containerDiv = document.querySelector(".container");

const url = "http://localhost:5000";

const showUI = (data) => {
  for (let i = 0; i < data.length; i++) {
    const appDiv = document.createElement("div");
    appDiv.innerHTML = `<div class="menuCard">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZTuxtDWl7phR-V7RutwsSBzSMtWW7w-qFQ&usqp=CAU"
      alt=""
    />
    <div class="menuContent">
      <span class="name">${data[i].name}</span>
      <span class="price">${data[i].price}</span>
      <span class="description">${data[i].description}</span>
    </div>
  </div>`;
    containerDiv.append(appDiv);
  }
};

const getMenu = async () => {
  const response = await fetch(`${url}/menu`); // default method "GET" --> rerutn promise vlaue
  const data = await response.json(); // js
  console.log(data);
  showUI(data);
};

const createMenu = () => {
  const newMenu = { name: "test1", price: 1000, description: "hello" };
  console.log(newMenu);
};
