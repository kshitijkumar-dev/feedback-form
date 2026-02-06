document.getElementById("feedbackForm")
.addEventListener("submit", function(e){
e.preventDefault();
alert("Form Submitted Successfully");
this.reset();
});
