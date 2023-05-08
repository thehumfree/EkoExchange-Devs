const price = document.querySelectorAll('input[name="coin"]');
const amount = document.querySelector('input[name="amount"]');
const expect = document.getElementById("expect");
const sending = document.querySelectorAll('input[name="sending"]');

price.forEach((priceInput) => {
  priceInput.addEventListener("change", updateExpect);
});
amount.addEventListener("input", updateExpect);

async function updateExpect() {
  const selectedPrice = document.querySelector('input[name="coin"]:checked');
  selectedPrice ? selectedPrice.value : 0;
  const cal = "₦" + Math.floor(amount.value * selectedPrice.value);
  expect.innerHTML = cal;
  sending.value = cal;
}

async function fetchData() {
  const fetchPrice = await fetch("https://api.coincap.io/v2/assets");
  const data = await fetchPrice.json();
  return data.data;
}
