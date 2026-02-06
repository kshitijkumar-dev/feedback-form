const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyEH8tfrdAsD8L3Ofqm2MrnUOWjHSuZ6iReiTxR5OiDlCW3WB7pjpgVHR36s4bPkpYD/exec";

document.getElementById("feedbackForm")
.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    alert("Feedback Submitted!");
    e.target.reset();
  })
  .catch(() => {
    alert("Submission Failed");
  });
});
