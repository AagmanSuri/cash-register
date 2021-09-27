const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll(".noOFNotes");

const availabelNotes = [2000, 500, 100, 20, 10, 5, 1];

const MessageHide = () => {
  message.style.display = "none";
};

const errorMessage = (text) => {
  message.innerText = text;
};

const calculateChange = (amountToBeReturned) => {
  for (var i = 0; i < availabelNotes.length; i++) {
    //   notes to return
    const notesToReturn = Math.trunc(amountToBeReturned / availabelNotes[i]);
    //current pending amount
    amountToBeReturned = amountToBeReturned % availabelNotes[i];
    //printing no of notes
    noOfNotes[i].innerText = notesToReturn;
  }
};

checkButton.addEventListener("click", () => {
  MessageHide();
  if (billAmount.value > 0) {
    if (billAmount.value <= cashGiven.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      message.style.display = "block";
      errorMessage("Do you want to clean dishes");
    }
  } else {
    message.style.display = "block";
    errorMessage("Bill amount can not be less than 0");
  }
});
