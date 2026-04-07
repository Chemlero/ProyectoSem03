form = document.querySelector("form");

form.querySelector("#calculate").addEventListener("click", function (e) {
  e.preventDefault();
  total = document.querySelector("#total");
  total.textContent = (parseFloat(form.querySelector("#count").value) * parseFloat(form.querySelector("#precio").value));
});

form.querySelector("#count").addEventListener("input", function (e) {
  total = document.querySelector("#count-value");
  total.textContent = (parseFloat(form.querySelector("#count").value));
});

form.querySelector("#precio").addEventListener("input", function (e) {
  total = document.querySelector("#precio-value");
  total.textContent = (parseFloat(form.querySelector("#precio").value));
});

form.addEventListener("submit").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Solicitando producto: " + form.querySelector("#producto").value);
});