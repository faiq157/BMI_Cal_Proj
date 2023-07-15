const form = document.querySelector("form");
// this use case will give empty value
// const height = parseInt(document.querySelector("#Height").value);
//   const weight = parseInt(document.querySelector("#Weight").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);
  const results = document.querySelector("#Results");
  // isNaN is new technique which mean not a number
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter valid Weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the Result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
