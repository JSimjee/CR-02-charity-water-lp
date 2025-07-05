document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.querySelector(".subscribe-btn");
  const emailInput = document.querySelector(".email-input");
  const thankYouMsg = document.getElementById("thank-you-msg");

  subscribeBtn.addEventListener("click", () => {
    if (emailInput.value.trim() !== "") {
      thankYouMsg.style.display = "block";
      emailInput.value = "";
      subscribeBtn.disabled = true;

      setTimeout(() => {
        thankYouMsg.style.display = "none";
      }, 7000);
    }
  });

});
