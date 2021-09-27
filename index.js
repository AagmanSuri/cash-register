const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#errorMessage");

const MessageHide = () => {
  message.style.display = "none";
};

const errorMessage = (text) => {
  message.innerText = text;
};

checkButton.addEventListener("click", () => {
  MessageHide();
  if (billAmount.value > 0) {
    if (billAmount.value <= cashGiven.value) {
      message.style.display = "block";
    } else {
      message.style.display = "block";
      errorMessage("Do you want to clean dishes");
    }
  } else {
    message.style.display = "block";
    errorMessage("Bill amount can not be less than 0");
  }
});
