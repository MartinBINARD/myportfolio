export function onClickSubmitLoader() {
  const form = document.forms["form"];
  const submitBtn = document.querySelector("#submit-btn");

  form.addEventListener("submit", function () {
    submitBtn.classList.toggle("submit-btn--loading");
  });
}
