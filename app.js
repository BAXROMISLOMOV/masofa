let distancediv = document.querySelector("distance");
let button = document.querySelector("button");

let obj = {
  car: 90,
  bicyce: 20,
  plain: 400,
  train: 150,
  onFood: 10,
};
const select = document.querySelector("select");
for (const key in obj) {
  let newObj = document.createElement("option");

  newObj.textContent = key;
  newObj.value = obj[key];
  select.append(newObj);
}

select.addEventListener("change", (e) => {
  let speed = document.querySelector("input").value;

  let hour = speed / e.target.value;
  let minute = (hour * 60) % 60;
  let sekund = (minute * 60) % 60;
  alert(
    `Siz kiritgan transportda kiritilgan masofani ${parseInt(
      hour
    )} soat ${parseInt(minute)} minut ${parseInt(sekund)}  da bosib otasiz`
  );
});