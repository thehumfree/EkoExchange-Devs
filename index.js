function validateForm(event) {
  const checkbox = document.getElementById("checkbox");
  if (!checkbox.checked) {
    event.preventDefault();
    alert(
      "Please accept the Trading terms!!"
    );
  }
}
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");

btn1.addEventListener("click", function () {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn1.classList.remove("buybtn");
  btn2.classList.add("sellbtn");
  popup1.classList.add("active");
  popup2.classList.remove("active");
});

btn2.addEventListener("click", function () {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("sellbtn");
  btn1.classList.add("buybtn");
  popup2.classList.add("active");
  popup1.classList.remove("active");
});
